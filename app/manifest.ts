import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PWA Cache Project",
    short_name: "PWA Cache",
    description: "A project to test PWA caching",
    theme_color: "#0a0909",
    background_color: "#0a0909",
    display: "standalone",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
