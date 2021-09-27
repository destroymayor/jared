import Header from '@/components/Home/Header/Header';
import Skill from '@/components/Home/Skills/Skills';
import WorkExperience from '@/components/Home/WorkExperience/WorkExperience';
import Education from '@/components/Home/Education/Education';

const Home = () => (
  <div className="relative">
    <div
      className="absolute w-48 h-48 bg-blue-300 rounded-full dark:bg-blue-800 -left-16"
      style={{ zIndex: '-10', top: -80 }}
    />

    <Header />
    <Skill />
    <WorkExperience />
    <Education />
  </div>
);

export default Home;
