export interface FormStatus {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export interface FormData {
  name: string;
  email: string;
  feedback: string;
  rating?: number;
}

export interface EmailTemplateData {
  to_name: string;
  from_name: string;
  from_email: string;
  message: string;
  rating?: number;
  form_type: 'feedback' | 'gpt_idea';
  recaptcha_token: string;
}

export interface EmailResponse {
  success: boolean;
  error?: any;
}