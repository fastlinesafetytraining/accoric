import milconLogo from "@/public/images/client-logos/milcon-logo.webp";
import championLogo from "@/public/images/client-logos/champion-scc-logo.webp";
import posillicoLogo from "@/public/images/client-logos/posillico-logo.webp";
import hauglandLogo from "@/public/images/client-logos/haugland-group-logo.webp";
import kendrionLogo from "@/public/images/client-logos/kedrion-biopharma-logo.webp";
import dubnerLogo from "@/public/images/client-logos/dubner-landscaping-logo.webp";
import cacLogo from "@/public/images/client-logos/cac-logo.webp";

import type { StaticImageData } from "next/image";

interface PastClient {
    name: string;
    image: StaticImageData;
    width: number;
    height: number;
}

const pastClients: PastClient[] = [
    {
        name: "Milcon",
        image: milconLogo,
        width: 200,
        height: 200,
    },
    {
        name: "Champion SCC",
        image: championLogo,
        width: 200,
        height: 200,
    },
    {
        name: "Posillico",
        image: posillicoLogo,
        width: 200,
        height: 200,
    },
    {
        name: "Haugland Construction",
        image: hauglandLogo,
        width: 200,
        height: 200,
    },
    {
        name: "Kendrion Biopharma",
        image: kendrionLogo,
        width: 200,
        height: 200,
    },
    {
        name: "Dubner Landscaping & Construction",
        image: dubnerLogo,
        width: 200,
        height: 200,
    },
    {
        name: "CAC Industries Inc",
        image: cacLogo,
        width: 200,
        height: 200,
    }

];

export default pastClients;
