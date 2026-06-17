import InfoList from "./InfoList";
import { profileData, educationData } from "../dataset";

export default function ProfileEducation() {
    return (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            <InfoList title="PROFILE" items={profileData} />
            <InfoList title="EDUCATION" items={educationData} />
        </div>
    );
}
