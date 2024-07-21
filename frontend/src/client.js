import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "1qe77jl2",
  dataset: "production",
  apiVersion: "2024-07-17",
  useCdn: true,
  token:
    "skhdO8eMGI7cF5VgfGxXmCI4JHyvXRx6MLtZ1LeEaTFDbOpFazzPbxpl9uSnnAgOhOGETXWUI1OiipL50v7N9Dbf8rHAc2MZZg1W7gGn1vO4b3FhLKlrTDzK9Xq0iDRZQvQgnHe65flwvKwUnCFMisrUogqBXz4l8lsTEF3k6u8GOA4N1apK",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
