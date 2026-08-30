import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;


const builder = imageUrlBuilder(client);

/**
 * Generates an optimized image URL from a Sanity image reference.
 * Usage: urlFor(image).width(800).format('webp').url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
