import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  url: string;
  stats?: string;
}

export function ToolCard({ name, description, features, icon: Icon, url, stats }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl border border-neutral-200">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-primary/5 rounded-lg mr-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-primary">{name}</h3>
      </div>
      <p className="text-neutral-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-neutral-700">
            <span className="mr-3 text-secondary">•</span>
            {feature}
          </li>
        ))}
      </ul>
      {stats && (
        <p className="text-sm text-neutral-500 mb-6 flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2"></span>
          {stats}
        </p>
      )}
      <a
        href={url}
        className="inline-flex items-center px-5 py-2.5 rounded-md text-white bg-secondary hover:bg-secondary-dark transition-colors duration-200 shadow-md hover:shadow-lg font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        Try Now
      </a>
    </div>
  );
}