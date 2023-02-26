import {createClient, SanityClient} from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

export const config={
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2023-02-23',
    useCdn: process.env.NODE_ENV =="production"
};

export const sanityClient: SanityClient = createClient(config);

export const urlfor = (source: any)=> createImageUrlBuilder(sanityClient).image(source);