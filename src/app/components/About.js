import { aboutText } from "../dataset";

export default function About() {
    return (
        <div id="about">
            <div className="nes-container with-title">
                <p className="title">ABOUT ME</p>
                <h2 className="text-xl">
                    <span className="nes-text is-primary text-xl me-3">#</span>I am a Frontend Developer
                </h2>
                <p className="indent-10 leading-7">{aboutText}</p>
            </div>
        </div>
    );
}
