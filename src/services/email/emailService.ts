import { emailClient } from './emailClient';
import { EMAIL_CONFIG } from '../../config/email.config';
import { EMAIL_TEMPLATES } from './templates';
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

  private mapTemplateData(data: Omit<EmailTemplateData, 'to_name'>, type: 'feedback' | 'gpt_idea'): Record<string, any> {
    const template = type === 'feedback' ? EMAIL_TEMPLATES.FEEDBACK : EMAIL_TEMPLATES.GPT_IDEA;
    
    const baseData = {
      to_name: template.FIELDS.TO_NAME,
      [template.FIELDS.FROM_NAME]: data.from_name,
      [template.FIELDS.FROM_EMAIL]: data.from_email,
    };

    if (type === 'feedback') {
      return {
        ...baseData,
        [template.FIELDS.MESSAGE]: data.message,
        [template.FIELDS.RATING]: data.rating,
      };
    }

    return {
      ...baseData,
      [template.FIELDS.TOOL_NAME]: data.tool_name,
      [template.FIELDS.DESCRIPTION]: data.description,
      [template.FIELDS.USE_CASE]: data.use_case,
    };
  }

  public async sendEmail(data: Omit<EmailTemplateData, 'to_name'>): Promise<EmailResponse> {
    try {
      const templateId = data.form_type === 'feedback' 
        ? EMAIL_CONFIG.TEMPLATE_IDS.FEEDBACK 
        : EMAIL_CONFIG.TEMPLATE_IDS.GPT_IDEA;

      const templateData = this.mapTemplateData(data, data.form_type);
      
      console.log('Sending email with template data:', templateData);
      
      const response = await emailClient.send(
        EMAIL_CONFIG.SERVICE_ID,
        templateId,
        templateData
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