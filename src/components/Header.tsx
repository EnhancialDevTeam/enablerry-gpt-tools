import React from 'react';
import { Navigation } from './navigation/Navigation';
import { CTAButton } from './buttons/CTAButton';

export function Header() {
  return (
    <>
      <Navigation />
      <header className="bg-gradient-to-br from-primary-light/5 via-white to-secondary/5 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Try Our GPT Innovations Today!
          </h1>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
            Experience cutting-edge AI tools designed to optimize your workflows and inspire innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="https://chatgpt.com/g/g-675c80dcf0f88191b956968b2b102dfe-enablerry-prompt-studio"
              text="Test Enablerry Prompt Studio"
              primary
            />
            <CTAButton 
              href="https://chatgpt.com/g/g-675c2a4abbec819196d06293add3840d-research-report-organizer"
              text="Explore Report Organizer"
              outlined
            />
            <CTAButton 
              href="https://chatgpt.com/g/g-675c75c45b7c8191ba11e6e540a8cd7d-meeting-transcript-pro"
              text="Discover Meeting Transcript Pro"
            />
          </div>
        </div>
      </header>
    </>
  );
}