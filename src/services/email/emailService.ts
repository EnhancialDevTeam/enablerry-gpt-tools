import { emailClient } from './emailClient';
import { EMAIL_CONFIG, EMAIL_TEMPLATE_FIELDS } from '../../config/email.config';
import type { EmailTemplateData, EmailResponse } from '../../types';

export class EmailService {
  private static instance: EmailService;

  private constructor() {}

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  public async sendFeedback(data: Omit<EmailTemplateData, 'to_name'>): Promise<EmailResponse> {
    try {
      const templateParams = {
        [EMAIL_TEMPLATE_FIELDS.FEEDBACK.TO_NAME]: 'Enablerry Team',
        [EMAIL_TEMPLATE_FIELDS.FEEDBACK.FROM_NAME]: data.from_name,
        [EMAIL_TEMPLATE_FIELDS.FEEDBACK.FROM_EMAIL]: data.from_email,
        [EMAIL_TEMPLATE_FIELDS.FEEDBACK.MESSAGE]: data.message,
        [EMAIL_TEMPLATE_FIELDS.FEEDBACK.RATING]: data.rating,
      };

      await emailClient.send(EMAIL_CONFIG.TEMPLATE_IDS.FEEDBACK, templateParams);
      return { success: true };
    } catch (error) {
      console.error('Failed to send feedback:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send feedback'
      };
    }
  }

  public async sendGPTIdea(data: Omit<EmailTemplateData, 'to_name'>): Promise<EmailResponse> {
    try {
      const templateParams = {
        [EMAIL_TEMPLATE_FIELDS.GPT_IDEA.TO_NAME]: 'Enablerry Team',
        [EMAIL_TEMPLATE_FIELDS.GPT_IDEA.FROM_NAME]: data.from_name,
        [EMAIL_TEMPLATE_FIELDS.GPT_IDEA.FROM_EMAIL]: data.from_email,
        [EMAIL_TEMPLATE_FIELDS.GPT_IDEA.TOOL_NAME]: data.tool_name,
        [EMAIL_TEMPLATE_FIELDS.GPT_IDEA.DESCRIPTION]: data.description,
        [EMAIL_TEMPLATE_FIELDS.GPT_IDEA.USE_CASE]: data.use_case,
      };

      await emailClient.send(EMAIL_CONFIG.TEMPLATE_IDS.GPT_IDEA, templateParams);
      return { success: true };
    } catch (error) {
      console.error('Failed to send GPT idea:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send suggestion'
      };
    }
  }
}

export const emailService = EmailService.getInstance();