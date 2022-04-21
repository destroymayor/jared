export default function Blockquote(props) {
  const { children } = props;
  return (
    <blockquote
      {...props}
      className="border-l-4 border-zinc-400 py-3 px-4 italic dark:border-zinc-600"
    >
      {children}
    </blockquote>
  );
}
