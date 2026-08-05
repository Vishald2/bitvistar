type BannerProps = {
    title: string;
    description: string;
    image: string;
};

export default function Banner({
    title,
    description,
    image,
}: BannerProps) {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative overflow-hidden rounded-2xl">

                    <img
                        src={image}
                        alt={title}
                        className="h-[420px] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50" />

                    <div className="absolute inset-0 flex items-center justify-end">
                        <div className="max-w-xl p-10 text-white">
                            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                                Technology
                            </p>

                            <h2 className="mt-2 text-5xl font-bold">
                                {title}
                            </h2>

                            <p className="mt-6 text-lg text-gray-200">
                                {description}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}