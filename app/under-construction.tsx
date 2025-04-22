import Image from "next/image";

export function UnderConstructionLandingPage() {
    return (
        <div>
            <main>
                <Image
                    src="/under-construction.jpg"
                    alt="This website is under construction"
                    width={600}
                    height={600}
                />
            </main>
        </div>
    );
}
