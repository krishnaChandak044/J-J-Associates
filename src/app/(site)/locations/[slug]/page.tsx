import { notFound, permanentRedirect } from "next/navigation";
import { getLocationBySlug, locations } from "@/data/locations";

export function generateStaticParams() {
  return locations.map(({ slug }) => ({ slug }));
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getLocationBySlug(slug)) notFound();
  permanentRedirect(`/areas-we-serve#${slug}`);
}
