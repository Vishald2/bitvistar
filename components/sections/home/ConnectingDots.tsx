import Image from "next/image";
import Container from "@/components/ui/Container";

export default function ConnectingDots() {
    return (
        <section className="py-10">
            <Container>
<div className="flex flex-col items-center gap-12 lg:flex-row">
<div className="flex-1 text-center">
    <Image
        src="/images/ItSystems4.webp"
        alt="Connecting the Dots"
        width={400}
        height={400}
        className="mx-auto"
    />
</div>
<div className="flex-1">
    <h2 className="mb-6 text-4xl font-bold text-teal-800">
        CONNECTING THE DOTS
    </h2>

    <p className="text-lg leading-9 text-gray-600">
        We architect and deliver complete software development ecosystems,
        integrating every crucial component into a seamless,
        high-performance solution. From foundational data storage and robust
        cloud infrastructure to core development in modern languages,
        we build the backend that powers your business.
    </p>
</div>
</div>
            </Container>
        </section>
    );
}