export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex transform items-center rounded-md bg-gradient-to-r from-green-400 to-blue-500 transition hover:scale-[1.1]"
    >
      <div className="m-[2px] flex items-center gap-2 rounded bg-gray-200 p-1 dark:bg-black">
        {children}
      </div>
    </button>
  );
}
