import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maryam Afzal | Online Biology & Chemistry Tutor",
    short_name: "Maryam Afzal",
    description: "Professional online tutor for Biology and Chemistry with global reach and concept-based lessons.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111F",
    theme_color: "#0F766E",
    scope: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
