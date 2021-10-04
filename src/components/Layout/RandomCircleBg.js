import CircleSpring from '@/components/Common/CircleSpring';

const colors = [
  'bg-gray-700',
  'bg-red-700',
  'bg-yellow-700',
  'bg-green-700',
  'bg-blue-700',
  'bg-indigo-700',
  'bg-purple-700',
  'bg-pink-700',
];

const RandomCircleBg = () => {
  const circleList = [
    { className: 'w-36 h-36', styles: { top: -35, right: -40 }, delay: 350 },
    { className: 'w-44 h-44', styles: { top: 650, left: -100 }, delay: 350 },
    { className: 'w-44 h-44', styles: { bottom: 0, right: -100 }, delay: 350 },
  ];

  return (
    <>
      {circleList.map((circle, index) => {
        return (
          <CircleSpring
            key={`${index}`}
            className={`absolute rounded-full ${
              colors[Math.floor(Math.random() * colors.length)]
            } ${circle.className}`}
            style={{ ...circle.styles, zIndex: -1 }}
            delay={circle.delay}
          />
        );
      })}
    </>
  );
};

export default RandomCircleBg;
