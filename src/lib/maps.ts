/** Build a focused, no-key Google Maps iframe URL for a place or address. */
export function googleMapsEmbedUrl(query: string, zoom = 14) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;
}

/** Convert a Google Maps place page URL to a focused coordinate embed. */
export function googleMapsPlaceEmbedUrl(placeUrl: string) {
  const coordinates = placeUrl.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
  if (coordinates) {
    return googleMapsEmbedUrl(`${coordinates[1]},${coordinates[2]}`, 16);
  }

  // Some office links are standard Maps search URLs rather than place pages.
  // Use their search query, not the entire Maps URL, as the iframe destination.
  try {
    const query = new URL(placeUrl).searchParams.get("q");
    if (query) return googleMapsEmbedUrl(query, 15);
  } catch {
    // Fall back to treating a plain address as the search query.
  }

  return googleMapsEmbedUrl(placeUrl, 15);
}
