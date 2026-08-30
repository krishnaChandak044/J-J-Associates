// Sanity client configuration
// Credentials are loaded from environment variables (.env.local)
// NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET are set by the client

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true, // CDN for production reads (fastest)
  // Note: token is set server-side only, not here (avoids exposing to client)
});

// Server-side client (for API routes and Server Components that need write/preview access)
export const serverClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: false, // No CDN for server-side — always fresh
  token: process.env.SANITY_API_TOKEN,
});
