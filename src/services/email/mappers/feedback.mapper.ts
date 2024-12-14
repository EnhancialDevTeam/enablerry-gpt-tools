import type { SendEmailParams, FeedbackEmailParams } from '../types';
import { RecaptchaValidator } from '../../../utils/validation/recaptcha';

export function mapFeedbackData(params: SendEmailParams): FeedbackEmailParams {
  const validator = RecaptchaValidator.getInstance();
  
  // Ensure all template variables are properly mapped
  return {
    to_name: 'Enablerry Team',                 // {{to_name}}
    from_name: params.fromName || 'Anonymous', // {{from_name}}
    from_email: params.fromEmail,             // {{from_email}}
    message: params.message || '',            // {{message}}
    rating: params.rating?.toString() || '0', // {{rating}}
    'g-recaptcha-response': params.recaptchaToken || validator.getMockToken(),
  };
}