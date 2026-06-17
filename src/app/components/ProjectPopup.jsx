"use client";
import Image from "next/image";
import arrow from "../../../public/images/arrow.png";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

export default function ProjectPopup({ project, onClose }) {
    const { ref, scrollLeft, scrollRight } = useHorizontalScroll(160);

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
                                        <div className="w-[16rem]">
                                            <Image
                                                src={image}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-[10rem] object-cover"
                                            />
                                        </div>
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
        </>
    );
}
