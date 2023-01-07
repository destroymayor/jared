import { ReactNode } from 'react';
import { InfoIcon, CheckCircleIcon, AlertCircleIcon, XCircleIcon } from '@/components/Icons';

export type IconMapping = 'primary' | 'success' | 'warning' | 'error' | string;

export const iconMapping: Record<IconMapping, ReactNode> = {
  primary: <InfoIcon className="text-blue-500" />,
  success: <CheckCircleIcon className="text-green-500" />,
  warning: <AlertCircleIcon className="text-amber-500" />,
  error: <XCircleIcon className="text-red-500" />,
};
