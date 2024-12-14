import emailjs from '@emailjs/browser';
import type { EmailTemplateParams, EmailResponse } from './types';
import { EMAIL_CONFIG } from '../../config/email.config';

class EmailClient {
  private static instance: EmailClient;
  private initialized: boolean = false;

  private constructor() {
    this.init();
  }

  public static getInstance(): EmailClient {
    if (!EmailClient.instance) {
      EmailClient.instance = new EmailClient();
    }
    return EmailClient.instance;
  }

  private init(): void {
    if (!this.initialized) {
      emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
      this.initialized = true;
    }
  }

  public async send(
    serviceId: string,
    templateId: string,
    params: EmailTemplateParams
  ): Promise<EmailResponse> {
    try {
      const response = await emailjs.send(serviceId, templateId, {
        ...params,
        'g-recaptcha-response': params['g-recaptcha-response'], // Ensure correct parameter name
      });

      return { success: response.status === 200 };
    } catch (error) {
      console.error('EmailJS send error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email'
      };
    }
  }
}

export const emailClient = EmailClient.getInstance();