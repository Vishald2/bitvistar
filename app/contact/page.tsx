import Container from "@/components/ui/Container";

export default function ContactPage() {
    return (
<section className="py-10">
    <Container>

        <h1 className="mb-10 text-center text-2xl font-bold">
            Contact Us
        </h1>

        <div className="flex flex-col gap-5 lg:flex-row">

            {/* Left */}
            <div className="flex-1 space-y-6">

                <p className="text-lg">
                    <span className="font-bold">Email:</span> info@bitvistar.com
                </p>

                <p className="text-lg">
                    <span className="font-bold">Phone:</span> +91 9990972135
                </p>

                <p className="text-lg">
                    <span className="font-bold">Location:</span> Panipat, Haryana
                </p>

                <a
                    href="#"
                    className="text-lg text-blue-600 hover:underline"
                >
                    View on Google Maps
                </a>

            </div>

            {/* Right */}
            <form className="flex-1 space-y-4">

                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />

                <textarea
                    rows={5}
                    placeholder="Message"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />

                <button
                    className="rounded-full bg-gray-900 px-8 py-3 text-lg font-semibold text-white hover:bg-black"
                >
                    Send Message
                </button>

            </form>
            <div className="flex-1"></div>
        </div>

    </Container>
</section>
    );
}