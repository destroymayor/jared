declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        googletag: any;
    }
}

const UNIT_ID = '/23212980789/offsite_ads_unit_test';

const useGAM = (slot_list?: Array<{ class: string; size: number[] }>) => {
    const fetchGAM = () => {
        if (!slot_list) {
            return;
        }

        const script = document.createElement('script');

        script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
        script.async = true;
        document.head.appendChild(script);

        window.googletag = window.googletag || { cmd: [] };

        window.googletag.cmd.push(() => {
            slot_list.forEach((slot, slotIndex) => {
                const containers = document.getElementsByClassName(slot.class);

                Array.from(containers).forEach((container) => {
                    const uniqueId = slot.class + '-' + slotIndex;

                    // eslint-disable-next-line no-param-reassign
                    container.id = uniqueId;

                    window.googletag
                        .defineSlot(UNIT_ID, slot.size, uniqueId)
                        // .setForceSafeFrame(true)
                        .addService(window.googletag.pubads());
                });
            });

            window.googletag.pubads().collapseEmptyDivs();
            window.googletag.pubads().enableSingleRequest();
            window.googletag.enableServices();
            window.googletag.pubads().refresh();
        });

        return () => {
            const gptScript = document.querySelector(
                'script[src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"]'
            );

            if (gptScript) {
                document.head.removeChild(gptScript);
            }
        };
    };

    const resetGAM = () => {
        window.googletag = null;

        fetchGAM();
    };

    const refreshAds = () => {
        if (!window.googletag) {
            return;
        }

        window.googletag.pubads().refresh();
    };

    return { fetchGAM, refreshAds, resetGAM };
};

export default useGAM;
