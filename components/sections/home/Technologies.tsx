import Container from "@/components/ui/Container";
import TechnologyCard from "@/components/ui/TechnologyCard";

import {
    Cloud,
    Database,
    Boxes,
    Bot,
    AppWindow,
    Square,
} from "lucide-react";

const technologies = [
    {
        icon: <Square size={56} />,
        title: ".NET",
    },
    {
        icon: <AppWindow size={56} />,
        title: "React",
    },
    {
        icon: <Cloud size={56} />,
        title: "Azure",
    },
    {
        icon: <Database size={56} />,
        title: "SQL Server",
    },
    {
        icon: <Boxes size={56} />,
        title: "Docker",
    },
    {
        icon: <Bot size={56} />,
        title: "AI Integration",
    },
];

export default function Technologies() {
    return (
        <section className="bg-gray-50 py-20">
            <Container>

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="text-4xl font-bold">
                        Technologies We Work With
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We use modern technologies to build secure,
                        scalable and future-ready software.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                    {technologies.map((technology) => (
                    <TechnologyCard
                        key={technology.title}
                        icon={technology.icon}
                        title={technology.title}
                    />
                    ))}
                </div>

            </Container>
        </section>
    );
}