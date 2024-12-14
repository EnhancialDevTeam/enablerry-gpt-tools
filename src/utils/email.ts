import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../constants/config';

interface EmailData {
  from_name?: string;
  from_email?: string;
  message?: string;
  rating?: number;
  tool_name?: string;
  description?: string;
  use_case?: string;
  form_type: 'feedback' | 'gpt_idea';
  recaptcha_token: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: any }> {
  try {
    const templateId = data.form_type === 'feedback' 
      ? EMAIL_CONFIG.TEMPLATE_IDS.FEEDBACK 
      : EMAIL_CONFIG.TEMPLATE_IDS.GPT_IDEA;

    const emailData = {
      ...data,
      to_email: EMAIL_CONFIG.TO_EMAIL,
    };

    await emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
    
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      templateId,
      emailData
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      console.error('Email sending failed with status:', response.status);
      return { success: false, error: 'Failed to send email' };
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}