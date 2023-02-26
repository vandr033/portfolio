import { sanityClient } from "@/lib/sanity";
import { PageInfo } from "@/typings";

export const fetchPageInfo = async()=>{
    const res = await sanityClient.fetch(`*[_type == "pageInfo"][0]
    `    )

    return res;

}