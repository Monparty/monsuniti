"use client";
import Image from "next/image";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import me from "../../../public/images/me.png";
import me8bit from "../../../public/images/me8bit.png";
import { personalInfo } from "../dataset";

export default function Hero() {
    const downloadCV = () => {
        const fileName = personalInfo.cvFile.split("/").pop();
        const link = document.createElement("a");
        link.href = personalInfo.cvFile;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex justify-center items-center flex-col w-full gap-8">
            <div className="nes-container with-title">
                <p className="title">{personalInfo.greeting}</p>
                <ImgComparisonSlider className="border-0 outline-0">
                    <Image
                        slot="first"
                        src={me}
                        alt="Suniti Sukontaprapun"
                        className="w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] object-cover"
                    />
                    <Image
                        slot="second"
                        src={me8bit}
                        alt="Suniti Sukontaprapun in 8-bit style"
                        className="w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] object-cover"
                    />
                </ImgComparisonSlider>
            </div>
            <button type="button" className="nes-btn w-auto" onClick={downloadCV}>
                Download my CV
            </button>
        </div>
    );
}
