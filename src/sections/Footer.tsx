import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer flex-col gap-8">
            <div className="flex-center">
                <div className="socials">
                    {socialImgs.map(({ Icon, url, name }) => (
                        <a
                            className="icon"
                            target="_blank"
                            href={url}
                            key={name}
                            rel="noopener noreferrer"
                        >
                            <Icon className="w-6 h-6 text-white hover:text-primary transition" />
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Muneeb Shoukat. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;