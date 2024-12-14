import { emailClient } from './emailClient';
import { EMAIL_CONFIG } from '../../config/email.config';
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
      const templateParams = {
        to_name: 'Enablerry Team',
        from_name: data.from_name,
        from_email: data.from_email,
        message: data.message,
        rating: data.rating,
        g_recaptcha_response: data.recaptcha_token
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
        to_name: 'Enablerry Team',
        from_name: data.from_name,
        from_email: data.from_email,
        tool_name: data.tool_name,
        description: data.description,
        use_case: data.use_case,
        g_recaptcha_response: data.recaptcha_token
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

// Export a singleton instance
export const emailService = EmailService.getInstance();