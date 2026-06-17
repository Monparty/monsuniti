"use client";
import { ReactLenis } from "lenis/react";

/**
 * Wraps the whole app in Lenis smooth scrolling. The `root` prop lets Lenis
 * drive the page's <html> scroll so every section shares one inertial feel.
 *
 * lerp controls how quickly the scroll catches up to the target (lower = more
 * glide). wheelMultiplier tunes wheel sensitivity.
 */
export default function SmoothScroll({ children }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                smoothWheel: true,
                wheelMultiplier: 1,
            }}
        >
            {children}
        </ReactLenis>
    );
}
