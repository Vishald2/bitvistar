import Container from "@/components/ui/Container";
import Button from "../ui/Button";
import { Globe, Briefcase, Mail } from "lucide-react";

const companyLinks = [
    "About",
    "Services",
    "Portfolio",
    "Contact",
];

const services = [
    "Cloud Solutions",
    "Website Development",
    "AI Automation",
    "App Development",
];

const contactInfo = [
    "info@bitvistar.com",
    "+91 9990972135",
    "Panipat, Haryana",
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-10 text-white">
            <Container>
                
<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

{/* COL 1 */}
<div className="space-y-4">
    <h3 className="text-3xl font-bold">
        BitVistar
    </h3>

    <p className="text-gray-400">
        Secure, scalable IT solutions for growing businesses.
    </p>

    <h4 className="pt-4 text-xl font-semibold">
        Subscribe
    </h4>

<div className="mt-4 flex">
    <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 rounded-l-lg border border-gray-700 bg-gray-200 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500"
    />

    <button className="rounded-r-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
        Join
    </button>
</div>
</div>

{/*COL 2 */}
<div className="space-y-4">
    <h4 className="text-xl font-semibold">
        Company
    </h4>

    <ul className="space-y-3">
        {companyLinks.map((link) => (
            <li key={link}>
                <a
                    href="#"
                    className="text-gray-400 transition hover:text-white"
                >
                    {link}
                </a>
            </li>
        ))}
    </ul>
</div>

{/*COL 3*/}
<div className="space-y-4">
    <h4 className="text-xl font-semibold">
        Services
    </h4>

    <ul className="space-y-3">
        {services.map((service) => (
            <li
                key={service}
                className="text-gray-400"
            >
                {service}
            </li>
        ))}
    </ul>
</div>

{/*COL 4 */}
<div className="space-y-4">
    <h4 className="text-xl font-semibold">
        Contact
    </h4>

    <div className="space-y-3 text-gray-400">
        {contactInfo.map((item) => (
            <p key={item}>
                {item}
            </p>
        ))}
    </div>

    <div className="flex gap-4 pt-2 text-2xl">
        <a href="#" className="hover:opacity-80">🌐</a>
        <a href="#" className="hover:opacity-80">💼</a>
        <a href="#" className="hover:opacity-80">📧</a>
    </div>
</div>

</div>

<hr className="my-4 border-gray-700" />

<div className="flex flex-col items-center justify-between gap-4 text-gray-400 md:flex-row">
    <p>
        © {new Date().getFullYear()} BitVistar. All rights reserved.
    </p>

    <div className="flex gap-6">
        <a href="#" className="hover:text-white">
            Privacy
        </a>

        <a href="#" className="hover:text-white">
            Terms
        </a>
    </div>
</div>
            </Container>
        </footer>
    );
}