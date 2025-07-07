"use client";

import { useState, useEffect, useRef } from "react";

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("recaptcha-script")) return;

    window.onloadCallback = () => {
      console.log("reCAPTCHA is ready");
    };

    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = `https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkReady = setInterval(() => {
      if (window.grecaptcha && recaptchaRef.current) {
        clearInterval(checkReady);
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: "6Le453orAAAAAHr93o3eXeZII-SVzfli-w4v5Fq0",
        });
      }
    }, 500);

    return () => clearInterval(checkReady);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    // @ts-ignore
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) {
      alert("reCAPTCHA not ready");
      console.warn("grecaptcha not found");
      setLoading(false);
      return;
    }

    const token = grecaptcha.getResponse();
    if (!token) {
      alert("Please complete the reCAPTCHA.");
      console.warn("No token from grecaptcha");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email, token }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        alert(data.error || "Submission failed");
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
      grecaptcha.reset();
    }
  };

  return (
    <div className="mt-6">
      <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
      {success ? (
        <p className="text-sm">Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <div
            ref={recaptchaRef}
            className="g-recaptcha"
            data-sitekey={"6Le453orAAAAAHr93o3eXeZII-SVzfli-w4v5Fq0"}
          ></div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 border rounded"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}
