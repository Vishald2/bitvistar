import Container from "@/components/ui/Container";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
    {
        image: "/images/cloud.webp",
        title: "Cloud Solutions",
        description: "Move your business to scalable cloud platforms",
    },
    {
        image: "/images/web-development.webp",
        title: "Website Development",
        description: "Fast, secure, and fully customized websites",
    },
    {
        image: "/images/ai-automation.webp",
        title: "AI Automation",
        description: "Provide instant customer support with AI-powered virtual assistants",
    },
];

export default function Services() {
    return (
        <section className="py-15">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}