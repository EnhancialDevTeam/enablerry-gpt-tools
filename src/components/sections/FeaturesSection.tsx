import React from 'react';
import { Brain, FileText, MessageSquare } from 'lucide-react';
import { ToolCard } from '../cards/ToolCard';

const tools = [
  {
    name: 'Enablerry Prompt Studio',
    description: 'Generate precise, tailored prompts for any task.',
    features: [
      'AI-powered prompt generation',
      'Context-aware suggestions',
      'Real-time optimization'
    ],
    icon: Brain,
    url: 'https://chatgpt.com/g/g-675c80dcf0f88191b956968b2b102dfe-enablerry-prompt-studio',
    buttonText: 'Try Now'
  },
  {
    name: 'Enablerry Report Organizer',
    description: 'Create professional business reports with advanced data analysis.',
    features: [
      'Automated data processing',
      'Smart report structuring',
      'Executive summary generation'
    ],
    icon: FileText,
    url: 'https://chatgpt.com/g/g-675c2a4abbec819196d06293add3840d-research-report-organizer',
    buttonText: 'Explore'
  },
  {
    name: 'Meeting Transcript Pro',
    description: 'Transform meeting transcripts into actionable summaries.',
    features: [
      'Intelligent transcription',
      'Key points extraction',
      'Action item tracking'
    ],
    icon: MessageSquare,
    url: 'https://chatgpt.com/g/g-675c75c45b7c8191ba11e6e540a8cd7d-meeting-transcript-pro',
    buttonText: 'Discover'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Our AI Solutions
        </h2>
        <p className="text-xl text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
          Powerful tools designed to streamline your workflow and boost productivity
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}