import { sanityClient } from "@/lib/sanity";
import { Project } from "@/typings";


export const fetchProjects = async()=>{

    const res = await sanityClient.fetch(`
    *[_type == "project"]
    {...,technologies[]->}`);
    return res;

}