import { Github } from 'lucide-react';
import Overview from './Overview';
import Calendar from './Calendar';

const Contributions = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="flex items-center gap-2 text-2xl">
                <Github size={24} />
                <span>Contributions</span>
            </h2>
            <p className="dark:text-zinc-400">{`My last year's contributions in Github.`}</p>
            <Overview />
            <Calendar />
        </div>
    );
};

export default Contributions;
