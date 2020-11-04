const title = "Recompiled — Digital Garden by Isaac Rodríguez";
const description =
    "Isaac Rodríguez's digital garden composed by blog posts, notes and ideas about programming and the modern web from his perspective.";

const SEO = {
    title,
    description,
    canonical: "https://recompiled.dev",
    openGraph: {
        type: "website",
        locale: "en",
        url: "https://recompiled.dev",
        title,
        description,
        images: [
            {
                url:
                    "https://avatars1.githubusercontent.com/u/49137701?s=400&u=35e7614cc3215c045b58b4e352bd0616b9d795fd&v=4",
                alt: title,
                width: 554,
                height: 554,
            },
        ],
    },
    twitter: {
        handle: "@rodzyrm",
        site: "@rodzyrm",
        cardType: "summary",
    },
};

export default SEO;
