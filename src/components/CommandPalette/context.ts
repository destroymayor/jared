'use client';

import { createContext, useContext } from 'react';

import { CommandPaletteContextProps } from './types';

export const CommandPaletteContext = createContext<CommandPaletteContextProps>(
  {} as CommandPaletteContextProps
);

export const useCommandPalette = () => {
  const context = useContext(CommandPaletteContext);

  if (context === undefined) {
    throw new Error('useCommandPalette must be used within a Provider');
  }

  return context;
};
