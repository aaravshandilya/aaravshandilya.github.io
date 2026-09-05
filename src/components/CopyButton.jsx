import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text, label = "Copy" }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — fail silently, no crash
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-soft)] transition-colors hover:border-gold/50 hover:text-gold-soft"
      aria-live="polite"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-[var(--accent-positive)]" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : label}
    </button>
  );
}
