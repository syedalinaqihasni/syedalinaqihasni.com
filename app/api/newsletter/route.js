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

  // ✅ 2. Fetch current file from GitHub
  const getFileRes = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
    {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  if (!getFileRes.ok) {
    return NextResponse.json({ error: "Could not fetch file" }, { status: 500 });
  }

  const fileData = await getFileRes.json();
  const decoded = Buffer.from(fileData.content, "base64").toString("utf-8");
  const updated = `${decoded.trim()}\n${email}`;

  // ✅ 3. Commit updated file
  const updateRes = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
      body: JSON.stringify({
        message: `Add ${email} to newsletter.csv`,
        content: Buffer.from(updated).toString("base64"),
        sha: fileData.sha,
        branch,
      }),
    }
  );

  if (!updateRes.ok) {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}