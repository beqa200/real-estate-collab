
import Achievements from "../About/Achievements";
import Clients from "../About/Clients";
import Experience from "../About/Experience";
import Team from "../About/Team";
import OurJourney from "../About/OurJourney";
import OurValues from "../About/OurValues";


export default function About() {
    return (
        <div>
            <OurJourney />
            <OurValues />
            <Achievements />
            <Experience />
            <Team />
            <Clients />
        </div>

    )
}
