"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrow from "../../../public/images/arrow.png";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

export default function ProjectPopup({ project, onClose }) {
    const { ref, scrollLeft, scrollRight } = useHorizontalScroll(160);
    const [zoomedImage, setZoomedImage] = useState(null);

    useEffect(() => {
        if (!zoomedImage) return;
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setZoomedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [zoomedImage]);

    return (
        <>
            <section className="mx-auto px-4! lg:px-[2rem]! lg:w-1/2 fixed inset-x-0 top-8 lg:top-12 z-20">
                <div className="nes-container with-title bg-white relative px-4! lg:px-[2rem]!">
                    <div className="nes-container with-title">
                        <p className="title">{project.title}</p>
                        <div className="flex justify-center gap-3 mb-6">
                            <button type="button" className="nes-btn w-auto" onClick={scrollLeft}>
                                <Image src={arrow} alt="Scroll left" className="w-10 object-contain rotate-180" />
                            </button>
                            <div
                                className="w-full flex overflow-x-scroll gap-3 snap-x snap-mandatory box-project"
                                ref={ref}
                            >
                                {project.imageList.map((image, index) => (
                                    <div key={index} className="w-[26rem] grid snap-center">
                                        <button
                                            type="button"
                                            className="w-[16rem] cursor-zoom-in p-0! border-0 bg-transparent"
                                            onClick={() => setZoomedImage(image)}
                                            aria-label={`Expand ${project.title} screenshot ${index + 1}`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-[10rem] object-cover"
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button type="button" className="nes-btn w-auto" onClick={scrollRight}>
                                <Image src={arrow} alt="Scroll right" className="w-10 object-contain" />
                            </button>
                        </div>
                        <div className="max-h-[50dvh] overflow-y-scroll">
                            <div className="text-sm">{project.detail}</div>
                        </div>
                        <div className="absolute -right-8 lg:-right-13 -top-13">
                            <button type="button" className="nes-btn is-error w-fit" onClick={onClose}>
                                x
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="fixed top-0 left-0 right-0 bottom-0 w-full h-full opacity-50 bg-black z-10"
                onClick={onClose}
            ></div>

            {zoomedImage && (
                <div
                    className="lightbox-overlay fixed inset-0 z-30 flex items-center justify-center bg-black/85 p-4 cursor-zoom-out"
                    onClick={() => setZoomedImage(null)}
                >
                    <div className="relative">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="nes-btn is-error w-fit absolute top-0 right-0"
                                onClick={() => setZoomedImage(null)}
                                aria-label="Close enlarged image"
                            >
                                x
                            </button>
                        </div>
                        <Image
                            src={zoomedImage}
                            alt={`${project.title} screenshot enlarged`}
                            className="lightbox-image max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
