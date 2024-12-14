import { useState } from 'react';
import { FormStatus } from '../types';

export function useFormStatus(initialStatus: FormStatus['status'] = 'idle') {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: initialStatus,
  });

  const updateStatus = (status: FormStatus['status'], message?: string) => {
    setFormStatus({ status, message });
  };

  return { formStatus, updateStatus };
}