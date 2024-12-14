import { EMAIL_TEMPLATE_MAPPINGS } from './constants';
import type { EmailTemplateData } from '../../types';

export function mapFeedbackData(data: Omit<EmailTemplateData, 'to_name'>) {
  return {
    [EMAIL_TEMPLATE_MAPPINGS.FEEDBACK.from_name]: data.from_name,
    [EMAIL_TEMPLATE_MAPPINGS.FEEDBACK.message]: data.message,
    [EMAIL_TEMPLATE_MAPPINGS.FEEDBACK.rating]: data.rating,
    [EMAIL_TEMPLATE_MAPPINGS.FEEDBACK.email]: data.from_email,
    g_recaptcha_response: data.recaptcha_token
  };
}

export function mapGPTIdeaData(data: Omit<EmailTemplateData, 'to_name'>) {
  return {
    [EMAIL_TEMPLATE_MAPPINGS.GPT_IDEA.from_name]: data.from_name,
    [EMAIL_TEMPLATE_MAPPINGS.GPT_IDEA.message]: data.description,
    [EMAIL_TEMPLATE_MAPPINGS.GPT_IDEA.email]: data.from_email,
    [EMAIL_TEMPLATE_MAPPINGS.GPT_IDEA.tool_name]: data.tool_name,
    [EMAIL_TEMPLATE_MAPPINGS.GPT_IDEA.use_case]: data.use_case,
    g_recaptcha_response: data.recaptcha_token
  };
}