export interface FormStatus {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export interface FormData {
  name?: string;
  email?: string;
  feedback?: string;
  title?: string;
  description?: string;
  useCase?: string;
}

export interface EmailResponse {
  success: boolean;
  response?: any;
  error?: any;
}