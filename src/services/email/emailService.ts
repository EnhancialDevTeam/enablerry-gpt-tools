import { emailClient } from './emailClient';
import { EMAIL_CONFIG } from '../../config/email.config';
import { RecaptchaValidator } from '../../utils/validation/recaptcha';
import { mapFeedbackData, mapGPTIdeaData } from './mappers';
import type { EmailResponse, SendEmailParams } from './types';

class EmailService {
  private static instance: EmailService;
  private recaptchaValidator: RecaptchaValidator;

  private constructor() {
    this.recaptchaValidator = RecaptchaValidator.getInstance();
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  private getTemplateId(formType: string): string {
    return formType === 'feedback'
      ? EMAIL_CONFIG.TEMPLATE_IDS.FEEDBACK
      : EMAIL_CONFIG.TEMPLATE_IDS.GPT_IDEA;
  }

  public async sendEmail(params: SendEmailParams): Promise<EmailResponse> {
    try {
      const validationResult = this.recaptchaValidator.validate(params.recaptchaToken);
      
      if (!validationResult.isValid) {
        throw new Error(validationResult.error);
      }

      const templateId = this.getTemplateId(params.formType);
      const emailParams = params.formType === 'feedback'
        ? mapFeedbackData(params)
        : mapGPTIdeaData(params);

      return await emailClient.send(
        EMAIL_CONFIG.SERVICE_ID,
        templateId,
        emailParams
      );
    } catch (error) {
      console.error('Email service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email'
      };
    }
  }
}

export const emailService = EmailService.getInstance();