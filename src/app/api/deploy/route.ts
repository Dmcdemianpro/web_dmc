import { NextResponse } from "next/server";

// POST - Trigger deploy webhook
export async function POST() {
  try {
    const deployHookUrl = process.env.DEPLOY_HOOK_URL;

    if (!deployHookUrl) {
      return NextResponse.json(
        {
          error: "Deploy hook not configured",
          message: "DEPLOY_HOOK_URL environment variable is not set. Please configure it in your hosting platform."
        },
        { status: 400 }
      );
    }

    // Call the deploy webhook
    const response = await fetch(deployHookUrl, {
      method: "POST",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Deploy failed",
          message: `Deploy webhook returned status ${response.status}`
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Deploy triggered successfully. Changes will be live in a few minutes."
    });
  } catch (error) {
    console.error("Error triggering deploy:", error);
    return NextResponse.json(
      { error: "Error triggering deploy" },
      { status: 500 }
    );
  }
}

// GET - Check if deploy hook is configured
export async function GET() {
  const isConfigured = !!process.env.DEPLOY_HOOK_URL;
  return NextResponse.json({
    configured: isConfigured,
    message: isConfigured
      ? "Deploy hook is configured"
      : "Deploy hook not configured. Add DEPLOY_HOOK_URL to environment variables."
  });
}
