// Import NextResponse from Next.js to handle HTTP responses in API routes
import { NextResponse } from "next/server";

// Force dynamic rendering for this API route to ensure it runs on every request
export const dynamic = "force-dynamic";

// Custom error class for Sentry error monitoring
class SentryExampleAPIError extends Error {
  // Constructor takes an optional message parameter
  constructor(message: string | undefined) {
    // Call the parent Error class constructor with the message
    super(message);
    // Set the error name to identify it as a SentryExampleAPIError
    this.name = "SentryExampleAPIError";
  }
}

// API route handler to test Sentry's error monitoring
export function GET() {
  // Intentionally throw a custom error to simulate a backend failure
  // This allows Sentry to capture and report the error for monitoring
  throw new SentryExampleAPIError("This error is raised on the backend called by the example page.");
  
  // This line is unreachable due to the thrown error but included to show a typical response
  // Returns a JSON response with a test message if no error occurs
  return NextResponse.json({ data: "Testing Sentry Error..." });
}