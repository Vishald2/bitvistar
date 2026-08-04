import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "outline";
}

export default function Button({
    href,
    children,
    variant = "primary",
}: ButtonProps) {

    const baseClasses =
        "btn-base inline-flex items-center justify-center rounded-md px-6 py-3 font-medium transition-colors";
    const variantClasses =
        variant === "primary"
            ? "btn-primary bg-blue-600 text-white hover:bg-blue-700"
            : "btn-outline border border-gray-300 hover:bg-gray-100";

    return (
        <Link
            href={href}
            className={`${baseClasses} ${variantClasses}`}
        >
            {children}
        </Link>
    );
}