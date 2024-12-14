import React, { useState } from 'react';
import { Star } from 'lucide-react';

export function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submission', {
        'event_category': 'Engagement',
        'event_label': 'Feedback Form'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-neutral-200">
      <h3 className="text-2xl font-semibold mb-6 text-neutral-900">Share Your Feedback</h3>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-neutral-700 mb-2">Full Name *</label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-neutral-700 mb-2">Email Address *</label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="feedback" className="block text-neutral-700 mb-2">Your Feedback *</label>
        <textarea
          id="feedback"
          required
          minLength={50}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          rows={4}
          value={formData.feedback}
          onChange={(e) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
        />
      </div>

      <div className="mb-6">
        <label className="block text-neutral-700 mb-2">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="focus:outline-none"
            >
              <Star
                className={`h-6 w-6 ${
                  star <= rating ? 'text-accent fill-current' : 'text-neutral-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-200"
      >
        Submit Feedback
      </button>

      {status === 'success' && (
        <p className="mt-4 text-green-600">Thank you for your feedback!</p>
      )}

      <p className="mt-4 text-sm text-neutral-500">
        By submitting this form, you agree to our Privacy Policy and Terms of Use.
      </p>
    </form>
  );
}