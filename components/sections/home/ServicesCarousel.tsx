import Container from "@/components/ui/Container";
import ServiceImageCard from "@/components/ui/ServiceImageCard";

const services = [
    {
        image: "/images/web-development.webp",
        title: "Website Development",
    },
    {
        image: "/images/ai-automation.webp",
        title: "AI Automation",
    },
    {
        image: "/images/cloud.webp",
        title: "Cloud Solutions",
    },
    {
        image: "/images/app-development-scroll.webp",
        title: "App Development",
    },
];

            export default function ServicesCarousel() {
                    return (
                        <section className="py-20">
            <Container>

                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold">
                        Services We Provide
                    </h2>
                </div>
                <div className="overflow-hidden">
                    <div className="animate-scroll flex gap-8">
                        {[...services, ...services].map((service, index) => (
                            <ServiceImageCard
                                key={index}
                                image={service.image}
                                title={service.title}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}