import cortex from "/src/assets/images/cortex.webp";
import cc from "/src/assets/images/codecanvas.webp";
import formix from "/src/assets/images/formix.webp";
import remind from "/src/assets/images/remind.webp";
import techdoc from "/src/assets/images/techdoc.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
    return (
        <section
            ref={forwardedRef}
            id="works"
            className="nav-change overflow-hidden my-[10%]"
        >
            <Heading title="Projects" />
            <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
                {/* Project #1 */}
                <div className=" col-span-1 md:col-span-12">
                    <Projects
                        link="https://github.com/adhikari-dikshant/notion-clone"
                        img={cortex}
                        alt="cortex website mockup"
                        name="Cortex - notion clone"
                        type="Web Design • Full Stack"
                        year="2022"
                        tools="NextJS • TailwindCSS • Supabase • Figma • Clerk Auth"

                    />
                </div>
                {/* Project #2 */}
                <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">

                    <Projects
                        link="https://remind-me-orpin.vercel.app/"
                        img={remind}
                        alt="remind me page mockup"
                        name="RemindME"
                        type="Web Design • Full Stack"
                        year="2022"
                        tools="NextJS • TailwindCSS • Prisma ORM • Figma • Clerk Auth"
                    />
                </div>
                <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
                    <Projects
                        link="https://formix-eta.vercel.app/"
                        img={formix}
                        alt="formix project mockup"
                        name="Formix - Drag & Drop Form Creator"
                        type="Web Design • Full Stack"
                        year="2022"
                        tools="NextJS • TailwindCSS • Prisma ORM • Figma • Clerk Auth"
                    />
                </div>
                <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
                    <Projects
                        link="https://code-canvas-omega.vercel.app/"
                        img={cc}
                        alt="code canvas page mockup"
                        name="Code Canvas - Beautify Code"
                        type="Frontend Development"
                        year="2023"
                        tools="NextJS • TailwindCSS"
                    />
                </div>
                <div className="col-span-1 h-fit md:col-span-4">
                    <Projects
                        link="https://tech-documentation-page-zeta.vercel.app/"
                        img={techdoc}
                        alt="techdoc mockup"
                        name="Technical Documentation"
                        type="Frontend Development"
                        year="2021"
                        tools="HTML • CSS • JavaScript"
                    />

                </div>
            </div>
        </section>
    );
}
