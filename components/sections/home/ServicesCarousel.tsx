import Container from "@/components/ui/Container";
import ServiceImageCard from "@/components/ui/ServiceImageCard";
import Marquee from "react-fast-marquee";

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
                <Marquee
                    speed={40}
                    gradient={false}
                    pauseOnHover={true}
                >
                    {services.map((service) => (
                        <div key={service.title} className="mx-4">
                            <ServiceImageCard
                                image={service.image}
                                title={service.title}
                            />
                        </div>
                    ))}
                </Marquee>
            </Container>
        </section>
    );
}