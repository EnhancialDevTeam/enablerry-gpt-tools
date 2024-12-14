import { emailClient } from './emailClient';
import { EMAIL_CONFIG } from '../../config/email.config';
import type { EmailTemplateParams, EmailResponse } from './types';

interface SendEmailParams {
  fromName: string;
  fromEmail: string;
  message: string;
  rating?: number;
  recaptchaToken: string;
  formType: 'feedback' | 'gpt_idea';
}

class EmailService {
  private static instance: EmailService;

  private constructor() {}

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

  private formatEmailParams(params: SendEmailParams): EmailTemplateParams {
    return {
      to_name: 'Enablerry Team',
      from_name: params.fromName,
      from_email: params.fromEmail,
      message: params.message,
      rating: params.rating,
      'g-recaptcha-response': params.recaptchaToken, // Correct parameter name
    };
  }

  public async sendEmail(params: SendEmailParams): Promise<EmailResponse> {
    try {
      if (!params.recaptchaToken) {
        throw new Error('reCAPTCHA verification required');
      }

      const templateId = this.getTemplateId(params.formType);
      const emailParams = this.formatEmailParams(params);

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