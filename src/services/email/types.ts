export interface BaseEmailParams {
  to_name: string;      // Required in template
  from_name: string;    // Required in template
  from_email: string;   // Required in template
  'g-recaptcha-response': string;
}

export interface FeedbackEmailParams extends BaseEmailParams {
  message: string;      // Required in template
  rating: string;       // Required in template
}

export interface GPTIdeaEmailParams extends BaseEmailParams {
  tool_name: string;    // Required in template
  description: string;  // Required in template
  use_case: string;    // Required in template
}

export type EmailTemplateParams = FeedbackEmailParams | GPTIdeaEmailParams;

export interface EmailResponse {
  success: boolean;
  error?: string;
}

export interface SendEmailParams {
  fromName: string;
  fromEmail: string;
  recaptchaToken: string;
  formType: 'feedback' | 'gpt_idea';
  message?: string;
  rating?: number;
  toolName?: string;
  description?: string;
  useCase?: string;
}