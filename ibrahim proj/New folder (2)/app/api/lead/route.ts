import { NextResponse } from "next/server";

// Rate limiting store (in-memory, replace with Redis in production)
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, lastReset: now });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ ok: true }); // Silently accept spam
    }

    // Validate required fields
    const required = ["intent", "timeline", "budget", "area"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { ok: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate consent
    if (!body.consent) {
      return NextResponse.json(
        { ok: false, error: "Consent is required" },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // TODO: Forward to CRM (e.g., HubSpot, Salesforce)
    // TODO: Send notification email
    // TODO: Send Slack/Teams webhook
    // TODO: Verify anti-spam token (Turnstile/reCAPTCHA)

    console.log("New lead received:", {
      intent: body.intent,
      timeline: body.timeline,
      budget: body.budget,
      area: body.area,
      city: body.city,
      babyStatus: body.babyStatus,
      name: body.name,
      email: body.email,
      phone: body.phone,
      notes: body.notes,
      consent: body.consent,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Thank you! We'll review your details and be in touch shortly.",
    });
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
