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
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl border border-neutral-200">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-primary mr-3" />
        <h3 className="text-xl font-semibold text-neutral-900">{name}</h3>
      </div>
      <p className="text-neutral-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-neutral-700">
            <span className="mr-2 text-primary">•</span>
            {feature}
          </li>
        ))}
      </ul>
      {stats && <p className="text-sm text-neutral-500 mb-4">{stats}</p>}
      <a
        href={url}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Try Now
      </a>
    </div>
  );
}