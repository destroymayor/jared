import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import useRaf from '@rooks/use-raf';

import Link from '@/components/Link';
import clsx from 'clsx';

const baseWidth = 48;
const distanceLimit = baseWidth * 6;
const beyondTheDistanceLimit = distanceLimit + 1;
const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.2,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.2,
  distanceLimit,
];
const widthOutput = [
  baseWidth,
  baseWidth * 1,
  baseWidth * 1.4,
  baseWidth * 2.2,
  baseWidth * 1.4,
  baseWidth * 1,
  baseWidth,
];

export default function DockItem(props) {
  const { item, mouseX } = props;

  const [animateObj, setAnimateObj] = useState({ translateY: ['0%', '0%', '0%'] });
  const [isHover, setIsHover] = useState(false);

  const ref = useRef();
  const distance = useMotionValue(beyondTheDistanceLimit);
  const width = useSpring(useTransform(distance, distanceInput, widthOutput), {
    damping: 25,
    stiffness: 250,
  });

  useRaf(() => {
    const el = ref.current;
    const mouseXVal = mouseX.get();
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect();
      const imgCenterX = rect.left + rect.width / 2;

      const distanceDelta = mouseXVal - imgCenterX;
      distance.set(distanceDelta);
      return;
    }

    distance.set(beyondTheDistanceLimit);
  }, true);

  return (
    <Link href={item.pathname}>
      <motion.div
        ref={ref}
        onTap={() => setAnimateObj({ translateY: ['0%', '-160%', '0%'] })}
        initial={false}
        animate={animateObj}
        transition={{ type: 'spring', duration: 0.5 }}
        transformTemplate={({ translateY }) => `translateY(${translateY})`}
        className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-[23%] border-0 bg-zinc-100 p-3 shadow dark:bg-zinc-800"
        style={{ width, height: width }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.span
          initial={false}
          animate={{
            opacity: isHover ? 1 : 0,
          }}
          className={clsx(
            'absolute -top-8 rounded border border-zinc-300 bg-zinc-100 px-2 text-sm dark:border-zinc-600 dark:bg-zinc-800'
          )}
        >
          {item.title}
        </motion.span>
        <span className="h-full w-full text-zinc-400">{item.icon}</span>
      </motion.div>
    </Link>
  );
}
