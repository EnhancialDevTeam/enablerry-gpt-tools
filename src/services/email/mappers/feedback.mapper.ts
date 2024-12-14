import type { SendEmailParams, FeedbackEmailParams } from '../types';
import { EMAIL_TEMPLATE_FIELDS } from '../../../config/email.config';
import { RecaptchaValidator } from '../../../utils/validation/recaptcha';

export function mapFeedbackData(params: SendEmailParams): FeedbackEmailParams {
  const validator = RecaptchaValidator.getInstance();
  const fields = EMAIL_TEMPLATE_FIELDS;
  
  // Map data to match template variables exactly
  return {
    [fields.COMMON.TO_NAME]: 'Enablerry Team',
    [fields.COMMON.FROM_NAME]: params.fromName || 'Anonymous',
    [fields.COMMON.FROM_EMAIL]: params.fromEmail,
    [fields.FEEDBACK.MESSAGE]: params.message || '',
    [fields.FEEDBACK.RATING]: params.rating?.toString() || '0',
    'g-recaptcha-response': params.recaptchaToken || validator.getMockToken(),
  };
}