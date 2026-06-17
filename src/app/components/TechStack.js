import Image from "next/image";
import { techStackIntro, technicalSkills } from "../dataset";

export default function TechStack() {
    return (
        <div className="nes-container with-title">
            <p className="title">MY TECH STACK</p>
            <p className="indent-10 pb-4 lg:pb-10 leading-7 mb-0!">{techStackIntro}</p>
            {technicalSkills.map((group) => (
                <div
                    key={group.title}
                    className="nes-container with-title border-y-0! border-x-0! pb-0! px-0! lg:border-y-[4px]! lg:border-x-[4px]! lg:px-[2rem]! lg:pb-[2rem]! mb-8"
                >
                    <p className="title">{group.title}</p>
                    <div className="items-center justify-around gap-2 lg:gap-10 flex-wrap grid grid-cols-2 lg:grid-cols-4">
                        {group.details.map((skill) => (
                            <button type="button" className="nes-btn w-auto" key={skill.name}>
                                <div className="flex justify-center lg:justify-start items-center gap-2 text-sm">
                                    <Image src={skill.src} alt={skill.name} className="w-8 h-8 lg:w-12 lg:h-12 object-contain" />
                                    <div className="hidden lg:block">{skill.name}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
