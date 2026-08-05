import Container from "@/components/ui/Container";

export default function Home() {
  return (
<section className="pt-10 pb-15">
    <Container>

        <h1 className="text-3xl font-bold">
            About BitVistar
        </h1>

        <p className="mt-6 max-w-3xl text-md text-gray-600">
            BitVistar is a software development company specializing in
            scalable web applications, AI-powered solutions, cloud
            technologies, and business automation.
        </p>

        <h1 className="pt-5 text-2xl font-bold">
            Experience
        </h1>

        <p className="mt-3 max-w-3xl text-md text-gray-600">
            10+ years in IT infrastructure, cloud, and security.
        </p>

        <h1 className="pt-5 text-2xl font-bold">
            Approach
        </h1>

        <p className="mt-3 max-w-3xl text-md text-gray-600">
            We focus on practical, cost-effective solutions tailored to your business.
        </p>

    </Container>
</section>
  );
}