import { useState, useEffect } from 'react';

import useHasMounted from './use-has-mounted.hook';

export default function useAudio(url) {
  const hasMounted = useHasMounted();
  const [audio, setAudio] = useState(null);

  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => setAudio(new Audio(url)), []);

  useEffect(() => {
    playing ? audio?.play() : audio?.pause();
  }, [audio, playing]);

  useEffect(() => {
    if (hasMounted) {
      audio.addEventListener('ended', () => setPlaying(false));
    }

    return () => {
      if (hasMounted) audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return { playing, toggle };
}
