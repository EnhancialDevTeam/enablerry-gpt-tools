import type { EmailTemplateData, EmailResponse } from '../../types';

export interface EmailServiceInterface {
  sendFeedback(data: Omit<EmailTemplateData, 'to_name'>): Promise<EmailResponse>;
  sendGPTIdea(data: Omit<EmailTemplateData, 'to_name'>): Promise<EmailResponse>;
}