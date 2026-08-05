import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-4 px-7">
            <Container>
                <div className="max-w-3xl">
                    <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold leading-tight">
                       Build • Automate • Grow
                    </h1>

                    <p className="mt-3 text-lg text-gray-600">
                        We help small and mid-sized businesses build secure, scalable IT systems.
                    </p>
                </div>

            </Container>
        </section>
    );
}

/* export default function Hero() {
    return (

        <>
        <div className="p-6 bg-red-500 text-white">
            Tailwind Hero Test
        </div>

        <Button variant="primary" href="#">
            Click me
        </Button>

        </>
    );
} */