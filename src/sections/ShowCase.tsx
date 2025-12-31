import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";
import Modal from "../components/Modal";

const ShowCase = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef<(HTMLDivElement)[]>([]);
    const [activeProject, setActiveProject] = useState<number>();

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )

        cardRefs.current.forEach((card, index) => {
            if (!card) return;

            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    delay: 0.2 * index,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <TitleHeader
                    title="Projects"
                    sub="🚀 Real-World Applications I’ve Built"
                />
                <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`
                                cursor-pointer overflow-hidden rounded-xl
                                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
                            `}
                            ref={(el) => (cardRefs.current[index] = el)}
                            onClick={() => setActiveProject(index)}
                        >
                            <div className="w-full overflow-hidden rounded-xl aspect-video md:aspect-3/2">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className={`mt-3 ${index === 0 ? "text-2xl md:text-3xl lg:text-4xl font-bold" : "text-lg md:text-xl"} font-semibold text-white`}>
                                {project.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>

            {activeProject !== undefined && (
                <Modal open={true} onClose={() => setActiveProject(undefined)} maxWidthClass="max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <h2 className="text-2xl font-bold mb-4 text-white">
                                {projects[activeProject].title}
                            </h2>
                            <p className="text-white-50 mb-4">{projects[activeProject].summary}</p>
                            <strong>Key Highlights</strong>
                            <ul className="list-disc pl-5 space-y-2 text-white-50 mt-4">
                                {projects[activeProject].highlights.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {projects[activeProject].skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={projects[activeProject].liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                Visit Project
                            </a>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <img
                                src={projects[activeProject].image}
                                alt={projects[activeProject].title}
                                className="w-full h-full object-contain aspect-video md:aspect-3/2"
                            />
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    )
}

export default ShowCase;