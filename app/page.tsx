"use client";

import Image from "next/image";
import { useState } from "react";

const programs = [
  {
    number: "01",
    title: "Education support",
    text: "Literacy drives, non-formal learning, dropout prevention, and scholarship assistance for children and youth.",
    icon: "book",
    accent: "mint",
  },
  {
    number: "02",
    title: "Health & nutrition",
    text: "Free medical camps, nutrition awareness, mother-and-child health initiatives, and public hygiene drives.",
    icon: "heart",
    accent: "peach",
  },
  {
    number: "03",
    title: "Livelihoods & skills",
    text: "Vocational training, trade workshops, career guidance, and microenterprise support for sustainable self-employment.",
    icon: "spark",
    accent: "lavender",
  },
  {
    number: "04",
    title: "Environment & resilience",
    text: "Sanitation campaigns, waste management, tree plantation, water conservation, and disaster recovery support.",
    icon: "leaf",
    accent: "yellow",
  },
];

const impact = [
  ["6", "focus areas"],
  ["100%", "community-led"],
  ["1", "shared purpose"],
];

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "book") {
    return <svg {...common}><path d="M4 4.8A2.8 2.8 0 0 1 6.8 2H20v17H6.8A2.8 2.8 0 0 0 4 21.8V4.8Z" /><path d="M4 5h14M8 7h6M8 11h8M8 15h5" /></svg>;
  }
  if (name === "heart") {
    return <svg {...common}><path d="M20.8 8.9c0 5.2-8.8 10.1-8.8 10.1S3.2 14.1 3.2 8.9A4.6 4.6 0 0 1 12 6.5a4.6 4.6 0 0 1 8.8 2.4Z" /><path d="M7.6 10.5h2l1-2.1 1.7 4.2 1-2.1h2.1" /></svg>;
  }
  if (name === "spark") {
    return <svg {...common}><path d="m12 2 1.3 5.1L18 9l-4.7 1.9L12 16l-1.3-5.1L6 9l4.7-1.9L12 2Z" /><path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14ZM5 15l.6 1.9L7.5 17l-1.9.6L5 19.5l-.6-1.9L2.5 17l1.9-.6L5 15Z" /></svg>;
  }
  if (name === "leaf") {
    return <svg {...common}><path d="M20.8 3.4C12 3.6 5.1 5.8 4.1 12.1c-.6 3.9 2.1 6.5 5.3 6.5 6.5 0 9.8-7.3 11.4-15.2Z" /><path d="M3 21c3.2-4.4 7.1-7.4 12-9.7" /><path d="M8.3 17.9c.1-2.1-.5-3.9-2.2-5.2" /></svg>;
  }
  return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="topline">
        <div className="shell topline-inner">
          <span>Grassroots action for a more just, inclusive India.</span>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gracepathdevelopmentfoundation@gmail.com&su=Hello%20Gracepath" target="_blank" rel="noopener noreferrer">Write to us <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Gracepath Development Foundation home">
            <span className="logo-crop logo-crop--nav"><Image src="/gracepath/logo.png" alt="Gracepath Development Foundation" fill sizes="180px" /></span>
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <a href="/about" onClick={closeMenu}>About us</a>
            <a href="#programs" onClick={closeMenu}>What we do</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#support" onClick={closeMenu}>Support our work <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A foundation for shared progress</p>
            <h1>Small steps.<br /><em>Lasting change.</em></h1>
            <p className="hero-lede">We walk alongside underserved communities to make education, health, dignity, and opportunity part of everyday life.</p>
            <div className="hero-actions">
              <a className="button button--dark" href="#support">Be part of the change <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#programs">Explore our work <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note"><span className="note-dot" /> Grounded in communities. Growing with care.</div>
          </div>
          <div className="hero-art" aria-label="A community gathering representing Gracepath's work">
            <div className="art-orbit art-orbit--one" />
            <div className="art-orbit art-orbit--two" />
            <div className="art-card art-card--green"><span>01</span><strong>Listen<br />first.</strong></div>
            <div className="art-card art-card--orange"><span>02</span><strong>Grow<br />together.</strong></div>
            <div className="art-illustration">
              <div className="sun" />
              <div className="hill hill--back" />
              <div className="hill hill--front" />
              <div className="tree tree--left"><i /><i /><i /></div>
              <div className="tree tree--right"><i /><i /><i /><i /></div>
              <div className="people"><b /><b /><b /><b /><b /></div>
            </div>
            <div className="hero-stamp"><span>EST.</span><strong>2021</strong><small>Kerala, India</small></div>
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
            <h2>A little more <em>possibility</em> for everyone.</h2>
            <p className="lead">Gracepath Development Foundation is a non-profit organization dedicated to creating lasting, positive change in the lives of underprivileged and marginalized communities.</p>
            <p>We work across education, healthcare, environment, livelihood, and community development — forging meaningful partnerships with government bodies, NGOs, and local stakeholders to deliver ground-level impact.</p>
            <a className="text-link text-link--teal" href="/about">Our story <span aria-hidden="true">↗</span></a>
          </div>
          <div className="about-visual">
            <div className="visual-label">The work is local.<br /><em>The hope is shared.</em></div>
            <div className="visual-sun" />
            <div className="visual-path" />
            <div className="visual-leaf visual-leaf--one" /><div className="visual-leaf visual-leaf--two" /><div className="visual-leaf visual-leaf--three" />
            <div className="visual-quote">“A just, inclusive, and self-reliant society where every individual lives with dignity, health, and purpose.”</div>
          </div>
        </div>
      </section>

      <section className="programs section" id="programs">
        <div className="shell">
          <div className="section-heading-row">
            <div className="section-kicker"><span>02</span><div /> What we do</div>
            <p>Holistic programs designed with communities, for communities.</p>
          </div>
          <div className="program-intro"><h2>Change grows<br /><em>in many ways.</em></h2><p>From a child opening their first book to a neighborhood planting its first community garden, every action matters.</p></div>
          <div className="program-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.number}>
                <div className={`program-icon ${program.accent}`}><Icon name={program.icon} /></div>
                <div className="program-number">{program.number}</div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <a href="#support" aria-label={`Support ${program.title}`}>Learn more <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach section shell" id="approach">
        <div className="approach-grid">
          <div className="approach-image"><Image src="/gracepath/community-story.jpg" alt="A community gathering in conversation" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
          <div className="approach-copy">
            <div className="section-kicker"><span>03</span><div /> Our approach</div>
            <h2>Work with people,<br /><em>not just for them.</em></h2>
            <p className="lead">Real change starts with listening. We partner with local communities to understand what matters most, build on what already exists, and create solutions that last.</p>
            <div className="principles">
              <div><span>01</span><p><strong>Listen deeply</strong> — We begin with lived experience.</p></div>
              <div><span>02</span><p><strong>Act together</strong> — We make progress a shared effort.</p></div>
              <div><span>03</span><p><strong>Stay for the long run</strong> — We measure success by what endures.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact section">
        <div className="shell impact-inner">
          <div><p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> The Gracepath promise</p><h2>When we move<br /><em>together,</em> we move<br />forward.</h2></div>
          <div className="impact-stats">{impact.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
        </div>
      </section>

      <section className="support section shell" id="support">
        <div className="support-card">
          <div className="support-copy"><div className="section-kicker"><span>04</span><div /> Get involved</div><h2>There’s room<br />for <em>you</em> here.</h2><p>Whether you give your time, your skills, or a little support, you help build pathways to a more hopeful future.</p><a className="button button--dark" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=gracepathdevelopmentfoundation@gmail.com&amp;su=I%20want%20to%20support%20Gracepath" target="_blank" rel="noopener noreferrer">Start a conversation <span aria-hidden="true">↗</span></a></div>
          <div className="support-art"><div className="support-circle support-circle--back" /><div className="support-circle support-circle--front" /><div className="support-message">Bring<br /><em>what you can.</em></div><div className="support-sun" /></div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="shell footer-top">
          <div className="footer-brand"><a className="brand brand--footer" href="#top"><span className="logo-crop logo-crop--footer"><Image src="/gracepath/logo.png" alt="Gracepath Development Foundation" fill sizes="220px" /></span></a><p>Empowering lives,<br />enriching communities.</p></div>
          <div className="footer-contact"><p className="footer-label">Visit us</p><address>10/30, Kunnathetthu Building,<br />Chennad, Kottayam,<br />Kerala — 686581</address><a href="tel:+919825011579">+91-98250-11579</a><a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=gracepathdevelopmentfoundation@gmail.com" target="_blank" rel="noopener noreferrer">gracepathdevelopmentfoundation@gmail.com</a></div>
          <div className="footer-nav"><p className="footer-label">Explore</p><a href="/about">About us</a><a href="#programs">What we do</a><a href="#approach">Our approach</a><a href="#support">Get involved</a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Gracepath Development Foundation</span><span>Made with care in Kerala <span aria-hidden="true">♥</span></span></div>
      </footer>
    </main>
  );
}
