import type { SendEmailParams, FeedbackEmailParams } from '../types';
import { RecaptchaValidator } from '../../../utils/validation/recaptcha';

export function mapFeedbackData(params: SendEmailParams): FeedbackEmailParams {
  const validator = RecaptchaValidator.getInstance();
  
  return {
    to_name: 'Enablerry Team',
    from_name: params.fromName,
    from_email: params.fromEmail,
    message: params.message || '',
    rating: params.rating,
    'g-recaptcha-response': params.recaptchaToken || validator.getMockToken(),
  };
}