interface TechnologyCardProps {
    icon: React.ReactNode;
    title: string;
}

export default function TechnologyCard({
    icon,
    title,
}: TechnologyCardProps) {
    return (
<div className="rounded-2xl bg-white px-6 py-5 text-center shadow-md transition-shadow hover:shadow-lg">
    <div className="flex justify-center text-blue-600">
        {icon}
    </div>

    <h3 className="mt-4 text-xl font-semibold">
        {title}
    </h3>
</div>
    );
}