import { NextResponse } from "next/server";

const repoOwner = "syedalinaqihasni";
const repoName = "syedalinaqihasni.com";
const filePath = "data/newsletter.csv"; 
const branch = "main"; 
const githubToken = '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';
// const sitekey='6Lcr43orAAAAACJf9MU_LS_cyHM2a2ss4lIoEylu';
const secret='6Le453orAAAAADneX7CqjrpbPGmc2FXWpAZ8oJd7';


export async function POST(req) {
  const { email, token } = await req.json();

  if (!email || !token) {
    return NextResponse.json({ error: "Missing email or token" }, { status: 400 });
  }

  // ✅ 1. Verify reCAPTCHA
  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    return NextResponse.json({ error: "Invalid reCAPTCHA" }, { status: 400 });
  }

  // Try fetching the file
  const fileRes = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
    {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  let updatedContent = '';
  let sha = '';

  if (fileRes.status === 404) {
    // Create file
    updatedContent = `email\n${email}`;
  } else if (fileRes.ok) {
    const fileData = await fileRes.json();
    const decoded = Buffer.from(fileData.content, "base64").toString("utf-8");
    updatedContent = `${decoded.trim()}\n${email}`;
    sha = fileData.sha;
  } else {
    return NextResponse.json({ error: "Could not fetch file" }, { status: 500 });
  }

  // Save file (create or update)
  const saveRes = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
      body: JSON.stringify({
        message: `Save ${email} to newsletter.csv`,
        content: Buffer.from(updatedContent).toString("base64"),
        ...(sha ? { sha } : {}),
        branch,
      }),
    }
  );

  if (!saveRes.ok) {
    return NextResponse.json({ error: "Failed to save file" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}