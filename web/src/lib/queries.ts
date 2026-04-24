import { sanityClient } from "./sanityClient";

export type Kundehistorie = {
  _id: string;
  description: string;
  author: string;
  jobTitle?: string;
  order?: number;
};

export async function getKundehistorier(): Promise<Kundehistorie[]> {
  return sanityClient.fetch<Kundehistorie[]>(
    `*[_type == "kundehistorie"] | order(order asc, _createdAt asc){
      _id,
      description,
      author,
      jobTitle,
      order
    }`,
  );
}
