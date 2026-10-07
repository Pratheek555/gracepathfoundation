"use client";

import { useState, type FormEvent } from "react";

const bankDetails = [
  { label: "Account name", value: "GRACEPATH DEVELOPMENT FOUNDATION" },
  { label: "Bank name", value: "THE SOUTH INDIAN BANK" },
  { label: "Account number", value: "0761073000000337" },
  { label: "Account type", value: "CURRENT" },
  { label: "IFSC code", value: "SIBL0000761" },
  { label: "Branch", value: "PANACHIPARA, POONJAR, KOTTAYAM, KERALA" },
  { label: "SWIFT code", value: "SOININ55" },
];

const teamEmail = "info@gracepathfoundation.com";

export function BankDetails() {
  const [copyMessage, setCopyMessage] = useState("");

  async function copyDetails() {
    try {
      await navigator.clipboard.writeText(bankDetails.map(({ label, value }) => `${label}: ${value}`).join("\n"));
      setCopyMessage("Bank details copied.");
    } catch {
      setCopyMessage("Please select and copy the bank details above.");
    }
  }

  return (
    <>
      <dl className="donation-bank-details">
        {bankDetails.map(({ label, value }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className={label === "Account number" || label === "IFSC code" ? "bank-code" : undefined}>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="donation-bank-actions">
        <button className="button" type="button" onClick={copyDetails}>Copy bank details</button>
        <a className="text-link" href="#donation-receipt">Already donated? Request a receipt <span aria-hidden="true">↓</span></a>
      </div>
      <p className="donation-copy-status" role="status">{copyMessage}</p>
    </>
  );
}

export function ReceiptRequest() {
  const [draft, setDraft] = useState<{ gmailUrl: string; mailtoUrl: string } | null>(null);

  function prepareReceipt(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const wants80G = data.get("taxReceipt") === "on";
    const subject = `Gracepath ${wants80G ? "80G " : ""}donation receipt request - ${field("name")}`;
    const body = [
      "Hello Gracepath team,",
      "",
      `I have completed my donation and would like ${wants80G ? "a receipt for Section 80G purposes" : "a donation receipt"}.`,
      "",
      `Full name: ${field("name")}`,
      `Email: ${field("email")}`,
      `Phone: ${field("phone") || "Not provided"}`,
      `Address: ${field("address")}`,
      ...(wants80G ? [`PAN: ${field("pan").toUpperCase() || "Please contact me for this detail"}`] : []),
      "",
      `Donation amount (INR): ${field("amount")}`,
      `Donation date: ${field("date")}`,
      `Payment method: ${field("method")}`,
      `Transaction reference / UTR: ${field("reference")}`,
      "",
      "Payment proof: I will attach the transfer confirmation or payment screenshot to this email.",
      "",
      "Please let me know if you need any further details to issue the receipt.",
      "Thank you.",
    ].join("\n");
    const gmailUrl = `https://mail.google.com/mail/?${new URLSearchParams({ view: "cm", fs: "1", to: teamEmail, su: subject, body })}`;
    const mailtoUrl = `mailto:${teamEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraft({ gmailUrl, mailtoUrl });
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="donation-receipt" id="donation-receipt" aria-labelledby="receipt-heading">
      <div className="donation-receipt-copy">
        <p className="donation-method">After your contribution</p>
        <h2 id="receipt-heading">Request your<br /><em>donation receipt.</em></h2>
        <p>Paid by QR code or bank transfer? Share your donation details so our team can prepare your receipt. You can also request a receipt for Section 80G purposes.</p>
        <ol className="donation-receipt-steps">
          <li>Fill in your details below.</li>
          <li>Open the prepared email in Gmail.</li>
          <li>Attach your payment proof, review and send.</li>
        </ol>
        <p className="donation-receipt-privacy">These details are used to prepare your email and are not saved on this website. Your request reaches the team only after you send it.</p>
      </div>
      <form className="donation-receipt-form" onSubmit={prepareReceipt} onChange={() => setDraft(null)}>
        <p className="receipt-field-note">All fields are required unless marked optional.</p>
        <div className="receipt-fields">
          <label>Full name<input name="name" autoComplete="name" required maxLength={120} placeholder="Name for the receipt" /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="you@example.com" /></label>
          <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} /></label>
          <label>Donation amount (₹)<input name="amount" type="number" min="1" step="0.01" required placeholder="e.g. 1000" /></label>
          <label>Donation date<input name="date" type="date" required /></label>
          <label>Payment method<select name="method" defaultValue="Bank transfer"><option>Bank transfer</option><option>UPI / QR payment</option><option>Other</option></select></label>
          <label className="receipt-field-wide">Transaction reference / UTR<input name="reference" required maxLength={120} placeholder="From your payment confirmation" /></label>
          <label className="receipt-field-wide">Full address<textarea name="address" autoComplete="street-address" required maxLength={600} rows={3} placeholder="Street, city, state and postal code" /></label>
        </div>
        <div className="receipt-tax-option">
          <label className="receipt-checkbox"><input type="checkbox" name="taxReceipt" defaultChecked />Request a receipt for Section 80G purposes</label>
          <label>PAN <span>(optional, for an 80G request)</span><input name="pan" maxLength={10} pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]" title="Enter a PAN with five letters, four digits and one letter" autoCapitalize="characters" placeholder="ABCDE1234F" /></label>
          <p>You can leave PAN blank and share it directly with the team by email.</p>
        </div>
        <button className="button" type="submit">Continue in Gmail <span aria-hidden="true">↗</span></button>
        <p className="receipt-send-note">Gmail opens in a new tab. Sign in if needed, then attach your payment proof before sending. An email-app option is also provided below after you continue.</p>
        {draft && (
          <div className="receipt-draft-status" role="status">
            <p>Your email is ready. If Gmail did not open, <a href={draft.gmailUrl} target="_blank" rel="noopener noreferrer">open the prepared email</a> or <a href={draft.mailtoUrl}>use your email app</a>.</p>
            <p>Send it to {teamEmail} after attaching your payment proof.</p>
          </div>
        )}
      </form>
    </section>
  );
}
