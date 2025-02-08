import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
    const profile = useRef(null);
    const aboutSection = useRef(null);
    const heading = useRef(null);
    const body = useRef(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: aboutSection.current,
            start: "top 400px",
            animation: gsap
                .timeline()
                .to(
                    heading.current,
                    { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
                    0
                )
                .to(
                    body.current,
                    { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
                    0.2
                ),

            toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
    }, [aboutSection]);

    return (
        // Try using max width to contain the size of the container
        <section ref={aboutSection} aria-label="about me">
            <Heading title="about me" />
            <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
                <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
                    <img
                        ref={profile}
                        loading="lazy"
                        className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
                        src={profileImg}
                        width="600"
                        height="800"
                        alt="portrait image of Huy standing in front of a tree and foliage"
                    />
                </div>
                <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
                    <div className="w-full space-y-4 2xl:space-y-10">
                        <h3
                            ref={heading}
                            className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
                        >
                            Who Am I? (Besides a Professional Tab Hoarder)
                        </h3>
                        <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
                            I am <strong>Dikshant of the House Adhikari</strong>, the first of his name,{" "}
                            <strong>King of Procrastination</strong>, <strong>Protector of the Money-Plant Garden</strong>,{" "}
                            <strong>Mother of a Ginger Tabby Cat (in his dreams, his mother doesn't allow pets)</strong>,{" "}
                            <strong>Breaker of Things (a.k.a. Stress Tester)</strong>,{" "}
                            <strong>Destroyer of Production Deploys (but only occasionally, I swear 👀)</strong>,{" "}
                            <strong>Trekker of Peaks</strong>, and{" "}
                            <strong>Lifter of Heavy Things (mostly to put them back down again)</strong>.
                            <br></br>
                            <br></br>
                            By day, I’m a <strong>Front-End Engineer & UI/UX Designer</strong>, turning caffeine into{" "}
                            <strong>sleek, intuitive, and scroll-stopping</strong> digital experiences. I make sure things
                            don’t just <em>work</em>—they <em>feel</em> right. Whether it's writing clean, maintainable code
                            or obsessing over pixel-perfect designs, I live for that sweet spot where <strong>form meets
                                function</strong> and everything just <em>clicks</em>.
                            <br></br>
                            <br></br>
                            When I’m not designing or coding, you’ll find me geeking out over new tech, fine-tuning UI animations
                            for <em>that perfect feel</em>, hitting the gym, planning my next trek, or staring at my Figma file,
                            convincing myself it's <em>almost done</em>.
                            <br></br>
                            <br></br>
                            <strong>TL;DR:</strong> I design. I code. I break things (sometimes). I lift. I trek. And I make sure the web
                            looks <em>good</em>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
