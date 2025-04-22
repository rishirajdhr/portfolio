import { LandingPage } from "./landing";
import { UnderConstructionLandingPage } from "./under-construction";

export default function Home() {
    return process.env.APP_ENV == "production" ? (
        <UnderConstructionLandingPage />
    ) : (
        <LandingPage />
    );
}
