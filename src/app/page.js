"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import htmlLogo from "../../public/images/htmlLogo.png";
import bootstrapLogo from "../../public/images/bootstrapLogo.png";
import cssLogo from "../../public/images/cssLogo.png";
import githubLogo from "../../public/images/githubLogo.png";
import gitLogo from "../../public/images/gitLogo.png";
import jqueryLogo from "../../public/images/jqueryLogo.png";
import jsLogo from "../../public/images/jsLogo.png";
import laravelLogo from "../../public/images/laravelLogo.png";
import nextLogo from "../../public/images/nextLogo.png";
import supabaseLogo from "../../public/images/supabaseLogo.png";
import phpLogo from "../../public/images/phpLogo.png";
import reactLogo from "../../public/images/reactLogo.png";
import sqlLogo from "../../public/images/sqlLogo.png";
import tailwindLogo from "../../public/images/tailwindLogo.png";
import arrow from "../../public/images/arrow.png";
import me from "../../public/images/me.png";
import me8bit from "../../public/images/me8bit.png";
import moncookImg1 from "../../public/images/moncookImg1.webp";

const logoLists = [
    {
        name: "HTML",
        src: htmlLogo,
    },
    {
        name: "CSS",
        src: cssLogo,
    },
    {
        name: "JavaScript",
        src: jsLogo,
    },
    {
        name: "ReactJS",
        src: reactLogo,
    },
    {
        name: "NextJS",
        src: nextLogo,
    },
    {
        name: "jQuery",
        src: jqueryLogo,
    },
    {
        name: "Tailwind CSS",
        src: tailwindLogo,
    },
    {
        name: "Bootstrap",
        src: bootstrapLogo,
    },
    {
        name: "PHP",
        src: phpLogo,
    },
    {
        name: "Laravel",
        src: laravelLogo,
    },
    {
        name: "MySQL",
        src: sqlLogo,
    },
    {
        name: "Supabase",
        src: supabaseLogo,
    },
    {
        name: "GitHub",
        src: githubLogo,
    },
    {
        name: "Git",
        src: gitLogo,
    },
];

