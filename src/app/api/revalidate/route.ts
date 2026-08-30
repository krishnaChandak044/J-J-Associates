import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const signature = req.headers.get("sanity-webhook-signature");
    if (!signature) {
      return NextResponse.json({ message: "No signature header" }, { status: 401 });
    }

    const body = await req.json();
    
    // In a real app, verify the signature using @sanity/webhook
    // For now, simple revalidation logic based on the document type
    const { _type, slug } = body;

    // Determine paths to revalidate based on the document type updated
    if (_type === "insight") {
      revalidatePath("/insights");
      if (slug?.current) {
        revalidatePath(`/insights/${slug.current}`);
      }
    } else if (_type === "teamMember") {
      revalidatePath("/team");
      if (slug?.current) {
        revalidatePath(`/team/${slug.current}`);
      }
    } else if (_type === "caseResult") {
      revalidatePath("/case-results");
      // Could also revalidate specific practice area pages if they embed case results
      revalidatePath("/practice-areas", "layout"); 
    } else if (_type === "testimonial") {
      // Revalidate all pages that might show testimonials
      revalidatePath("/", "layout");
    }

    return NextResponse.json({ revalidated: true, now: Date.now(), type: _type });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
