import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Blockquote(props: Props) {
  const { children } = props;
  return (
    <blockquote
      {...props}
      className="border-l-4 border-zinc-400 px-4 py-3 italic dark:border-zinc-600"
    >
      {children}
    </blockquote>
  );
}
