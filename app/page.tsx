import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <main>
                {process.env.APP_ENV == "production" ? (
                    <Image
                        src="/under-construction.jpg"
                        alt="This website is under construction"
                        width={600}
                        height={600}
                    />
                ) : (
                    <h1 className="text-2xl">Rishiraj's Portfolio</h1>
                )}
            </main>
        </div>
    );
}
