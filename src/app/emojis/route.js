import { NextResponse } from "next/server.js";
import { emojis } from "@/lib/emojis.js";

export function GET() {
  return NextResponse.json({
    success: true,
    emojis,
  });
}

export async function POST(request, response) {
  try {
    const { character, name } = await request.json();

    if (!character || !name) {
      return NextResponse.json({
        success: false,
        error: "You must provide an emoji and a name to post.",
      });
    }
    const emoji = { id: emojis.length + 1, character, name };

    emojis.push(emoji);
    return NextResponse.json({ success: true, emojis });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
