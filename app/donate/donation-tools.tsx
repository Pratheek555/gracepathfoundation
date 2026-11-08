"use client";

import { useState, type FormEvent } from "react";
import { RequestActions, useRequestDelivery } from "../components/request-delivery";

const bankDetails = [
  { label: "Account name", value: "GRACEPATH DEVELOPMENT FOUNDATION" },
  { label: "Bank name", value: "THE SOUTH INDIAN BANK" },
  { label: "Account number", value: "0761073000000337" },
  { label: "Account type", value: "CURRENT" },
  { label: "IFSC code", value: "SIBL0000761" },
  { label: "Branch", value: "PANACHIPARA, POONJAR, KOTTAYAM, KERALA" },
  { label: "SWIFT code", value: "SOININ55" },
];

// Decoded from public/gracepath/donation-qr.jpg. Keep this in sync with that QR.
export const upiId = "9825011579@upi";
export const upiPaymentUrl = "upi://pay?pa=9825011579@upi&pn=GRACEPATH%20DEVELOPMENT%20FOUNDATION";

export function UpiPayment() {
  const [message, setMessage] = useState("");
  async function copyUpi() {
    try {
      await navigator.clipboard.writeText(upiId);
      setMessage("UPI ID copied. Paste it in your payment app.");
    } catch {
      setMessage("Please select and copy the UPI ID above.");
    }
  }
  return (
    <div className="upi-payment">
      <p>UPI ID: <strong className="upi-id">{upiId}</strong></p>
      <div className="upi-actions"><a className="button upi-launch" href={upiPaymentUrl}>Open a UPI app ↗</a><button className="text-link" type="button" onClick={copyUpi}>Copy UPI ID</button><a className="text-link" href="/gracepath/donation-qr.jpg" download="gracepath-donation-qr.jpg">Save QR image ↓</a></div>
      <p role="status" className="donation-copy-status">{message}</p>
      <p className="receipt-send-note">Using this same phone? Open your UPI app or save the QR image and choose “Scan from gallery” in an app that supports it. If the app link does not open, paste the UPI ID manually.</p>
      <p className="receipt-send-note">Enter your amount in the payment app and check that the recipient is Gracepath Development Foundation before confirming. If the name differs, contact our team first.</p>
    </div>
  );
}

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
  const delivery = useRequestDelivery();
  const [taxReceipt, setTaxReceipt] = useState(false);

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
      "Please match the transfer using the transaction reference above. I can share payment proof by email if needed.",
      "",
      "Please let me know if you need any further details to issue the receipt.",
      "Thank you.",
    ].join("\n");
    void delivery.submit(event, { subject, body });
  }

  return (
    <section className="donation-receipt" id="donation-receipt" aria-labelledby="receipt-heading">
      <div className="donation-receipt-copy">
        <p className="donation-method">After your contribution</p>
        <h2 id="receipt-heading">Request your<br /><em>donation receipt.</em></h2>
        <p>Paid by UPI or bank transfer? Share your details so our team can match the transfer and prepare your receipt. This request does not itself confirm the payment.</p>
        <ol className="donation-receipt-steps">
          <li>Fill in your details below.</li>
          <li>Choose a sending option below.</li>
          <li>Keep your transaction reference and ask the team when to expect your receipt. If emailing, you can attach payment proof.</li>
        </ol>
        <p className="donation-receipt-privacy">These details are used to prepare your email and are not saved on this website. Your request reaches the team only after you send it.</p>
      </div>
      <form className="donation-receipt-form" onSubmit={prepareReceipt} onChange={delivery.clear}>
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
          <label className="receipt-checkbox"><input type="checkbox" name="taxReceipt" checked={taxReceipt} onChange={(event) => setTaxReceipt(event.target.checked)} />Request a receipt for Section 80G purposes</label>
          {taxReceipt && <><label>PAN <span>(optional, for an 80G request)</span><input name="pan" maxLength={10} pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]" title="Enter a PAN with five letters, four digits and one letter" autoCapitalize="characters" placeholder="ABCDE1234F" /></label><p>You can leave PAN blank and share it directly with the team by email.</p></>}
        </div>
        <RequestActions delivery={delivery} />
      </form>
    </section>
  );
}
