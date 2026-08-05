import Image from "next/image";
import Container from "@/components/ui/Container";

export default function ItForYourBusiness() {
    return (
        <section className="py-5">
            <Container>
<div className="flex flex-col items-center gap-12 lg:flex-row">

<div className="flex-1">
    <h2 className="mb-6 text-4xl font-bold text-teal-800">
        AI FOR YOUR BUSINESS
    </h2>

    <p className="text-lg leading-9 text-gray-600">
        From customer support to internal operations, our AI-powered automation solutions streamline workflows,
         eliminate repetitive tasks,
          and help your business operate faster and smarter.
    </p>
</div>
<div className="flex-1 text-center">
    <Image
        src="/images/ai-automation-big.webp"
        alt="Connecting the Dots"
        width={400}
        height={400}
        className="mx-auto"
    />
</div>
</div>
            </Container>
        </section>
    );
}