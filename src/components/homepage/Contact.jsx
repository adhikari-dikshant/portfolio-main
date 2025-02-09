import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Contact() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const heading = useRef(null);
    const body = useRef(null);
    const contactSection = useRef(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: contactSection.current,
            start: "180px bottom",
            animation: gsap
                .timeline()
                .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
                .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),
            toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
    }, [contactSection]);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setSubmitting(true);
        setSuccess(false);

        try {
            const response = await fetch("https://formspree.io/f/mkgozkda", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" }); // Reset form
                setErrors({});
            } else {
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending form data:", error);
            alert("Something went wrong. Please try again later.");
        }

        setSubmitting(false);
    };

    return (
        <section id="contact" className="my-[10%] overflow-hidden" aria-label="contact me">
            <Heading title="Contact" />
            <div ref={contactSection} className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12">
                <div className="col-span-4">
                    <h3 ref={heading} className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0">
                        Have an awesome idea? Let&apos;s bring it to life.
                    </h3>
                    <p ref={body} className="mt-4 2xl:max-w-2xl text-body-2 2xl:text-4xl text-accent-100 translate-y-10 opacity-0">
                        I'm always excited to collaborate on innovative projects! Currently bringing ideas to life at <a href="https://techmeraki.com/" className="font-semibold underline">TechMeraki</a>, and open to exploring creative opportunities that push boundaries.
                    </p>

                    {success && (
                        <p className="mt-4 text-green-500 text-lg">🎉 Your message has been sent successfully!</p>
                    )}

                    <form onSubmit={handleSubmit} autoComplete="off" className="mt-10 font-grotesk">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                    disabled={submitting}
                                />
                                <label htmlFor="name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300">
                                    Your name
                                </label>
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                            <div className="relative z-0">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                    disabled={submitting}
                                />
                                <label htmlFor="email" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300">
                                    Your email
                                </label>
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div className="relative z-0 sm:col-span-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                    disabled={submitting}
                                ></textarea>
                                <label htmlFor="message" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300">
                                    Your message
                                </label>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                        </div>
                        <button type="submit" className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent" disabled={submitting}>
                            {submitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
                <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
                    <div className="space-y-3 ">
                        <h4 className="text-body-1 2xl:text-4xl font-semibold">Contact Details</h4>
                        <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
                            <a
                                href="mailto:dikshantsadhikari03@gmail.com"
                                className="group relative w-fit cursor-pointer"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>dikshantsadhikari03@gmail.com</span>
                                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                            </a>

                        </div>
                    </div>
                    <div className="space-y-3 ">
                        <h4 className="text-body-1 2xl:text-4xl font-semibold">My Digital Spaces</h4>
                        <div className="space-y-3 text-body-2 2xl:text-3xl">
                            <a
                                href="https://bento.me/dsa"
                                className="group flex items-center space-x-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon icon="simple-icons:bento" color="#666" />
                                <div className="relative">
                                    <span>Bento</span>
                                    <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                                </div>
                            </a>
                            <a
                                href="https://github.com/adhikari-dikshant"
                                className="group flex items-center space-x-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon icon="mdi:github" color="#666" />
                                <div className="relative">
                                    <span>Github</span>
                                    <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dikshant-singh-adhikari/"
                                className="group group flex w-fit items-center space-x-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon icon="mdi:linkedin" color="#666" />
                                <div className="relative">
                                    <span>LinkedIn</span>
                                    <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                                </div>
                            </a>
                            <a
                                href="https://x.com/ikshwaku03"
                                className="group flex items-center space-x-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon icon="mdi:twitter" color="#666" />
                                <div className="relative">
                                    <span>Twitter</span>
                                    <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-3 ">
                        <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
                        <div className="space-y-2 text-body-2 2xl:text-3xl">
                            <p>
                                Udaipur, Rajasthan (India) <br></br>
                                {time}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
