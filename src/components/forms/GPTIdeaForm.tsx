import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { FormInput } from './FormInput';
import { SubmitButton } from './SubmitButton';
import { ReCaptcha } from './ReCaptcha';
import { useFormSubmission } from '../../hooks/useFormSubmission';

export function GPTIdeaForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    useCase: '',
    email: '',
    name: ''
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const { status, errorMessage, handleSubmit } = useFormSubmission({
    onSuccess: () => {
      setFormData({ title: '', description: '', useCase: '', email: '', name: '' });
      setRecaptchaToken(null);
    },
    eventName: 'gpt_idea_submission',
    eventCategory: 'Engagement',
    eventLabel: 'GPT Idea Form'
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    await handleSubmit({
      from_name: formData.name,
      from_email: formData.email,
      tool_name: formData.title,
      description: formData.description,
      use_case: formData.useCase,
      form_type: 'gpt_idea',
      recaptcha_token: recaptchaToken
    });
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="h-6 w-6 text-secondary" />
        <h3 className="text-2xl font-semibold text-neutral-900">Suggest a GPT Tool</h3>
      </div>

      <div className="flex-grow">
        <FormInput
          id="name"
          label="Full Name"
          required
          value={formData.name}
          onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
        />

        <FormInput
          id="email"
          label="Email Address"
          type="email"
          required
          value={formData.email}
          onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
        />

        <FormInput
          id="title"
          label="Tool Name"
          required
          placeholder="E.g., Code Review GPT"
          value={formData.title}
          onChange={(value) => setFormData(prev => ({ ...prev, title: value }))}
        />

        <FormInput
          id="description"
          label="Description"
          type="textarea"
          required
          placeholder="What should this GPT tool do?"
          value={formData.description}
          onChange={(value) => setFormData(prev => ({ ...prev, description: value }))}
          rows={3}
        />

        <FormInput
          id="useCase"
          label="Use Case"
          type="textarea"
          required
          placeholder="How would you use this tool in your workflow?"
          value={formData.useCase}
          onChange={(value) => setFormData(prev => ({ ...prev, useCase: value }))}
          rows={2}
        />

        <ReCaptcha onChange={setRecaptchaToken} />
      </div>

      <div className="mt-auto">
        <SubmitButton
          status={status}
          text="Submit Idea"
          className="bg-secondary text-white hover:bg-secondary-dark"
        />

        {status === 'success' && (
          <p className="mt-4 text-green-600">Thank you for your suggestion!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600">{errorMessage || 'Failed to send suggestion. Please try again.'}</p>
        )}

        <p className="mt-4 text-sm text-neutral-500">
          We'll review your idea and contact you if selected for development.
        </p>
      </div>
    </form>
  );
}