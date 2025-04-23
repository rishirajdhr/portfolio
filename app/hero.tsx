import { CallToAction } from "./cta";
import { NavBar } from "./navbar";

export function Hero() {
    return (
        <div className="flex h-screen w-screen flex-col">
            <header className="flex flex-row items-center justify-center bg-gray-50 py-4">
                <NavBar />
            </header>
            <section className="grid flex-auto place-content-center bg-gray-50">
                <div className="flex flex-col items-center justify-between gap-8">
                    <div className="flex flex-col items-center justify-between gap-2.5">
                        <div className="text-center font-serif text-6xl">
                            <h1>Rishiraj Dhar</h1>
                        </div>
                        <div className="text-center font-sans text-2xl">
                            <p>Software Developer</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <CallToAction
                            href="/resume.pdf"
                            rel="noopener noreferrer"
                            target="_blank"
                            variant="secondary"
                        >
                            <span>
                                <DownloadIcon />
                            </span>
                            <span>Resume</span>
                        </CallToAction>
                        <CallToAction
                            href="https://github.com/rishirajdhr"
                            rel="noopener noreferrer"
                            target="_blank"
                            variant="primary"
                        >
                            <span>
                                <GithubIcon />
                            </span>
                            <span>GitHub</span>
                        </CallToAction>
                    </div>
                </div>
            </section>
            {process.env.APP_ENV == "production" ? (
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 py-12 font-sans text-2xl font-semibold text-gray-950">
                    <span>🚧 SITE IS UNDER CONSTRUCTION!!! 🚧</span>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 py-12 font-sans text-base text-gray-950">
                    <span>Scroll to see details</span>
                    <span>
                        <ChevronDownIcon />
                    </span>
                </div>
            )}
        </div>
    );
}

function ChevronDownIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 96"
            className="size-4"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="currentColor"
            />
        </svg>
    );
}
