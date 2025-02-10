import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
    const expertiseItems = [
        "Web Development",
        "Web Design",
        "Wireframing",
        "UI/UX Design",
    ];

    const toolBoxItems = [
        "JavaScript",
        "HTML",
        "CSS",
        "Figma",
        "GSAP",
        "ThreeJS",
        "TailwindCSS",
        "ReactJS",
    ];

    return (
        <section id="services" className="mt-20" aria-label="services">
            <Heading title="services" />
            <div className="">
                <ServiceUi
                    title="my expertises."
                    description="I’m all about design and the web—pixel-perfect layouts, smooth interactions, and everything in between. My mission? To craft digital experiences that don’t just work but hit different and leave a lasting impact."
                    items={expertiseItems}
                />
                <ServiceUi
                    title="my digital tool box."
                    description="This is my go-to tech stack for bringing ideas to life. Always curious, always experimenting—whether it's leveling up my current stack or diving into new tech that blows my mind."
                    items={toolBoxItems}
                />
            </div>
        </section>
    );
}
