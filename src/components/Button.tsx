import { ArrowDown } from "lucide-react";

interface ButtonProps {
    id: string;
    text: string;
    className?: string;
    targetId?: string;
}

const Button = ({ id, text, className = '', targetId } : ButtonProps) => {
    return (
        <a 
            id={id} 
            className={`cta-wrapper ${className}`}
            onClick={(e) => {
                e.preventDefault();
                if (targetId) {
                    const target = document.getElementById(targetId);
                    if (target) {
                        const offset = window.innerHeight * 0.15;
                        const top = target.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({
                            top,
                            behavior: 'smooth' 
                        });
                    }
                }
            }}
        >
            <div className="cta-button group">
                <div className="bg-circle"></div>
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <ArrowDown className="text-black arrow-icon" />
                </div>
            </div>
        </a>
    );
}

export default Button;