import Layout from '@/layouts/layout';

export default function MainLayout(props) {
  const { children, title, description } = props;

  return (
    <Layout>
      <h1 className="text-3xl">{title}</h1>
      <p className="pt-2 dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />

      {children}
    </Layout>
  );
}
