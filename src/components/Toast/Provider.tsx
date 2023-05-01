'use client';

import React from 'react';

import Container from './Container';
import { generateUUidV4 } from '@/utils/index';

interface ProviderProps {
  children: React.ReactNode;
}

type SeverityTypes = 'primary' | 'success' | 'warning' | 'error';

interface ToastType {
  id?: string;
  title: string;
  description?: string;
  severity?: SeverityTypes;
}

interface IToastContext {
  toasts: ToastType[];
  addToast: ({ title, description, severity }: ToastType) => void;
  closeToast: (closeId: string) => void;
}

const ToastContext = React.createContext<IToastContext>({} as IToastContext);

export function Provider(props: ProviderProps) {
  const { children } = props;

  const [toasts, setToasts] = React.useState<ToastType[]>([]);

  const addToast = React.useCallback((params: ToastType) => {
    const { title, description, severity } = params;

    const newToast = { id: generateUUidV4(), title, description, severity };
    setToasts((prevState) => [newToast, ...prevState]);
  }, []);

  const closeToast = React.useCallback((toastId: string) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== toastId));
  }, []);

  const value = React.useMemo(
    () => ({ toasts, addToast, closeToast }),
    [toasts, addToast, closeToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Container />
    </ToastContext.Provider>
  );
}

export const useToast = () => React.useContext(ToastContext);
