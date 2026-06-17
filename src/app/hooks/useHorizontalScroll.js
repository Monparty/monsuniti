import { useRef } from "react";

/**
 * Provides a ref plus left/right scroll handlers for a horizontally
 * scrollable container. Replaces the repeated scrollBy boilerplate.
 *
 * @param {number} distance - pixels to scroll per click.
 */
export function useHorizontalScroll(distance = 200) {
    const ref = useRef(null);

    const scrollBy = (offset) => {
        ref.current?.scrollBy({ left: offset, behavior: "smooth" });
    };

    return {
        ref,
        scrollLeft: () => scrollBy(-distance),
        scrollRight: () => scrollBy(distance),
    };
}
