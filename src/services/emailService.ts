import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../constants/config';
import type { EmailTemplateData, EmailResponse } from '../types';

class EmailService {
  private static instance: EmailService;

  private constructor() {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
  }

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

      const emailData = {
        ...data,
        to_name: 'Enablerry Team',
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        templateId,
        emailData
      );

      if (response.status === 200) {
        return { success: true };
      }
      
      throw new Error('Failed to send email');
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