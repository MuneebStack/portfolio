import useEmblaCarousel from "embla-carousel-react";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import Modal from "../components/Modal";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
    const [index, setIndex] = useState<number>();

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full">
                <TitleHeader
                    title="What People Say About Me?"
                    sub="⭐️ Trusted By Others"
                />
                <div className="relative">
                    <div ref={emblaRef} className="overflow-hidden mt-16 relative">
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 w-full lg:w-1/2 xl:w-1/3 px-3 select-none cursor-grab active:cursor-grabbing"
                                >
                                    <GlowCard card={testimonial} index={index} onOpen={(index) => setIndex(index)} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => emblaApi?.scrollPrev()}
                        className="absolute top-1/2 -left-8 md:-left-10 -translate-y-1/2 cursor-pointer z-20 w-8 h-8 rounded-full flex-center bg-white/10 hover:bg-white/20 transition"
                    >
                        <ArrowLeft className="text-white text-lg" />
                    </button>

                    <button
                        onClick={() => emblaApi?.scrollNext()}
                        className="absolute top-1/2 -right-8 md:-right-10 -translate-y-1/2 cursor-pointer z-20 w-8 h-8 rounded-full flex-center bg-white/10 hover:bg-white/20 transition"
                    >
                        <ArrowRight className="text-white text-lg" />
                    </button>
                </div>
            </div>

            {index !== undefined && (
                <Modal open={index !== undefined} onClose={() => setIndex(undefined)}>
                    <GlowCard card={testimonials[index]} index={index} fullReview={true} />
                </Modal>
            )}
        </section>
    );
}

export default Testimonials;