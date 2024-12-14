// Template field types must match EmailJS template variables exactly
export interface BaseEmailParams {
  to_name: string;      // {{to_name}}
  from_name: string;    // {{from_name}}
  from_email: string;   // {{from_email}}
  'g-recaptcha-response': string;
}

export interface FeedbackEmailParams extends BaseEmailParams {
  message: string;      // {{message}}
  rating: string;       // {{rating}}
}

export interface GPTIdeaEmailParams extends BaseEmailParams {
  tool_name: string;    // {{tool_name}}
  message: string;      // {{message}} - reused for description
  use_case: string;     // {{use_case}}
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