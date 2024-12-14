import type { SendEmailParams, GPTIdeaEmailParams } from '../types';
import { RecaptchaValidator } from '../../../utils/validation/recaptcha';

export function mapGPTIdeaData(params: SendEmailParams): GPTIdeaEmailParams {
  const validator = RecaptchaValidator.getInstance();
  
  return {
    to_name: 'Enablerry Team',
    from_name: params.fromName,
    from_email: params.fromEmail,
    tool_name: params.toolName || '',
    description: params.description || '',
    use_case: params.useCase || '',
    'g-recaptcha-response': params.recaptchaToken || validator.getMockToken(),
  };
}