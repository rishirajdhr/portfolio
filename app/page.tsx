import Image from "next/image";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <main>
                <Image src="/under-construction.jpg" alt="This website is under construction" width={600} height={600} />
            </main>
        </div>
    );
}
