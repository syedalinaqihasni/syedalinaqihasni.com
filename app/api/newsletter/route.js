// app/api/newsletter/route.ts (App Router)
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wiowlzodsldogjmjcqmh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpb3dsem9kc2xkb2dqbWpjcW1oIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTk2Nzg4OSwiZXhwIjoyMDY3NTQzODg5fQ.lhb1N4YfiamDn2JtNeFpxYsXxGkSq8dpKImJ55vTCMA"
);

export async function POST(req) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
