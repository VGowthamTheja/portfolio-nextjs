import { createClient } from 'next-sanity'

const projectId = "il96z38c"

const dataset = "production"

const apiVersion = "2023-08-25"

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})