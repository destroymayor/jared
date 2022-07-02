import { motion } from 'framer-motion';
import Tabs from '@/components/Tabs';

export default function Menu(props) {
  const { options, onSelect } = props;

  const handleSelect = (option) => {
    onSelect(option);
  };

  return (
    <motion.div className="max-h-80 overflow-y-auto">
      {options.map((option) => (
        <div key={option.title} className={option.children.length === 0 ? 'hidden' : ''}>
          <div className="p-2 text-xs text-zinc-400">{option.title}</div>

          <Tabs direction="vertical">
            {option.children.map((child) => (
              <button
                key={child.title}
                className="flex w-full items-center gap-3 p-2 text-zinc-600 transition-colors duration-200 ease-in-out hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-white"
                onClick={() => handleSelect(child)}
              >
                <span className="h-5 w-5">{child.icon}</span>
                <span>{child.title}</span>
              </button>
            ))}
          </Tabs>
        </div>
      ))}
    </motion.div>
  );
}
