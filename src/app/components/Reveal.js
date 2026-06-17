"use client";
import { motion } from "motion/react";

/**
 * Fades + slides its children into view the first time they enter the
 * viewport. Used to give every page section a consistent scroll reveal.
 *
 * @param {number} delay - seconds to wait before animating.
 * @param {number} y - initial vertical offset in pixels.
 */
export default function Reveal({ children, className, delay = 0, y = 28 }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
