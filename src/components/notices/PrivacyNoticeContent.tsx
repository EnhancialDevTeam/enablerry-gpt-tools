import React from 'react';
import { PrivacyDot } from './PrivacyDot';

export function PrivacyNoticeContent() {
  return (
    <div className="flex items-center justify-center gap-2 px-4">
      <PrivacyDot />
      <p className="text-primary font-medium">
        Your conversation data is NOT used by GPT to improve our models, only your feedback will be used.
      </p>
    </div>
  );
}