export interface BaseEmailParams {
  to_name: string;
  from_name: string;
  from_email: string;
  'g-recaptcha-response': string;
}

export interface FeedbackEmailParams extends BaseEmailParams {
  message: string;
  rating?: number;
}

export interface GPTIdeaEmailParams extends BaseEmailParams {
  tool_name: string;
  description: string;
  use_case: string;
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