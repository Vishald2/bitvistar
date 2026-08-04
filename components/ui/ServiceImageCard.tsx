import Image from "next/image";

interface ServiceImageCardProps {
    image: string;
    title: string;
}

export default function ServiceImageCard({
    image,
    title,
}: ServiceImageCardProps) {
    return (
        <div className="overflow-hidden rounded-xl shadow-md">
            <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="h-52 w-full object-cover"
            />
        </div>
    );
}