import { ENV_CONFIG } from '../../config/environment.config';

interface RecaptchaValidationResult {
  isValid: boolean;
  error?: string;
}

export class RecaptchaValidator {
  private static instance: RecaptchaValidator;
  private isDisabled: boolean = ENV_CONFIG.DISABLE_RECAPTCHA;

  private constructor() {
    this.logValidationStatus();
  }

  public static getInstance(): RecaptchaValidator {
    if (!RecaptchaValidator.instance) {
      RecaptchaValidator.instance = new RecaptchaValidator();
    }
    return RecaptchaValidator.instance;
  }

  private logValidationStatus(): void {
    if (this.isDisabled) {
      console.warn(
        '[Security Warning] reCAPTCHA validation is disabled. This should only be used in development/testing environments.'
      );
    }
  }

  public validate(token: string | null): RecaptchaValidationResult {
    // Log validation attempt for security auditing
    console.info('[Security Audit] reCAPTCHA validation attempt:', {
      timestamp: new Date().toISOString(),
      isDisabled: this.isDisabled,
      hasToken: !!token
    });

    if (this.isDisabled) {
      return { 
        isValid: true,
        error: undefined 
      };
    }

    if (!token) {
      return {
        isValid: false,
        error: 'reCAPTCHA verification required'
      };
    }

    return { 
      isValid: true,
      error: undefined 
    };
  }

  public getMockToken(): string {
    return this.isDisabled ? 'mock-recaptcha-token-for-testing' : '';
  }
}