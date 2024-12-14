import React from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/Footer';

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Terms of Use</h1>
        <div className="prose prose-lg">
          <p className="text-sm text-neutral-600 mb-8">Effective Date: 13/12/2024</p>

          <p className="mb-6">
            Welcome to gpt.enablerry.com ("Website"), operated by Enablerry Solutions. By accessing and 
            using this Website and its AI tools, you agree to comply with the following Terms of Use. 
            If you do not agree, please discontinue use of the Website.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Use of the Website and Tools</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>The Website and AI tools are provided for testing, feedback collection, and service improvement purposes.</li>
            <li>Users must submit feedback and suggestions responsibly and ensure they do not include offensive, inappropriate, or unlawful content.</li>
            <li>The AI tools are provided "as is" without guarantees of specific outcomes or accuracy.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. User Obligations</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>You must provide accurate and complete information when submitting feedback or GPT tool suggestions.</li>
            <li>You agree not to misuse the AI tools or engage in activities that could harm the functionality of the Website or tools.</li>
            <li>You must not attempt to reverse engineer or exploit the tools for unauthorized purposes.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Intellectual Property</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>All feedback, suggestions, and AI-generated content submitted through this Website become the property of Enablerry Solutions.</li>
            <li>The AI tools and their outputs are proprietary to Enablerry Solutions and protected by intellectual property laws.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Disclaimer of Liability</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Enablerry Solutions is not liable for any inaccuracies, errors, or decisions made based on the outputs of the AI tools.</li>
            <li>The Website and tools are provided without warranties, express or implied, including merchantability or fitness for a particular purpose.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Data Privacy</h2>
          <p>
            By using this Website, you acknowledge and agree to our{' '}
            <a href="/privacy" className="text-primary hover:text-primary-dark">
              Privacy Policy
            </a>
            , which governs the collection, use, and protection of your data.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of the United Kingdom. Any disputes arising from 
            the use of this Website shall be resolved under the exclusive jurisdiction of UK courts.
          </p>

          <p className="mt-8">
            For questions about these Terms of Use, please contact us at{' '}
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