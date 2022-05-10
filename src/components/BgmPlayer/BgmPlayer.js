import useAudio from '@/hooks/use-audio.hook';
import useHasMounted from '@/hooks/use-has-mounted.hook';

import { PlayIcon, PauseIcon } from '@/components/FeatherIcons';

const BGM_PATH = '/bgm/bloody_ice.ogg';

export default function BgmPlayer() {
  const { playing, toggle } = useAudio(BGM_PATH);
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <button
      className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 dark:hover:ring-zinc-600 sm:flex"
      type="button"
      aria-label="Play/pause BGM"
      onClick={toggle}
    >
      <span className="h-8 w-8 md:h-6 md:w-6">{playing ? <PauseIcon /> : <PlayIcon />}</span>
    </button>
  );
}
