import { FC, useEffect } from 'react';

const HashScroller: FC = () => {
    useEffect(() => {
        requestAnimationFrame(() => {
            const hash = window?.location?.hash || '';
            if (!hash) {
                return;
            }
            const section = document.querySelector(hash);
            if (!section) {
                return;
            }
            section.scrollIntoView({ behavior: 'smooth' });
        });
    }, []);
    return null;
};

export default HashScroller;
