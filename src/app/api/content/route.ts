import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CONTENT_FILE = path.join(process.cwd(), "data", "content.json");

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// GET - Load content from JSON file
export async function GET() {
  try {
    await ensureDataDir();

    try {
      const content = await fs.readFile(CONTENT_FILE, "utf-8");
      return NextResponse.json(JSON.parse(content));
    } catch {
      // File doesn't exist yet, return null
      return NextResponse.json(null);
    }
  } catch (error) {
    console.error("Error reading content:", error);
    return NextResponse.json(
      { error: "Error reading content" },
      { status: 500 }
    );
  }
}

// POST - Save content to JSON file
export async function POST(request: NextRequest) {
  try {
    await ensureDataDir();

    const content = await request.json();

    // Validate content structure (basic validation)
    if (!content || typeof content !== "object") {
      return NextResponse.json(
        { error: "Invalid content format" },
        { status: 400 }
      );
    }

    // Save content to file
    await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: "Content saved successfully" });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json(
      { error: "Error saving content" },
      { status: 500 }
    );
  }
}
