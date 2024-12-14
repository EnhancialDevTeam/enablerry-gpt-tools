import React from 'react';
import { FeedbackForm } from '../forms/FeedbackForm';
import { GPTIdeaForm } from '../forms/GPTIdeaForm';

export function FeedbackSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white" id="feedback">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Help Us Improve
        </h2>
        <p className="text-xl text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
          Share your feedback and ideas to shape the future of our AI tools
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FeedbackForm />
          <GPTIdeaForm />
        </div>
      </div>
    </section>
  );
}