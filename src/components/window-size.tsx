import useWindowSize from '@/hooks/use-window-size.hook';

export default function WindowSize() {
    const { width, height } = useWindowSize();

    return (
        <div className="fixed bottom-4 left-4 text-sm">
            {width}x{height}
        </div>
    );
}
