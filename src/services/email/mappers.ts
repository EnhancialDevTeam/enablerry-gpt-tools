import { EMAIL_TEMPLATE_FIELDS } from '../../config/email.config';
import type { EmailTemplateData } from '../../types';

export function mapFeedbackData(data: Omit<EmailTemplateData, 'to_name'>) {
  const fields = EMAIL_TEMPLATE_FIELDS.FEEDBACK;
  
  return {
    [fields.FROM_NAME]: data.from_name,
    [fields.FROM_EMAIL]: data.from_email,
    [fields.MESSAGE]: data.message,
    [fields.RATING]: data.rating,
    g_recaptcha_response: data.recaptcha_token
  };
}

export function mapGPTIdeaData(data: Omit<EmailTemplateData, 'to_name'>) {
  const fields = EMAIL_TEMPLATE_FIELDS.GPT_IDEA;
  
  return {
    [fields.FROM_NAME]: data.from_name,
    [fields.FROM_EMAIL]: data.from_email,
    [fields.TOOL_NAME]: data.tool_name,
    [fields.DESCRIPTION]: data.description,
    [fields.USE_CASE]: data.use_case,
    g_recaptcha_response: data.recaptcha_token
  };
}