import { ReactNode } from 'react';
import { InfoIcon, CheckCircleIcon, AlertCircleIcon, XCircleIcon } from '@/components/Icons';

export type IconMapping = {
  primary: ReactNode;
  success: ReactNode;
  warning: ReactNode;
  error: ReactNode;
  [key: string]: ReactNode;
};

export const iconMapping: IconMapping = {
  primary: <InfoIcon className="h-6 w-6 text-primary" />,
  success: <CheckCircleIcon className="h-6 w-6 text-success" />,
  warning: <AlertCircleIcon className="h-6 w-6 text-warning" />,
  error: <XCircleIcon className="h-6 w-6 text-error" />,
};
