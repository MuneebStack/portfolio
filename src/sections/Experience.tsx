import ScrollTrigger from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { experienceCards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    useGSAP(() => {
        gsap.to(
            '.timeline',
            {
                transformOrigin: 'bottom bottom',
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.timeline',
                    start: 'top 70%',
                    end: '90% center',
                    onUpdate: (self) => {
                        gsap.to('.timeline', {
                            scaleY: 1 - self.progress,
                        })
                    }
                },
            }
        )

        gsap.utils.toArray<HTMLElement>('.expText').forEach((text) => {
            gsap.from(
                text,
                {
                    xPercent: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: text,
                        start: 'top 70%'
                    }
                }
            )
        })
    }, []);

    return (
        <section id="experience" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Professional Work Experience"
                    sub="💼 My Career Overview"
                />
                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {experienceCards.map((card, index) => (
                            <div key={index} className="exp-card-wrapper">
                                <div>
                                    <div className="flex items-start">
                                        {
                                            index === 0 && (
                                                <div className="timeline-wrapper">
                                                    <div className="timeline" />
                                                    <div className="gradient-line w-1 h-full" />
                                                </div>
                                            )
                                        }
                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img className="rounded-full" src={card.logoPath} alt="logo" />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">{card.title}</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️ {card.date}
                                                </p>
                                                <p className="text-blue-50 italic">
                                                    Achievements
                                                </p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    {card.achievements.map((responsibility) => (
                                                        <li key={responsibility} className="text-lg">{responsibility}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Experience;