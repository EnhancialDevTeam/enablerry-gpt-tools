import emailjs from '@emailjs/browser';
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

  private init() {
    if (!this.initialized) {
      try {
        emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
        this.initialized = true;
        console.log('EmailJS initialized successfully');
      } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
        throw error;
      }
    }
  }

  public async send(serviceId: string, templateId: string, templateParams: Record<string, any>) {
    if (!this.initialized) {
      await this.init();
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200) {
        return { success: true };
      }
      throw new Error(`Email sending failed with status: ${response.status}`);
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  }
}

export const emailClient = EmailClient.getInstance();