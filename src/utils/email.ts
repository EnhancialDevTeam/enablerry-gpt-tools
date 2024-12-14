import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../constants/config';
import { EmailTemplateData, FormData, EmailResponse } from '../types';

export async function sendEmail(
  formData: FormData & { recaptcha_token: string; form_type: 'feedback' | 'gpt_idea' }
): Promise<EmailResponse> {
  try {
    await emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

    // Map form data to email template fields
    const emailData: EmailTemplateData = {
      to_name: 'Enablerry Team', // Default recipient name
      from_name: formData.name,
      from_email: formData.email,
      message: formData.feedback,
      rating: formData.rating,
      form_type: formData.form_type,
      recaptcha_token: formData.recaptcha_token
    };

    const templateId = formData.form_type === 'feedback' 
      ? EMAIL_CONFIG.TEMPLATE_IDS.FEEDBACK 
      : EMAIL_CONFIG.TEMPLATE_IDS.GPT_IDEA;

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