export default function Home() {
    const [progressValue, setProgressValue] = useState(100);
    const [progressImg, setProgressImg] = useState(htmlLogo);
    const handleBtnClick = (newValue, newImg) => {
        if (newValue >= 0 && newValue <= 500) {
            setProgressValue(newValue);
            setProgressImg(newImg);
        } else {
            setProgressValue(0);
            setProgressImg(htmlLogo);
        }
    };

    const scrollableDivRef = useRef(null);

    const scrollLeft = () => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    };

    const scrollableDivRefPop = useRef(null);

    const scrollLeftPop = () => {
        if (scrollableDivRefPop.current) {
            scrollableDivRefPop.current.scrollBy({
                left: -160,
                behavior: "smooth",
            });
        }
    };

    const scrollRightPop = () => {
        if (scrollableDivRefPop.current) {
            scrollableDivRefPop.current.scrollBy({
                left: 160,
                behavior: "smooth",
            });
        }
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div>
            <div className="container mx-auto px-4 lg:px-10 py-10 flex flex-col gap-8 lg:gap-10">
                <div className="flex justify-center items-center flex-col w-full gap-8">
                    <div class="nes-container with-title">
                        <p class="title">Hi I'm Mon</p>
                        <ImgComparisonSlider className="border-0 outline-0">
                            <Image
                                slot="first"
                                src={me}
                                className="w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] object-cover"
                            />
                            <Image
                                slot="second"
                                src={me8bit}
                                className="w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] object-cover"
                            />
                        </ImgComparisonSlider>
                    </div>
                    <button
                        type="button"
                        class="nes-btn w-auto"
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "/documents/mon_resume_eng.pdf";
                            link.download = "suniti_cv.pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        Download my CV
                    </button>
                </div>
                <div id="about">
                    <div class="nes-container with-title">
                        <p class="title">ABOUT ME</p>
                        <h2 className="text-xl">
                            <span className="nes-text is-primary text-xl me-3">
                                #
                            </span>
                            I am a Frontend Developer
                        </h2>
                        <p className="indent-10 leading-7">
                            committed to creating outstanding and valuable
                            digital products. I possess a deep understanding of
                            User Experience (UX) and User Interface (UI),
                            coupled with strong Front-End coding skills. I enjoy
                            tackling complex problems and am always looking for
                            ways to improve and refine my work.
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                    <div class="nes-container with-title">
                        <p class="title">PROFILE</p>
                        <div class="lists pl-3 lg:pl-10">
                            <ul class="nes-list is-circle grid gap-4 leading-7">
                                <li>Name : Suniti Sukontaprapun</li>
                                <li>Nickname : Mon</li>
                                <li>Age : 23 years</li>
                                <li>Birthdate : 23 April 2002</li>
                                <li>Nationality : Thai</li>
                            </ul>
                        </div>
                    </div>
                    <div class="nes-container with-title">
                        <p class="title">EDUCATION</p>
                        <div class="lists pl-3 lg:pl-10">
                            <ul class="nes-list is-circle grid gap-4 leading-7">
                                <li>
                                    University : Rajamangala University of
                                    Technology Suvarnabhumi
                                </li>
                                <li>Degree : Bachelor</li>
                                <li>
                                    Group : Business and Information Technology
                                </li>
                                <li>
                                    Branch : Information systems and digital
                                    innovation
                                </li>
                                <li>Graduation : 2024</li>
                                <li>GPA : 3.18</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="nes-container with-title border-y-0! border-x-0! pb-0! px-0! lg:border-y-[4px]! lg:border-x-[4px]! lg:px-[2rem]! lg:pb-[2rem]!">
                    <p class="title">WORK EXPERIENCE</p>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                        <div class="nes-container with-title">
                            <p class="title">Emwork Group Co., Ltd.</p>
                            <div className="mb-4 pl-2">
                                <h2>Position : Internship</h2>
                                <h2 className="nes-text is-primary text-xs">
                                    Jun 2022 - Jan 2023
                                </h2>
                            </div>
                            <div class="lists pl-3 lg:pl-10">
                                <ul class="nes-list is-circle grid gap-4 leading-7">
                                    <li>Software Testing</li>
                                    <li>Requirements Gathering</li>
                                    <li>On-site User Training</li>
                                    <li>Power BI Analytics & Dashboards</li>
                                    <li>Video Editing & User Manuals</li>
                                    <li>Documentation & Ad-hoc Tasks</li>
                                </ul>
                            </div>
                        </div>
                        <div class="nes-container with-title">
                            <p class="title">EMR Soft Co., Ltd.</p>
                            <div className="mb-4 pl-2">
                                <h2>Position : Interface design</h2>
                                <h2 className="nes-text is-primary text-xs">
                                    Feb 2023 - Sep 2024
                                </h2>
                            </div>
                            <div class="lists pl-3 lg:pl-10">
                                <ul class="nes-list is-circle grid gap-4 leading-7">
                                    <li>Frontend System Development</li>
                                    <li>Requirements Gathering</li>
                                    <li>UI Design & Creation</li>
                                    <li>Figma Prototyping</li>
                                    <li>System Installation & User Training</li>
                                    <li>Problem Analysis & Maintenance</li>
                                </ul>
                            </div>
                        </div>
                        <div class="nes-container with-title">
                            <p class="title">One Digital Network Co.,Ltd.</p>
                            <div className="mb-4 pl-2">
                                <h2>Position : Programmer</h2>
                                <h2 className="nes-text is-primary text-xs">
                                    Mar 2025 - Aug 2025
                                </h2>
                            </div>
                            <div class="lists pl-3 lg:pl-10">
                                <ul class="nes-list is-circle grid gap-4 leading-7">
                                    <li>Code Development & Bug Fixing</li>
                                    <li>Feature Design & Development</li>
                                    <li>Testing & Error Resolution</li>
                                    <li>Requirements & Bug Analysis</li>
                                    <li>Code Refactoring</li>
                                    <li>Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nes-container with-title">
                    <p class="title">MY TECH STACK</p>
                    <p className="indent-10 pb-4 lg:pb-10 leading-7">
                        I'm no pro, but I know these languages exeptionally well
                        exept for React, which I am currently learning. I also
                        have extensive experience in business management as well
                        as team-work and leadership. My creativity is what puts
                        me a cut above everyone else at my skill level, as well
                        as how quickly I can learn new skills on the go!
                    </p>
                    <div className=" items-center justify-around gap-2 lg:gap-10 flex-wrap grid grid-cols-2 lg:grid-cols-4">
                        {logoLists.map((list, index) => (
                            <button
                                type="button"
                                class="nes-btn w-auto"
                                onClick={() =>
                                    handleBtnClick(list.score, list.src)
                                }
                            >
                                <div className="flex justify-center lg:justify-start items-center gap-2 text-sm">
                                    <Image
                                        key={index}
                                        src={list.src}
                                        className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                                    />
                                    <div className="hidden lg:block">
                                        {list.name}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div class="nes-container with-title px-4! lg:px-[2rem]!">
                    <p class="title">MY PROJECTS</p>
                    <div className="flex flex-col-reverse gap-6 lg:flex-col">
                        <div className="flex gap-4 justify-end">
                            <button
                                type="button"
                                class="nes-btn w-auto"
                                onClick={scrollLeft}
                            >
                                <Image
                                    src={arrow}
                                    className="w-10 object-contain rotate-180"
                                />
                            </button>
                            <button
                                type="button"
                                class="nes-btn w-auto"
                                onClick={scrollRight}
                            >
                                <Image
                                    src={arrow}
                                    className="w-10 object-contain"
                                />
                            </button>
                        </div>
                        <div
                            className="w-full flex overflow-x-scroll gap-6 snap-x snap-mandatory pb-0 lg:pb-6 box-project"
                            ref={scrollableDivRef}
                        >
                            {Array.from({ length: 6 }, (_, i) => (
                                <div
                                    key={i}
                                    class="nes-container with-title p-2! lg:p-[2rem]! is-centered lg:w-[26rem] grid gap-6 snap-center hover:scale-[98%]"
                                >
                                    <Image
                                        src={moncookImg1}
                                        className="w-full h-[10rem] object-cover"
                                    />
                                    <p className="text-xl text-start m-0!">
                                        Mon Cooking
                                    </p>
                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            class="nes-btn is-disabled w-full"
                                        >
                                            Website
                                        </button>
                                        <button
                                            type="button"
                                            class="nes-btn w-full"
                                            onClick={openPopup}
                                        >
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div class="nes-container with-title">
                    <p class="title">MY CONTSCT</p>
                    <div className="">
                        <div className="flex items-center gap-4 lg:gap-10 mb-6 flex-wrap">
                            <div
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        "sukontaprapun@gmail.com"
                                    );
                                    alert("Copied to clipboard!");
                                }}
                            >
                                <i class="nes-icon gmail is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </div>
                            <Link
                                href="https://github.com/Monparty"
                                target="_blank"
                            >
                                <i class="nes-icon github is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/suniti-sukontaprapun-a4975b347/"
                                target="_blank"
                            >
                                <i class="nes-icon linkedin is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </Link>
                            <Link
                                href="https://web.facebook.com/mon.monza.5855"
                                target="_blank"
                            >
                                <i class="nes-icon facebook is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </Link>
                            <Link
                                href="https://www.instagram.com/monsuniti/"
                                target="_blank"
                            >
                                <i class="nes-icon instagram is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </Link>
                        </div>
                        <p className="indent-10 leading-7">
                            If you are a potential client or employer then
                            please feel free to contact me any time! Just make
                            sure to include your name, your companies name, and
                            what you're interested in. Thank you!!
                        </p>
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <section className="mx-auto px-4! lg:px-[2rem]! lg:w-1/2 fixed inset-x-0 top-8 lg:top-12 z-20">
                    <div class="nes-container with-title bg-white relative px-4! lg:px-[2rem]!">
                        <div class="nes-container with-title ">
                            <p class="title">text</p>
                            <div className="flex justify-center gap-3 mb-6">
                                <button
                                    type="button"
                                    class="nes-btn w-auto"
                                    onClick={scrollLeftPop}
                                >
                                    <Image
                                        src={arrow}
                                        className="w-10 object-contain rotate-180"
                                    />
                                </button>
                                <div
                                    className="w-full flex overflow-x-scroll gap-3 snap-x snap-mandatory box-project"
                                    ref={scrollableDivRefPop}
                                >
                                    {Array.from({ length: 6 }, (_, i) => (
                                        <div
                                            key={i}
                                            class="w-[26rem] grid snap-center"
                                        >
                                            <div className="w-[16rem]">
                                                <Image
                                                    src={moncookImg1}
                                                    className="w-full h-[10rem] object-cover"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    class="nes-btn w-auto"
                                    onClick={scrollRightPop}
                                >
                                    <Image
                                        src={arrow}
                                        className="w-10 object-contain"
                                    />
                                </button>
                            </div>
                            <p className="indent-10 text-sm">
                                committed to creating outstanding and valuable
                                digital products. I possess a deep understanding
                                of User Experience (UX) and User Interface (UI),
                                coupled with strong Front-End coding skills. I
                                e.
                            </p>

                            <div className="absolute -right-8 lg:-right-13 -top-13">
                                <button
                                    type="button"
                                    class="nes-btn is-error w-fit"
                                    onClick={closePopup}
                                >
                                    x
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {isPopupOpen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 w-full h-full opacity-50  bg-black z-10"
                    onClick={closePopup}
                ></div>
            )}
        </div>
    );
}
