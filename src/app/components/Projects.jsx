"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import arrow from "../../../public/images/arrow.png";
import { myProjectData } from "../dataset";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import ProjectPopup from "./ProjectPopup";

export default function Projects() {
    const { ref, scrollLeft, scrollRight } = useHorizontalScroll(200);
    const [activeProject, setActiveProject] = useState(null);

    const openPopup = (project) => {
        setActiveProject(project);
        document.body.style.overflow = "hidden";
    };

    const closePopup = () => {
        setActiveProject(null);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <div className="nes-container with-title px-4! lg:px-[2rem]!">
                <p className="title">MY PROJECTS</p>
                <div className="flex flex-col-reverse gap-6 lg:flex-col">
                    <div className="flex gap-4 justify-end">
                        <button type="button" className="nes-btn w-auto" onClick={scrollLeft}>
                            <Image src={arrow} alt="Scroll left" className="w-10 object-contain rotate-180" />
                        </button>
                        <button type="button" className="nes-btn w-auto" onClick={scrollRight}>
                            <Image src={arrow} alt="Scroll right" className="w-10 object-contain" />
                        </button>
                    </div>
                    <div
                        className="w-full flex overflow-x-scroll gap-6 snap-x snap-mandatory pb-0 lg:pb-6 box-project"
                        ref={ref}
                    >
                        {myProjectData.map((project) => (
                            <div
                                key={project.title}
                                className="nes-container with-title p-2! lg:p-[2rem]! is-centered lg:w-[26rem] grid gap-6 snap-center hover:scale-[98%]"
                            >
                                <Image src={project.mainImage} alt={project.title} className="w-full h-[10rem] object-cover" />
                                <p className="text-xl text-start m-0!">{project.title}</p>
                                <div className="flex gap-4">
                                    <Link href={project.url} target="_blank" rel={project.title}>
                                        <button type="button" className="nes-btn w-full">
                                            Website
                                        </button>
                                    </Link>
                                    <button type="button" className="nes-btn w-full" onClick={() => openPopup(project)}>
                                        Detail
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {activeProject && <ProjectPopup project={activeProject} onClose={closePopup} />}
        </>
    );
}
