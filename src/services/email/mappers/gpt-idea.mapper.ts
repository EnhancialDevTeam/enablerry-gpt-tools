import type { SendEmailParams, GPTIdeaEmailParams } from '../types';
import { EMAIL_TEMPLATE_FIELDS } from '../../../config/email.config';
import { RecaptchaValidator } from '../../../utils/validation/recaptcha';

export function mapGPTIdeaData(params: SendEmailParams): GPTIdeaEmailParams {
  const validator = RecaptchaValidator.getInstance();
  const fields = EMAIL_TEMPLATE_FIELDS;
  
  // Map data to match template variables exactly
  const mappedData: GPTIdeaEmailParams = {
    [fields.COMMON.TO_NAME]: 'Enablerry Team',
    [fields.COMMON.FROM_NAME]: params.fromName || 'Anonymous',
    [fields.COMMON.FROM_EMAIL]: params.fromEmail,
    [fields.GPT_IDEA.TOOL_NAME]: params.toolName || '',
    [fields.GPT_IDEA.DESCRIPTION]: params.description || '', // Maps to {{message}} in template
    [fields.GPT_IDEA.USE_CASE]: params.useCase || '',
    'g-recaptcha-response': params.recaptchaToken || validator.getMockToken(),
  };

  // Log mapped data for debugging (excluding sensitive info)
  console.log('GPT Idea mapped data:', {
    ...mappedData,
    'g-recaptcha-response': '[REDACTED]'
  });

  return mappedData;
}