import CountUp from "react-countup";
import { counterItems } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!counterRef.current) return;

        ScrollTrigger.create({
            trigger: counterRef.current,
            start: "top 80%",
            onEnter: () => setStartCount(true),
            once: true,
        });
    }, []);

    return (
        <div id="counter" ref={counterRef} className="xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            {
                                startCount && (
                                    <CountUp suffix={item.suffix} end={item.value} />
                                )
                            }
                        </div>
                        <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnimatedCounter;