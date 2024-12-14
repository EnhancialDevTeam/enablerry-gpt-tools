import { emailClient } from './emailClient';
import { EMAIL_CONFIG } from '../../config/email.config';
import { mapFeedbackData, mapGPTIdeaData } from './mappers';
import type { EmailTemplateData, EmailResponse } from '../../types';

class EmailService {
  private static instance: EmailService;

  private constructor() {}

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  public async sendEmail(data: Omit<EmailTemplateData, 'to_name'>): Promise<EmailResponse> {
    try {
      const templateId = data.form_type === 'feedback' 
        ? EMAIL_CONFIG.TEMPLATE_IDS.FEEDBACK 
        : EMAIL_CONFIG.TEMPLATE_IDS.GPT_IDEA;

      const templateData = data.form_type === 'feedback'
        ? mapFeedbackData(data)
        : mapGPTIdeaData(data);

      console.log('Sending email with template data:', templateData);
      
      await emailClient.send(
        EMAIL_CONFIG.SERVICE_ID,
        templateId,
        {
          ...templateData,
          to_name: 'Enablerry Team',
        }
      );

      return { success: true };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send email'
      };
    }
  }
}

export const emailService = EmailService.getInstance();