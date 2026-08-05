import Link from "next/link";
import Container from "../ui/Container";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <Container>
                <nav className="relative flex items-center justify-between py-3">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-blue-600"
                    >
                        BitVistar
                    </Link>

                    <ul className="flex justify-center gap-10">

                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}

                    </ul>

                </nav>
    <div>

    </div>
            </Container>
        </header>
    );
}