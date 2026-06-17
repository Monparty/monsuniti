import Hero from "./components/Hero";
import About from "./components/About";
import ProfileEducation from "./components/ProfileEducation";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <div className="container mx-auto px-4 lg:px-10 py-10 flex flex-col gap-8 lg:gap-10">
            <Hero />
            <About />
            <ProfileEducation />
            <WorkExperience />
            <TechStack />
            <Projects />
            <Contact />
        </div>
    );
}
