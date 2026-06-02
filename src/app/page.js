"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import arrow from "../../public/images/arrow.png";
import me from "../../public/images/me.png";
import me8bit from "../../public/images/me8bit.png";
import moncookImg1 from "../../public/images/moncookImg1.webp";
import { technicalSkills, workExperienceData } from "./dataset";

export default function Home() {
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
                            link.href = "/documents/Suniti-Sukontaprapun-Resume-Eng.pdf";
                            link.download = "Suniti-Sukontaprapun-Resume-Eng.pdf";
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
                            <span className="nes-text is-primary text-xl me-3">#</span>I am a Frontend Developer
                        </h2>
                        <p className="indent-10 leading-7">
                            Senior Frontend Developer (React & Next.js) with 3 years of experience specializing in
                            large-scale Web Application development with a focus on Performance Optimization and
                            Responsive Design. Proficient in complex State Management and RESTful API integration.
                            Leverages AI Tools to streamline the development process and deliver fast, business-driven
                            User Experiences effectively.
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
                                <li>Birthdate : April 23, 2002</li>
                                <li>Nationality : Thai</li>
                            </ul>
                        </div>
                    </div>
                    <div class="nes-container with-title">
                        <p class="title">EDUCATION</p>
                        <div class="lists pl-3 lg:pl-10">
                            <ul class="nes-list is-circle grid gap-4 leading-7">
                                <li>University : Rajamangala University of Technology Suvarnabhumi</li>
                                <li>Degree : Bachelor</li>
                                <li>Group : Business and Information Technology</li>
                                <li>Branch : Information systems and digital innovation</li>
                                <li>Graduation : 2024</li>
                                <li>GPA : 3.18</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="nes-container with-title border-y-0! border-x-0! pb-0! px-0! lg:border-y-[4px]! lg:border-x-[4px]! lg:px-[2rem]! lg:pb-[2rem]!">
                    <p class="title">WORK EXPERIENCE</p>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                        {workExperienceData?.map((item, index) => (
                            <div class="nes-container with-title" key={index}>
                                <p class="title">{item?.name}</p>
                                <div className="mb-4 pl-2">
                                    <h2>{item?.position}</h2>
                                    <h2 className="nes-text is-primary text-xs">{item?.period}</h2>
                                </div>
                                <div class="lists pl-3 lg:pl-10">
                                    <ul class="nes-list is-circle grid gap-4 leading-7">
                                        {item?.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="nes-container with-title">
                    <p class="title">MY TECH STACK</p>
                    <p className="indent-10 pb-4 lg:pb-10 leading-7 mb-0!">
                        I'm no pro, but I know these languages exeptionally well, which I am currently learning. I also
                        have extensive experience in business management as well as team-work and leadership. My
                        creativity is what puts me a cut above everyone else at my skill level, as well as how quickly I
                        can learn new skills on the go!
                    </p>
                    {technicalSkills.map((item, index) => (
                        <div
                            key={index}
                            class="nes-container with-title border-y-0! border-x-0! pb-0! px-0! lg:border-y-[4px]! lg:border-x-[4px]! lg:px-[2rem]! lg:pb-[2rem]! mb-8"
                        >
                            <p class="title">{item?.title}</p>
                            <div className=" items-center justify-around gap-2 lg:gap-10 flex-wrap grid grid-cols-2 lg:grid-cols-4">
                                {item?.details.map((list, index) => (
                                    <button
                                        type="button"
                                        class="nes-btn w-auto"
                                        onClick={() => handleBtnClick(list.score, list.src)}
                                    >
                                        <div className="flex justify-center lg:justify-start items-center gap-2 text-sm">
                                            <Image
                                                key={index}
                                                src={list.src}
                                                className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                                            />
                                            <div className="hidden lg:block">{list.name}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div class="nes-container with-title px-4! lg:px-[2rem]!">
                    <p class="title">MY PROJECTS</p>
                    <div className="flex flex-col-reverse gap-6 lg:flex-col">
                        <div className="flex gap-4 justify-end">
                            <button type="button" class="nes-btn w-auto" onClick={scrollLeft}>
                                <Image src={arrow} className="w-10 object-contain rotate-180" />
                            </button>
                            <button type="button" class="nes-btn w-auto" onClick={scrollRight}>
                                <Image src={arrow} className="w-10 object-contain" />
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
                                    <Image src={moncookImg1} className="w-full h-[10rem] object-cover" />
                                    <p className="text-xl text-start m-0!">Mon Cooking</p>
                                    <div className="flex gap-3">
                                        <button type="button" class="nes-btn is-disabled w-full">
                                            Website
                                        </button>
                                        <button type="button" class="nes-btn w-full" onClick={openPopup}>
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
                                    navigator.clipboard.writeText("sukontaprapun@gmail.com");
                                    alert("Copied to clipboard!");
                                }}
                            >
                                <i class="nes-icon gmail is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </div>
                            <Link href="https://github.com/Monparty" target="_blank">
                                <i class="nes-icon github is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </Link>
                            <Link href="https://www.linkedin.com/in/suniti-sukontaprapun-a4975b347/" target="_blank">
                                <i class="nes-icon linkedin is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </Link>
                            <Link href="https://web.facebook.com/mon.monza.5855" target="_blank">
                                <i class="nes-icon facebook is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </Link>
                            <Link href="https://www.instagram.com/monsuniti/" target="_blank">
                                <i class="nes-icon instagram is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
                            </Link>
                        </div>
                        <p className="indent-10 leading-7">
                            If you are a potential client or employer then please feel free to contact me any time! Just
                            make sure to include your name, your companies name, and what you're interested in. Thank
                            you!!
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
                                <button type="button" class="nes-btn w-auto" onClick={scrollLeftPop}>
                                    <Image src={arrow} className="w-10 object-contain rotate-180" />
                                </button>
                                <div
                                    className="w-full flex overflow-x-scroll gap-3 snap-x snap-mandatory box-project"
                                    ref={scrollableDivRefPop}
                                >
                                    {Array.from({ length: 6 }, (_, i) => (
                                        <div key={i} class="w-[26rem] grid snap-center">
                                            <div className="w-[16rem]">
                                                <Image src={moncookImg1} className="w-full h-[10rem] object-cover" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button type="button" class="nes-btn w-auto" onClick={scrollRightPop}>
                                    <Image src={arrow} className="w-10 object-contain" />
                                </button>
                            </div>
                            <p className="indent-10 text-sm">
                                committed to creating outstanding and valuable digital products. I possess a deep
                                understanding of User Experience (UX) and User Interface (UI), coupled with strong
                                Front-End coding skills. I e.
                            </p>

                            <div className="absolute -right-8 lg:-right-13 -top-13">
                                <button type="button" class="nes-btn is-error w-fit" onClick={closePopup}>
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
