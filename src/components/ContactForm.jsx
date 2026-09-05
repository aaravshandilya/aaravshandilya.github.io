import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactConfig } from "../data/contact";
import { profile } from "../data/profile";

const initial = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [honeypot, setHoneypot] = useState(""); // spam-resistant hidden field

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim() || !EMAIL_RE.test(values.email)) next.email = "Please enter a valid email.";
    if (!values.subject.trim()) next.subject = "Please add a subject.";
    if (!values.message.trim() || values.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (honeypot) return; // silently drop likely-bot submissions
    if (!validate()) return;

    if (contactConfig.formspreeEndpoint) {
      setStatus("submitting");
      try {
        const res = await fetch(contactConfig.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (res.ok) {
          setStatus("success");
          setValues(initial);
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    // No form backend configured — open the visitor's email client with the
    // message pre-filled, rather than pretending to submit it silently.
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("success");
  }

  const inputClass =
    "w-full rounded-xl border border-cream-soft/15 bg-ink/40 px-4 py-3 text-sm text-cream placeholder:text-cream-soft/50 transition-colors focus:border-gold/60";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot field — hidden from visitors, catches basic bots */}
      <input
        type="text"
        name="company"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-cream-soft/85">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={inputClass}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-cream-soft/85">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-cream-soft/85">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className={inputClass}
          value={values.subject}
          onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && <p id="subject-error" className="mt-1 text-xs text-red-400">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-cream-soft/85">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClass}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {!contactConfig.formspreeEndpoint && (
        <p className="text-xs text-cream-soft/65">
          This form opens your email client with the message pre-filled, addressed to {profile.email}.
        </p>
      )}

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald">
          <CheckCircle2 className="h-4 w-4" /> Thanks — your message is on its way.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="h-4 w-4" /> Something went wrong. Please email {profile.email} directly.
        </p>
      )}
    </form>
  );
}
