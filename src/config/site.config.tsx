import { Metadata } from "next";
import logoImg from "../../public/403.svg";
// import favicon from "@public/favicon.ico";

// import logoIconImg from "@public/logo-short.svg";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

enum MODE {
  DARK = "dark",
  LIGHT = "light",
}

export const siteConfig = {
  title: "Placeholder Title",
  description: `Placeholder Discription`,
  logo: logoImg,
  // icon: favicon,
  mode: MODE.LIGHT,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title}` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title}` : title,
      description,
      url: "site url",
      siteName: "Placeholder Site Name",
      images: {
        url: "",
        width: 1200,
        height: 630,
      },
      locale: "en_US",
      type: "website",
    },
  };
};
