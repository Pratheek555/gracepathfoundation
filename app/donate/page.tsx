import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BankDetails, ReceiptRequest } from "./donation-tools";

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

      <header className="site-header">
        <div className="shell nav-wrap donation-nav-wrap">
          <Link className="brand" href="/" aria-label="Gracepath Development Foundation home">
            <span className="logo-crop logo-crop--nav">
              <Image
                src="/gracepath/logo-transparent.png"
                alt="Gracepath Development Foundation"
                fill
                sizes="(max-width: 640px) 230px, (max-width: 700px) 200px, (max-width: 900px) 230px, 290px"
              />
            </span>
          </Link>
          <nav className="donation-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/#programs">Our work</Link>
            <Link href="/#contact">Contact</Link>
            <Link className="donation-nav-cta" href="/donate" aria-current="page">Donate</Link>
          </nav>
        </div>
      </header>

      <section className="donation-options">
        <div className="shell">
          <div className="donation-options-heading">
            <p className="section-kicker"><span /> Ways to give</p>
            <h1>Choose how you’d like to contribute.</h1>
          </div>

          <div className="donation-card">
            <section className="donation-qr-panel" aria-labelledby="donation-qr-heading">
              <p className="donation-method">QR payment</p>
              <h3 id="donation-qr-heading">Scan to donate</h3>
              <p className="donation-panel-copy">Open your payment app and scan this code to contribute.</p>
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
            </section>

            <section className="donation-bank-panel" aria-labelledby="donation-bank-heading">
              <p className="donation-method">Direct bank transfer</p>
              <h3 id="donation-bank-heading">Bank details</h3>
              <p className="donation-panel-copy">Contribute directly using the account details below.</p>
              <BankDetails />
            </section>
          </div>

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
            <a href="mailto:gracepathdevelopmentfoundation@gmail.com">gracepathdevelopmentfoundation@gmail.com</a>
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
