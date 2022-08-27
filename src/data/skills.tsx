import { ReactNode } from 'react';

import {
  NextJSIcon,
  ReactWhiteIcon,
  StyledComponentsIcon,
  TailwindCSSIcon,
  GitIcon,
  TypeScriptIcon,
} from '@/components/Icons';

interface ISkill {
  label: string;
  icon: ReactNode;
}

const data: ISkill[] = [
  { label: 'TypeScript', icon: <TypeScriptIcon /> },
  { label: 'React', icon: <ReactWhiteIcon /> },
  { label: 'Next.js', icon: <NextJSIcon /> },
  { label: 'Tailwind CSS', icon: <TailwindCSSIcon /> },
  { label: 'styled-components', icon: <StyledComponentsIcon /> },
  { label: 'Git', icon: <GitIcon /> },
];

export default data;
