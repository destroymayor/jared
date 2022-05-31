export default function ContentFooter(props) {
  const { lastUpdated } = props;

  return (
    <div className="flex items-center justify-center py-10 text-center text-lg italic text-zinc-600 dark:text-zinc-500">
      <span className="pr-2">Last Updated:</span>
      <strong>{lastUpdated}</strong>
    </div>
  );
}
