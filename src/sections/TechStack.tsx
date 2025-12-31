import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { techCategories } from "../constants";
import gsap from "gsap";
import { useState } from "react";

const TechStack = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    useGSAP(() => {
        gsap.fromTo(
            '.tech-card',
            {
                y: 50, opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center'
                }
            }
        )
    }, [activeCategory]);

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full">
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="🤝 The Skills I Bring to the Table"
                />

                <div className="flex gap-4 mt-10 flex-wrap justify-center">
                    {techCategories.map((cat, idx) => (
                        <button
                            key={cat.name}
                            className={`
                                px-4 py-2 rounded-lg cursor-pointer border ${idx === activeCategory ? "bg-white text-black" : "bg-primary text-white"}
                            `}
                            onClick={() => setActiveCategory(idx)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="tech-grid">
                     {techCategories[activeCategory].skills.map((skill) => (
                        <div key={skill.name} className="card-border tech-card overflow-hidden group lg:rounded-full md:rounded-4xl rounded-lg">
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper text-4xl">
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                                <div>
                                    <p>{skill.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default TechStack;