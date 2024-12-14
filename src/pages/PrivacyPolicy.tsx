import React from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/Footer';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="text-sm text-neutral-600 mb-8">Effective Date: 13/12/2024</p>

          <p className="mb-6">
            At Enablerry Solutions, we prioritize the privacy of our users and are committed to safeguarding 
            the personal information you provide while using our website (gpt.enablerry.com) and associated 
            services. This Privacy Policy explains how we collect, use, and protect your data in compliance 
            with applicable regulations, including the GDPR.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect the following personal information from you when you interact with our website and services:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Full Name: Provided via feedback forms or GPT suggestion forms.</li>
            <li>Email Address: For communication purposes and feedback follow-ups.</li>
            <li>Feedback Text: Submitted to improve our AI tools.</li>
            <li>Tool Suggestions: Details about suggested GPT tools, their use case, and description.</li>
            <li>Cookies and Analytics Data: Collected using Google Analytics to understand website usage patterns.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
          <p>The personal information we collect is used for the following purposes:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>To analyze feedback and suggestions for improving our AI tools.</li>
            <li>To communicate with you about updates, new features, or feedback-related inquiries.</li>
            <li>To optimize our website and user experience through analytics.</li>
            <li>To ensure compliance with applicable laws and regulations.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Data Protection</h2>
          <p>We implement the following security measures to protect your data:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>SSL encryption for secure data transmission.</li>
            <li>Secure server hosting via Netlify.</li>
            <li>reCAPTCHA for bot prevention.</li>
            <li>EmailJS integration for secure feedback handling.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. User Rights</h2>
          <p>As a user, you have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access: Request a copy of the personal data we hold about you.</li>
            <li>Correction: Request corrections to inaccurate or incomplete data.</li>
            <li>Deletion: Request the deletion of your personal data.</li>
            <li>Opt-Out: Withdraw consent for data processing or email communications.</li>
          </ul>

          <p className="mt-8">
            For questions about this Privacy Policy or our data handling practices, please contact us at{' '}
            <a href="mailto:hello@enablerry.com" className="text-primary hover:text-primary-dark">
              hello@enablerry.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}