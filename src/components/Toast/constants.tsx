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
  primary: <InfoIcon className="text-blue-500" />,
  success: <CheckCircleIcon className="text-green-500" />,
  warning: <AlertCircleIcon className="text-amber-500" />,
  error: <XCircleIcon className="text-red-500" />,
};
