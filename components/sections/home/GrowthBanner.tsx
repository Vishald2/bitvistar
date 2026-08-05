import Image from "next/image";
import Container from "@/components/ui/Container";

export default function GrowthBanner() {
    return (
        <section className="pt-5 pb-15">
            <Container>
<div className="relative overflow-hidden">
    <Image
        src="/images/full-width-footer-image.webp"
        alt="Less Effort, More Growth"
        width={1400}
        height={500}
        className="h-[450px] w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/55"></div>
    <div className="absolute inset-0 z-10 flex items-center">
    <div className="ml-auto max-w-md px-8 text-white">
<p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400">
    Technology
</p>

<h2 className="mb-6 text-5xl font-bold leading-tight">
    Less Effort,
    <br />
    More Growth
</h2>

<p className="text-lg leading-8 text-gray-200">
    We're committed to building intelligent software that
    simplifies complex business operations.
</p>
    </div>
</div>
</div>
            </Container>
        </section>
    );
}