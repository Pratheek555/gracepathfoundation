"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";

const programImages = [
  {
    src: "/gracepath/programs/community-outreach-01.png",
    alt: "Gracepath team members speaking with a resident during community outreach in Kottayam",
  },
  {
    src: "/gracepath/programs/community-outreach-02.png",
    alt: "Gracepath team members delivering essential supplies to a household in Kottayam",
  },
  {
    src: "/gracepath/programs/community-outreach-03.png",
    alt: "A Gracepath volunteer handing supplies to a community member",
  },
  {
    src: "/gracepath/programs/community-outreach-04.png",
    alt: "A Gracepath team member distributing a basket of essential supplies",
  },
  {
    src: "/gracepath/programs/community-outreach-05.png",
    alt: "Gracepath team members and community partners gathered together",
  },
];

const impact = [
  ["9", "focus areas"],
  ["100%", "community-led"],
  ["1", "shared purpose"],
];

const services = [
  {
    title: "Healthcare & Community Wellness",
    description: "Free medical camps, nutrition awareness and public health initiatives. Holistic empowerment programs designed to enhance the capabilities and independence of individuals with mental and physical disabilities. Community awareness initiatives to dismantle social stigma.",
    image: "/gracepath/approach-health.jpg",
    alt: "An older woman speaking with a health worker.",
  },
  {
    title: "Skill Development",
    description: "Vocational training, trade workshops, and career guidance that prepare youth for sustainable self-employment.",
    image: "/gracepath/approach-education.jpg",
    alt: "Children learning with a community educator.",
  },
  {
    title: "Environmental Protection",
    description: "Sanitation campaigns, waste management, tree plantation drives, and water conservation initiatives.",
    image: "/gracepath/approach-environment.jpg",
    alt: "Community members planting and caring for greenery.",
  },
  {
    title: "Disaster Relief & Rehabilitation",
    description: "Emergency aid distribution and post-disaster recovery support for affected communities.",
    image: "/gracepath/programs/community-outreach-02.png",
    alt: "Gracepath team members delivering essential supplies to a household in Kottayam.",
  },
  {
    title: "Education Support",
    description: "Literacy drives, non-formal learning, dropout prevention and scholarship assistance for underserved children and youth.",
    image: "/gracepath/approach-education.jpg",
    alt: "Children learning with a community educator.",
  },
  {
    title: "Livelihood Enhancement",
    description: "Income-generation programs, microenterprise support, and financial literacy training for economically weaker sections.",
    image: "/gracepath/approach-livelihood.jpg",
    alt: "A woman tending crops in a field.",
  },
  {
    title: "Women Empowerment",
    description: "Women’s empowerment programs, child rights awareness, and prevention of gender-based violence.",
    image: "/gracepath/approach-community-session.jpg",
    alt: "A community discussion led by a woman facilitator.",
  },
  {
    title: "Community Development",
    description: "Organize seminars and awareness programs by mobilizing people across rural and urban areas, empowering them to become self-reliant. Launch campaigns against the use of drugs that pose a major threat to today’s society, thereby protecting the younger generation.",
    image: "/gracepath/programs/community-outreach-05.png",
    alt: "Gracepath team members and community partners gathered together.",
  },
  {
    title: "Mental Health Awareness",
    description: "Community-based mental health education and emotional support initiatives for youth and families.",
    image: "/gracepath/approach-health.jpg",
    alt: "A health worker speaking with a community member.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentProgramImage, setCurrentProgramImage] = useState(0);
  const [gmailDraftOpened, setGmailDraftOpened] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const showPreviousProgramImage = () => setCurrentProgramImage((current) => (current - 1 + programImages.length) % programImages.length);
  const showNextProgramImage = () => setCurrentProgramImage((current) => (current + 1) % programImages.length);

  const submitContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "Not provided");
    const inquiryType = String(formData.get("inquiryType") || "General inquiry");
    const message = String(formData.get("message") || "");
    const subject = `Gracepath website inquiry — ${inquiryType} — ${name}`;
    const body = `Hello Gracepath team,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nReason for contacting: ${inquiryType}\n\nMessage:\n${message}`;
    const gmailParameters = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "gracepathdevelopmentfoundation@gmail.com",
      su: subject,
      body,
    });

    window.open(`https://mail.google.com/mail/?${gmailParameters.toString()}`, "_blank", "noopener,noreferrer");
    setGmailDraftOpened(true);
  };

  return (
    <main>
      <div className="topline">
        <div className="shell topline-inner">
          <span>Grassroot Actions for a more just and inclusive India</span>
          <a href="#contact">Write to us <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Gracepath Development Foundation home">
            <span className="logo-crop logo-crop--nav"><Image src="/gracepath/logo-transparent.png" alt="Gracepath Development Foundation" fill sizes="(max-width: 640px) 230px, (max-width: 700px) 200px, (max-width: 900px) 230px, 290px" /></span>
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <a href="/about" onClick={closeMenu}>About us</a>
            <a href="#programs" onClick={closeMenu}>What we do</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact us <span aria-hidden="true">↓</span></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A foundation for shared progress</p>
            <h1>Empowering<br /><em>lives enriching<br />communities.</em></h1>
            <p className="hero-lede">We walk alongside to strengthen communities&apos; education, health, dignity and opportunity and make it part of their everyday life.</p>
            <div className="hero-actions">
              <a className="button button--dark" href="#contact">Contact us <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#programs">Explore our work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="A community gathering representing Gracepath&apos;s work">
            <div className="art-orbit art-orbit--one" />
            <div className="art-orbit art-orbit--two" />
            <div className="art-card art-card--green"><strong>Listen<br />first.</strong></div>
            <div className="art-card art-card--orange"><strong>Grow<br />together.</strong></div>
            <div className="art-illustration">
              <div className="sun" />
              <div className="hill hill--back" />
              <div className="hill hill--front" />
              <div className="tree tree--left"><i /><i /><i /></div>
              <div className="tree tree--right"><i /><i /><i /><i /></div>
              <div className="people"><b /><b /><b /><b /><b /></div>
            </div>
          </div>
        </div>
        <div className="hero-bottom shell">
          <span>Scroll to discover</span><div className="scroll-line" />
          <span>01 — 04</span>
        </div>
      </section>

      <section className="marquee" aria-label="Gracepath values">
        <div className="marquee-track"><span>People first</span><i>✳</i><span>Purpose always</span><i>✳</i><span>Progress together</span><i>✳</i><span>People first</span><i>✳</i><span>Purpose always</span></div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-kicker"><span>01</span><div /> Who we are</div>
        <div className="about-grid">
          <div>
            <h2>Towards an <em>empowered society.</em></h2>
            <p className="lead">Gracepath Development Foundation is a non-profit organization dedicated to creating lasting, positive change in the lives of underprivileged and marginalized communities.</p>
            <p>We work across education, healthcare, environment, livelihood, and community development — forging meaningful partnerships with government bodies, NGOs, and local stakeholders to deliver ground-level impact.</p>
            <a className="text-link text-link--teal" href="/about">Our story <span aria-hidden="true">↗</span></a>
          </div>
          <div className="about-visual">
            <blockquote className="visual-label">“The future belongs to those who actively build it with hope, unity, and a shared purpose.”<cite>— Kofi Annan</cite></blockquote>
            <div className="visual-sun" />
            <div className="visual-path" />
            <div className="visual-leaf visual-leaf--one" /><div className="visual-leaf visual-leaf--two" /><div className="visual-leaf visual-leaf--three" />
          </div>
        </div>
      </section>

      <section className="programs section" id="programs">
        <div className="shell">
          <div className="section-heading-row">
            <div className="section-kicker"><span>02</span><div /> What we do</div>
            <p>Appropriate programs designed specifically for each community&apos;s needs.</p>
          </div>
          <div className="program-intro"><h2>Programs specific<br /><em>for every need.</em></h2></div>
          <div className="program-carousel" role="region" aria-roledescription="carousel" aria-label="Gracepath community outreach">
            <div className="program-carousel-stage" aria-live="polite">
              {programImages.map((image, index) => (
                <figure className={index === currentProgramImage ? "program-carousel-slide is-active" : "program-carousel-slide"} aria-hidden={index !== currentProgramImage} key={image.src}>
                  <Image className="program-carousel-backdrop" src={image.src} alt="" fill sizes="(max-width: 760px) 100vw, 1120px" />
                  <Image className="program-carousel-image" src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 1120px" />
                </figure>
              ))}
              <button className="carousel-arrow carousel-arrow--previous" type="button" onClick={showPreviousProgramImage} aria-label="Show previous image"><span aria-hidden="true">←</span></button>
              <button className="carousel-arrow carousel-arrow--next" type="button" onClick={showNextProgramImage} aria-label="Show next image"><span aria-hidden="true">→</span></button>
              <div className="carousel-counter" aria-hidden="true">{String(currentProgramImage + 1).padStart(2, "0")} / {String(programImages.length).padStart(2, "0")}</div>
            </div>
            <div className="carousel-dots" aria-label="Choose an image">
              {programImages.map((image, index) => (
                <button className={index === currentProgramImage ? "carousel-dot is-active" : "carousel-dot"} type="button" onClick={() => setCurrentProgramImage(index)} aria-label={`Show image ${index + 1} of ${programImages.length}`} aria-current={index === currentProgramImage ? "true" : undefined} key={image.src} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="approach section shell" id="approach">
        <div className="approach-grid">
          <div className="approach-copy">
            <div className="section-kicker"><span>03</span><div /> Our approach</div>
            <h2>Towards a<br /><em>meaningful change.</em></h2>
            <p className="lead">Real change starts with listening. We partner with local communities to understand what matters most, build on what already exists, and create solutions that last.</p>
          </div>
          <div className="mission-copy">
            <figure className="approach-image">
              <Image src="/gracepath/approach-community-session.jpg" alt="Illustration of a woman leading a discussion with community members seated around her." fill sizes="(max-width: 900px) 100vw, 42vw" />
              <figcaption>Shared learning and community-led priorities.</figcaption>
            </figure>
            <div className="mission-block">
              <h3 className="mission-label">Our vision</h3>
              <p>A just, inclusive, and self-reliant society where every individual — regardless of background — lives with dignity, health, and purpose.</p>
            </div>
            <div className="mission-block">
              <h3 className="mission-label">Our mission</h3>
              <p>To uplift marginalized communities through holistic programs in education, health, livelihood, and environment — built on compassion and sustainable impact.</p>
            </div>
          </div>
        </div>
        <div className="approach-details">
          <div className="approach-details-heading">
            <div>
              <p className="section-kicker"><span /> From plan to action</p>
              <h3>Support shaped around local priorities.</h3>
            </div>
            <p>Gracepath runs awareness programs, training, workshops, seminars, and campaigns. It works with government bodies, NGOs, trusts, institutions, and local stakeholders, and directs resources to marginalized and economically weaker communities through targeted initiatives.</p>
          </div>
          <div className="approach-focus-grid">
            {services.map((service, index) => (
              <article className="approach-focus-card" key={service.title}>
                <div className="approach-focus-visual"><Image src={service.image} alt={service.alt} width={300} height={300} sizes="(max-width: 640px) 84px, 112px" /><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div><h4>{service.title}</h4><p>{service.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact section">
        <div className="shell impact-inner">
          <div><p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> The Gracepath promise</p><h2>When we move<br /><em>together,</em> we move<br />forward.</h2></div>
          <div className="impact-stats">{impact.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
        </div>
      </section>

      <section className="support section shell" id="contact">
        <div className="support-card contact-card">
          <div className="support-copy"><div className="section-kicker"><span>04</span><div /> Contact our team</div><h2>Let’s <em>Connect</em></h2><p>Tell us how you would like to partner with Gracepath. Our team shall contact you promptly.</p><div className="contact-direct"><a href="tel:+919979411579">+91 99794 11579</a><a href="mailto:gracepathdevelopmentfoundation@gmail.com">gracepathdevelopmentfoundation@gmail.com</a></div></div>
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={submitContactForm}>
              <div className="contact-form-row">
                <label>Name<input name="name" type="text" autoComplete="name" maxLength={100} required /></label>
                <label>Email<input name="email" type="email" autoComplete="email" maxLength={160} required /></label>
              </div>
              <div className="contact-form-row">
                <label>Phone <span>Optional</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} /></label>
                <label>Reason for contacting us<select name="inquiryType" defaultValue="" required><option value="" disabled>Select one</option><option value="Request support">Request support</option><option value="Volunteer">Volunteer</option><option value="Donate">Donate</option><option value="Partnership">Partnership</option><option value="General inquiry">General inquiry</option></select></label>
              </div>
              <label>Message<textarea name="message" rows={6} minLength={10} maxLength={3000} required /></label>
              <div className="contact-form-footer">
                <button className="button button--dark" type="submit">Send message<span aria-hidden="true">↗</span></button>
                <p className="contact-status" role="status" aria-live="polite">{gmailDraftOpened ? "Your draft is open in Gmail. Review it and press Send to finish." : "You’ll review your message in Gmail before sending."}</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-top">
          <div className="footer-brand"><a className="brand brand--footer" href="#top"><span className="logo-crop logo-crop--footer"><Image src="/gracepath/logo-transparent.png" alt="Gracepath Development Foundation" fill sizes="330px" /></span></a><p>Empowering Lives,<br />Enriching Communities.</p></div>
          <div className="footer-contact"><p className="footer-label">Visit us</p><address>10/30, Kunnathetthu Building,<br />Chennad, Kottayam,<br />Kerala — 686581</address><a href="tel:+919979411579">+91 99794 11579</a><a href="mailto:gracepathdevelopmentfoundation@gmail.com">gracepathdevelopmentfoundation@gmail.com</a></div>
          <div className="footer-nav"><p className="footer-label">Explore</p><a href="/about">About us</a><a href="#programs">What we do</a><a href="#approach">Our approach</a><a href="#contact">Contact us</a><a href="https://www.instagram.com/gracepath_foundation?stkn=MXhyMDloY2dzMmVodw==" target="_blank" rel="noreferrer">Instagram</a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Gracepath Development Foundation</span><span>Made with care in Kerala <span aria-hidden="true">♥</span></span></div>
      </footer>
    </main>
  );
}
