import React from 'react';
import { PrivacyNoticeContent } from './PrivacyNoticeContent';

export function PrivacyNotice() {
  return (
    <div 
      className="relative overflow-hidden bg-primary/5 py-3 my-8 rounded-lg"
      role="alert"
      aria-live="polite"
    >
      <div className="privacy-notice-container">
        <div className="privacy-notice-animation">
          <PrivacyNoticeContent />
        </div>
      </div>
    </div>
  );
}