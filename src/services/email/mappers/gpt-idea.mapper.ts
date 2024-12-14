import type { SendEmailParams, GPTIdeaEmailParams } from '../types';
import { RecaptchaValidator } from '../../../utils/validation/recaptcha';

export function mapGPTIdeaData(params: SendEmailParams): GPTIdeaEmailParams {
  const validator = RecaptchaValidator.getInstance();
  
  // Ensure all template variables are properly mapped
  return {
    to_name: 'Enablerry Team',                // {{to_name}}
    from_name: params.fromName || 'Anonymous',// {{from_name}}
    from_email: params.fromEmail,            // {{from_email}}
    tool_name: params.toolName || '',        // {{tool_name}}
    description: params.description || '',    // {{description}}
    use_case: params.useCase || '',          // {{use_case}}
    'g-recaptcha-response': params.recaptchaToken || validator.getMockToken(),
  };
}