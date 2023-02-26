import { sanityClient } from "@/lib/sanity";
import { Social } from "@/typings";

export const fetchSocials = async()=>{
    const socials = await sanityClient.fetch(`*[_type == "social"]{
        ...,
      }
    `);

    return socials;

}