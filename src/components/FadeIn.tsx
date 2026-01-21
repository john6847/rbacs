'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
    className?: string;
};

export default function FadeIn({ children, delay = 0, direction = 'up', fullWidth = false, className = '' }: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const getVariants = () => {
        const distance = 40;
        switch (direction) {
            case 'up':
                return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
            case 'down':
                return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
            case 'left':
                return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
            case 'right':
                return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
            default:
                return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
}
