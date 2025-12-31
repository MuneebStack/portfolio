import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <span className="logo" onClick={() => scrollToSection("#hero")}>
                    Muneeb Shoukat
                </span>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group cursor-pointer" onClick={() => scrollToSection(link)}>
                                <span>{name}</span>
                                <span className="underline" />
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="contact-btn group" onClick={() => scrollToSection("#contact")}>
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;