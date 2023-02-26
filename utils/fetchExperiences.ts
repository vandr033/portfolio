import { sanityClient } from "@/lib/sanity";
import { Experience } from "@/typings";

export const fetchExperiences = async()=>{
    const experiences = await sanityClient.fetch(`
    *[_type == "experience"]{
        ...,
        technologies[]->
      }
    `)
    return experiences;

}