import { motion, useMotionValue } from 'framer-motion';

import DockItem from '@/components/Dock/DockItem';

export default function Dock(props) {
  const { data = [] } = props;

  const mouseX = useMotionValue(null);

  return (
    <motion.div
      className="fixed -bottom-2 left-1/2 z-10 flex h-[70px] w-auto translate-y-16 items-end gap-2 rounded-[20px] border border-zinc-800 bg-black py-[10px] px-[10px] [transform:translate(-50%,-50%)]"
      initial={{
        opacity: 0,
        transform: 'transform(-50%, -50%) translateY(64px)',
      }}
      animate={{
        opacity: 1,
        transform: 'transform(-50%, -50%) translateY(0px)',
        animation: '500ms ease 200ms 1 normal forwards running',
      }}
      onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
      onMouseLeave={() => mouseX.set(null)}
    >
      {data.map((item) => (
        <DockItem key={item.title} item={item} mouseX={mouseX}></DockItem>
      ))}
    </motion.div>
  );
}
