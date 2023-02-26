import { sanityClient } from "@/lib/sanity";
import { Skill } from "@/typings";

export const fetchSkills = async()=>{
    const skills = await sanityClient.fetch(`*[_type == "skill"]{
        ...,
      }
    `)


    return skills;

}