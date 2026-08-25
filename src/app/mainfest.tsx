import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "OSRC Zikr",
        short_name: "OSRC Zikr",
        description: "مشروع عربي مفتوح المصدر للأذكار اليومية",
        start_url: "/",
        display: "standalone",
        background_color: "#0B1110",
        theme_color: "#0B1110",
        icons: [
            {
                src: "/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon2.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}