type SectionHeadingProps = {
    title: string;
    subtitle?: string;
    className?: string;
};

export default function SectionHeading({
    title,
    subtitle,
    className = "",
}: SectionHeadingProps) {
    return (
        <div className={`mb-12 text-center ${className}`}>
            <h2 className="text-4xl font-bold lg:text-5xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 lg:text-xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}