import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_enablerry';
const EMAILJS_TEMPLATE_ID = 'template_feedback';
const EMAILJS_PUBLIC_KEY = 'MCMDp53ezb_n5AmJ2'; // Replace with your actual public key

export async function sendEmail(formData: Record<string, any>, templateId = EMAILJS_TEMPLATE_ID) {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      templateId,
      {
        to_email: 'hello@enablerry.com',
        ...formData
      },
      EMAILJS_PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}