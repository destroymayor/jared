import CircleSpring from '@/components/Common/CircleSpring';

const RandomCircleBg = () => {
  const circleList = [
    { className: 'w-36 h-36 bg-blue-500', styles: { top: -35, right: -40 }, delay: 350 },
    {
      className: 'w-44 h-44 bg-blue-600',
      styles: { top: '25rem', left: -100 },
      delay: 350,
    },
    {
      className: 'w-44 h-44 bg-blue-700',
      styles: { bottom: '1rem', right: -100 },
      delay: 350,
    },
  ];

  return (
    <>
      {circleList.map((circle, index) => {
        return (
          <CircleSpring
            key={`${index}`}
            className={`absolute rounded-full ${circle.className}`}
            style={{ ...circle.styles, zIndex: -1 }}
            delay={circle.delay}
          />
        );
      })}
    </>
  );
};

export default RandomCircleBg;
