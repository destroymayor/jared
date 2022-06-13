import { useState, useRef } from 'react';

import { PlayIcon, PauseIcon } from '@/components/FeatherIcons';

const BGM_PATH = '/bgm/bloody_ice.ogg';

export default function BgmPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlaying = () => {
    playing ? audioRef.current.pause() : audioRef.current.play();

    setPlaying((prev) => !prev);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={BGM_PATH} type="audio/ogg" />
      </audio>
      <button
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 dark:hover:ring-zinc-600"
        type="button"
        aria-label="Play/pause BGM"
        onClick={handlePlaying}
      >
        <span className="h-6 w-6">{playing ? <PauseIcon /> : <PlayIcon />}</span>
      </button>
    </>
  );
}
