import { useGSAP } from "@gsap/react";
import { words } from "../../constants";
import Button from "../Button";
import gsap from "gsap";

const HeaderText = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 2,
                ease: 'power2.inOut'
            }
        )
    })

    return (
        <div className="flex flex-col gap-7">
            <div className="hero-text">
                <h1>
                    Shaping
                    <span className="slide">
                        <span className="wrapper">
                            {
                                words.map(({Icon, text}, index) => (
                                    <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <Icon className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-black-50" />
                                        <span>{text}</span>
                                    </span>
                                ))
                            }
                        </span>
                    </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Senior Software Engineer, passionate about building efficient and scalable solutions
            </p>
            <Button
                id="button"
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
            />
        </div>
    );
}

export default HeaderText;