import { Icons } from '@/components/icons';
import Overview from './Overview';
import Calendar from './Calendar';

const Contributions = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="flex items-center gap-2 text-2xl">
                <Icons.gitHub className="h-6 w-6" />
                <span>Contributions</span>
            </h2>
            <p className="dark:text-zinc-400">{`My last year's contributions in Github.`}</p>
            <div className='flex flex-col gap-y-4'>
                <Overview />
                <Calendar />
            </div>
        </div>
    );
};

export default Contributions;
