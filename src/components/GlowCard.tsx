import { useRef } from "react";
import type { TestimonialType } from "../types";
import { FaStar } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";

interface GlowCardProps {
    card: TestimonialType;
    index: number;
    fullReview?: boolean;
    onOpen?: (index: number) => void;
}

const GlowCard = ({ card, index, fullReview = false, onOpen }: GlowCardProps) => {
    const cardRefs = useRef<HTMLDivElement[]>([]);
    let rafId: number | null = null;
    const { url, Icon, desc } = card.source;

    const handleMouseMove = (index: number) => (e: React.MouseEvent) => {
        if (rafId) return;

        rafId = requestAnimationFrame(() => {
            const card = cardRefs.current[index];
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const angle = (Math.atan2(y, x) * 180) / Math.PI;
            card.style.setProperty('--start', `${(angle + 360 + 60) % 360}`);

            rafId = null;
        });
    };

    const Review = () => {
        let review = card.review;
        const isReadMoreRequired = !fullReview && review.length > 220;
        if (isReadMoreRequired) {
            review = review.slice(0, 220) + "...";
        }
        return (
            <>
                {" "}
                {review}{" "}
                {isReadMoreRequired && (
                    <button
                        onClick={() => onOpen?.(index)}
                        className="ms-2 text-xs text-blue-400 hover:underline opacity-90 cursor-pointer"
                    >
                        {" "}
                        Read more{" "}
                    </button>
                )}{" "}
            </>
        );
    };


    return (
        <div
            ref={(el) => {
                if (el) cardRefs.current[index] = el;
            }}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl p-4 md:p-10 break-inside-avoid-column relative"
        >
            <div className="glow" />
            {
                card.hasStars && (
                    <div className="flex items-center gap-1 mb-5">
                        {" "}
                        {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-lg" />
                        ))}{" "}
                    </div>
                )
            }
            <div className="mb-5">
                <span className="text-white-50">
                    <Review />
                </span>
            </div>
            <div className="flex items-center gap-3">
                <img
                    src={card.imgPath}
                    alt={card.name}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <div className="flex items-center gap-1.5">
                        <p className="font-bold text-xs sm:text-sm md:text-base">{card.name}</p>
                        <HiCheckBadge className="text-green-400 text-base" />
                    </div>
                    <p className="text-white-50 text-xs sm:text-sm break-all">
                        {card.location}
                    </p>
                </div>
            </div>
            <div>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs text-blue-400 hover:underline opacity-90"
                >
                    {Icon}
                    <span>{desc}</span>
                </a>
            </div>
        </div>
    )
}

export default GlowCard;