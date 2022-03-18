import clsx from 'clsx';

const types = {
  'fade-in-up': 'animate-fade-in-up',
  'fade-in-down': 'animate-fade-in-down',
};

export default function FadeInSection(props) {
  const { className, delay = 0, type = 'fade-in-up', style, children } = props;

  const animateType = types?.[type];

  return (
    <div
      {...props}
      className={clsx(animateType, className)}
      style={{ ...style, animationDelay: delay }}
    >
      {children}
    </div>
  );
}
