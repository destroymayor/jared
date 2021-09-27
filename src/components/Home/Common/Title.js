const Title = (props) => {
  const { icon, title } = props;

  return (
    <h3 className="flex items-center justify-start text-lg font-bold gap-x-2">
      {icon} <span>{title}</span>
    </h3>
  );
};

export default Title;
