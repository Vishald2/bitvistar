import Image from "next/image";

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
}

export default function ServiceCard({
    image,
    title,
    description,
}: ServiceCardProps) {
    return (
        <div className="w-full max-w-[20rem] mx-auto overflow-hidden rounded-lg bg-white shadow-md">
            <Image
                src={image}
                alt={title}
                width={400}
                height={250}
                className="w-full"
            />

            <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold">
                    {title}
                </h3>

                <p className="mt-3 text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
}