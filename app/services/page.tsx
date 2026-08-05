import Container from "@/components/ui/Container";

export default function ServicesPage() {
    return (
        <section className="py-10">
            <Container>
                <h1 className="mb-12 text-center text-3xl font-bold">
                    Our Services
                </h1>

                <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">

                    <div className="space-y-20">
                        <h2 className="text-xl font-semibold text-blue-700">
                            Website Development
                        </h2>

                        <h2 className="text-xl font-semibold text-blue-700">
                            AI Automation
                        </h2>

                        <h2 className="text-xl font-semibold text-blue-700">
                            Digital Marketing
                        </h2>
                    </div>

                    <div className="space-y-20">
                        <h2 className="text-xl font-semibold text-blue-700">
                            Mobile App Development
                        </h2>

                        <h2 className="text-xl font-semibold text-blue-700">
                            AI Chatbots
                        </h2>

                        <h2 className="text-xl font-semibold text-blue-700">
                            WhatsApp Automation
                        </h2>
                    </div>

                </div>

            </Container>
        </section>
    );
}