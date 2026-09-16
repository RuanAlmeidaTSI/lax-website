export default function Home() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-50 p-8">
            <h1 className="mb-8 text-4xl font-bold">
                Tailwind Theme Preview
            </h1>
            <h1 className="mb-8 text-4xl font-bold">
                This is a commit test
            </h1>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Primary */}
                <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                    <h2 className="text-2xl font-semibold text-blossom-500">
                        Blossom
                    </h2>

                    <p className="mt-3 text-slate-300">
                        Primary brand color for important actions.
                    </p>

                    <button className="mt-6 w-full rounded-lg bg-blossom-500 py-2 font-semibold text-slate-900 transition hover:bg-blossom-600">
                        Primary Button
                    </button>
                </div>

                {/* Accent */}
                <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                    <h2 className="text-2xl font-semibold text-amethyst-500">
                        Amethyst
                    </h2>

                    <p className="mt-3 text-slate-300">
                        Accent color for secondary actions.
                    </p>

                    <button className="mt-6 w-full rounded-lg bg-amethyst-500 py-2 font-semibold text-white transition hover:bg-amethyst-600">
                        Secondary Button
                    </button>
                </div>

                {/* Neutral */}
                <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                    <h2 className="text-2xl font-semibold">
                        Neutral
                    </h2>

                    <p className="mt-3 text-slate-300">
                        Used for cards, backgrounds and borders.
                    </p>

                    <button className="mt-6 w-full rounded-lg bg-slate-700 py-2 transition hover:bg-slate-600">
                        Neutral Button
                    </button>
                </div>
            </div>

            {/* Blossom */}
            <section className="mt-12">
                <h2 className="mb-4 text-3xl font-bold">Blossom</h2>

                <div className="flex flex-wrap gap-3">
                    {[
                        50, 100, 200, 300, 400,
                        500, 600, 700, 800, 900, 950,
                    ].map((shade) => (
                        <div
                            key={shade}
                            className={`flex h-20 w-20 items-center justify-center rounded text-xs font-semibold ${
                                shade < 500
                                    ? "text-slate-900"
                                    : "text-white"
                            } bg-blossom-${shade}`}
                        >
                            {shade}
                        </div>
                    ))}
                </div>
            </section>

            {/* Amethyst */}
            <section className="mt-12">
                <h2 className="mb-4 text-3xl font-bold">Amethyst</h2>

                <div className="flex flex-wrap gap-3">
                    {[
                        50, 100, 200, 300, 400,
                        500, 600, 700, 800, 900, 950,
                    ].map((shade) => (
                        <div
                            key={shade}
                            className={`flex h-20 w-20 items-center justify-center rounded text-xs font-semibold ${
                                shade < 500
                                    ? "text-slate-900"
                                    : "text-white"
                            } bg-amethyst-${shade}`}
                        >
                            {shade}
                        </div>
                    ))}
                </div>
            </section>

            {/* Slate */}
            <section className="mt-12">
                <h2 className="mb-4 text-3xl font-bold">Slate</h2>

                <div className="flex flex-wrap gap-3">
                    {[
                        50, 100, 200, 300, 400,
                        500, 600, 700, 800, 900, 950,
                    ].map((shade) => (
                        <div
                            key={shade}
                            className={`flex h-20 w-20 items-center justify-center rounded border border-slate-700 text-xs font-semibold ${
                                shade < 500
                                    ? "text-slate-900"
                                    : "text-white"
                            } bg-slate-${shade}`}
                        >
                            {shade}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}