import { workExperienceData } from "../dataset";

export default function WorkExperience() {
    return (
        <div className="nes-container with-title border-y-0! border-x-0! pb-0! px-0! lg:border-y-[4px]! lg:border-x-[4px]! lg:px-[2rem]! lg:pb-[2rem]!">
            <p className="title">WORK EXPERIENCE</p>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                {workExperienceData.map((item) => (
                    <div className="nes-container with-title" key={item.name}>
                        <p className="title">{item.name}</p>
                        <div className="mb-4 pl-2">
                            <h2>{item.position}</h2>
                            <h2 className="nes-text is-primary text-xs">{item.period}</h2>
                        </div>
                        <div className="lists pl-3 lg:pl-10">
                            <ul className="nes-list is-circle grid gap-4 leading-7">
                                {item.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
