import { useRef, useState } from "react";
import ContactExperience from "../components/Contact/Models/ContactExperience";
import TitleHeader from "../components/TitleHeader";
import emailjs from '@emailjs/browser';
import { ArrowDown } from "lucide-react";

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e  : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID,
                formRef.current!,
                import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY
            )
            setForm({name: "", email: "", message: ""});
        } catch (error) {
            console.log('EMAILJS ERROR,', error);
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full">
                <TitleHeader
                    title="Get In Touch - Let's Connect"
                    sub="💬 Have Questions or Ideas? Let's talk! 🚀"
                />
                <div className="mt-16 grid-12-cols">
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                <div>
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What's your good name?"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What's your email address?"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading ? "Sending" : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <ArrowDown className="text-black arrow-icon" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="xl:col-span-7 min-h-96">
                        <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;