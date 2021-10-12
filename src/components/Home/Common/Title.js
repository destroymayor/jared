const Title = (props) => {
  const { icon, title } = props;

  return (
    <div className="flex items-center">
      <span className="w-8">{icon}</span>
      <h3 className="flex items-center justify-start text-lg font-bold sm:text-xl gap-x-2">
        {title}
      </h3>
    </div>
  );
};

export default Title;
