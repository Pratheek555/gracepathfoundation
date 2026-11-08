import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { BankDetails, ReceiptRequest, UpiPayment } from "./donation-tools";

export const metadata: Metadata = {
  title: "Donate | Gracepath Development Foundation",
  description: "Support Gracepath Development Foundation's community-led work through the donation QR code or bank transfer.",
};

export default function DonatePage() {
  return (
    <main className="donation-page">
      <div className="topline">
        <div className="shell topline-inner">
          <span>Grassroot Actions for a more just and inclusive India</span>
          <Link href="/#contact">Write to us <span aria-hidden="true">↓</span></Link>
        </div>
      </div>

      <SiteHeader />

      <section className="donation-options" id="main-content" tabIndex={-1}>
        <div className="shell">
          <div className="donation-options-heading">
            <p className="section-kicker"><span /> Ways to give</p>
            <h1>Choose how you’d like to contribute.</h1>
            <a className="text-link" href="#donation-receipt">Already donated? Request a receipt ↓</a>
          </div>

          <div className="donation-card">
            <section className="donation-qr-panel" aria-labelledby="donation-qr-heading">
              <p className="donation-method">UPI payment</p>
              <h2 id="donation-qr-heading">Pay by UPI</h2>
              <p className="donation-panel-copy">On your phone, open a UPI app below. On another device, scan this code with your payment app.</p>
              <figure className="donation-qr-frame">
                <Image
                  src="/gracepath/donation-qr.jpg"
                  alt="Gracepath donation QR code"
                  width={666}
                  height={666}
                  unoptimized
                  className="donation-qr"
                />
                <figcaption>Gracepath Development Foundation</figcaption>
              </figure>
              <UpiPayment />
            </section>

            <section className="donation-bank-panel" aria-labelledby="donation-bank-heading">
              <p className="donation-method">Direct bank transfer</p>
              <h2 id="donation-bank-heading">Bank details</h2>
              <p className="donation-panel-copy">Contribute directly using the account details below.</p>
              <BankDetails />
            </section>
          </div>

          <section className="donation-next" aria-labelledby="donation-next-heading">
            <h2 id="donation-next-heading">After your donation</h2>
            <ol><li>Save your payment confirmation and transaction reference / UTR.</li><li>Fill in the receipt request below with your transfer details.</li><li>Choose your email app, Gmail, or copy the message. Review and send it to the team; you can attach payment proof to your email.</li></ol>
            <p>Need help with a payment or receipt? <a href="tel:+919979411579">Call +91 99794 11579</a> or <a href="mailto:info@gracepathfoundation.com">email our team</a>.</p>
          </section>
          <ReceiptRequest />
          <p className="donation-contact-note">Questions about giving? <Link href="/#contact">Get in touch with our team.</Link></p>
        </div>
      </section>

      <footer className="footer donation-footer">
        <div className="shell footer-top">
          <div className="footer-brand">
            <Link className="brand brand--footer" href="/" aria-label="Gracepath Development Foundation home">
              <span className="logo-crop logo-crop--footer">
                <Image src="/gracepath/logo-transparent.png" alt="Gracepath Development Foundation" fill sizes="330px" />
              </span>
            </Link>
            <p>Empowering Lives,<br />Enriching Communities.</p>
          </div>
          <div className="footer-contact">
            <p className="footer-label">Visit us</p>
            <address>10/30, Kunnathetthu Building,<br />Chennad, Kottayam,<br />Kerala — 686581</address>
            <a href="tel:+919979411579">+91 99794 11579</a>
            <a href="mailto:info@gracepathfoundation.com">info@gracepathfoundation.com</a>
          </div>
          <div className="footer-nav">
            <p className="footer-label">Explore</p>
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/#contact">Contact us</Link>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Gracepath Development Foundation</span>
          <span>Made with care in Kerala <span aria-hidden="true">♥</span></span>
        </div>
      </footer>
    </main>
  );
}
