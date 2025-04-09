import milconLogo from "@/public/Images/milcon-logo.webp";
import championLogo from "@/public/Images/champion-scc-logo.webp";
import posillicoLogo from "@/public/Images/posillico-logo.webp";
import hauglandLogo from "@/public/Images/haugland-group-logo.webp";
import kendrionLogo from "@/public/Images/kedrion-biopharma-logo.webp";
import dubnerLogo from "@/public/Images/dubner-landscaping-logo.webp";
import cacLogo from "@/public/Images/cac-logo.webp";

import type { StaticImageData } from "next/image";

interface PastClient {
    name: string;
    image: StaticImageData;
}

const pastClients: PastClient[] = [
    {
        name: "Milcon",
        image: milconLogo,
    },
    {
        name: "Champion SCC",
        image: championLogo,
    },
    {
        name: "Posillico",
        image: posillicoLogo,
    },
    {
        name: "Haugland Construction",
        image: hauglandLogo,
    },
    {
        name: "Kendrion Biopharma",
        image: kendrionLogo,
    },
    {
        name: "Dubner Landscaping & Construction",
        image: dubnerLogo
    },
    {
        name: "CAC Industries Inc",
        image: cacLogo
    }

];

export default pastClients;
