import { emailClient } from './emailClient';
import { EMAIL_CONFIG } from '../../config/email.config';
import { mapFeedbackData, mapGPTIdeaData } from './mappers';
import type { EmailTemplateData, EmailResponse } from '../../types';
import type { EmailServiceInterface } from './types';

class EmailService implements EmailServiceInterface {
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
      const templateParams = mapFeedbackData(data);
      
      console.log('Sending feedback with params:', templateParams);
      
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
      const templateParams = mapGPTIdeaData(data);
      
      console.log('Sending GPT idea with params:', templateParams);
      
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