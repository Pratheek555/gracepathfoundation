"use client";

import { useState, type FormEvent } from "react";

const teamEmail = "info@gracepathfoundation.com";
type Draft = { subject: string; body: string };

export function useRequestDelivery() {
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState<Draft | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>, next: Draft) {
    event.preventDefault();
    const method = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value || "email";
    setDraft(next);
    setStatus("");
    const mailto = `mailto:${teamEmail}?subject=${encodeURIComponent(next.subject)}&body=${encodeURIComponent(next.body)}`;
    if (method === "email") {
      window.location.href = mailto;
      setStatus("Your email app has been requested. Review and send the message to finish. If it does not open, choose Gmail or copy the message below.");
    } else if (method === "gmail") {
      const parameters = new URLSearchParams({ view: "cm", fs: "1", to: teamEmail, su: next.subject, body: next.body });
      window.open(`https://mail.google.com/mail/?${parameters}`, "_blank", "noopener,noreferrer");
      setStatus("Gmail has been requested in a new tab. Review and send your draft to finish. If it does not open, copy the message below.");
    } else if (method === "copy") {
      try {
        await navigator.clipboard.writeText(`To: ${teamEmail}\nSubject: ${next.subject}\n\n${next.body}`);
        setStatus(`Message copied. Paste it into an email to ${teamEmail} and send it.`);
      } catch {
        setStatus("Copy is unavailable. Select the prepared message below and paste it into your email.");
      }
    }
  }

  return { status, draft, submit, clear: () => { setStatus(""); setDraft(null); } };
}

export function RequestActions({ delivery }: { delivery: ReturnType<typeof useRequestDelivery> }) {
  return (
    <div className="request-delivery">
      <div className="request-actions">
        <button className="button" type="submit" name="delivery" value="email">Open email app ↗</button>
        <button className="text-link" type="submit" name="delivery" value="gmail">Use Gmail ↗</button>
        <button className="text-link" type="submit" name="delivery" value="copy">Copy message</button>
      </div>
      <p className="receipt-send-note">Choose an email option to send your request. Email drafts and copied messages reach the team only when you send them.</p>
      <p className="request-status" role="status">{delivery.status}</p>
      {delivery.draft && <details className="prepared-message"><summary>View or manually copy your prepared message</summary><p>To: {teamEmail}</p><pre>{`Subject: ${delivery.draft.subject}\n\n${delivery.draft.body}`}</pre></details>}
    </div>
  );
}
