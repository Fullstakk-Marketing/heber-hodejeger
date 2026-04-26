import { sanityClient } from "./sanityClient";

export type Kundehistorie = {
  _id: string;
  description: string;
  author: string;
  jobTitle?: string;
  order?: number;
};

export async function getKundehistorier(): Promise<Kundehistorie[]> {
  try {
    return await sanityClient.fetch<Kundehistorie[]>(
      `*[_type == "kundehistorie"] | order(order asc, _createdAt asc){
        _id,
        description,
        author,
        jobTitle,
        order
      }`,
    );
  } catch (err) {
    console.error("getKundehistorier failed:", err);
    return [];
  }
}

export type LedigStilling = {
  _id: string;
  title: string;
  description?: string;
  href: string;
  order?: number;
  imageUrl?: string;
  imageAlt?: string;
};

export async function getLedigeStillinger(): Promise<LedigStilling[]> {
  try {
    return await sanityClient.fetch<LedigStilling[]>(
      `*[_type == "ledigStilling"] | order(order asc, _createdAt asc){
        _id,
        title,
        description,
        href,
        order,
        imageAlt,
        "imageUrl": image.asset->url
      }`,
    );
  } catch (err) {
    console.error("getLedigeStillinger failed:", err);
    return [];
  }
}
