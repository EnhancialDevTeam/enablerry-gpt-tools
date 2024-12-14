export interface EmailTemplateParams {
  to_name: string;
  from_name: string;
  from_email: string;
  message: string;
  rating?: number;
  'g-recaptcha-response': string; // Correct parameter name for reCAPTCHA
}

export interface EmailResponse {
  success: boolean;
  error?: string;
}

export interface EmailServiceConfig {
  serviceId: string;
  templateIds: {
    feedback: string;
    gptIdea: string;
  };
  publicKey: string;
}