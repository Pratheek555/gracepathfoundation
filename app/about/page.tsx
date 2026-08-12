import Image from "next/image";
import Link from "next/link";

type Leader = {
  name: string;
  role: string;
  image: string;
  bio: string;
  featured?: boolean;
};

const leadership: Leader[] = [
  {
    name: "Gino Sebastian",
    role: "Chairman",
    image: "/gracepath/leaders/portrait-im5.png",
    featured: true,
    bio: "An executive leader and corporate director with over two decades of multifaceted experience. As a Wholetime Director at Arctech Solar India, Gino brings operational strategy, corporate governance, workforce development, and institutional relationship-building to Gracepath. His leadership is rooted in social equity, community empowerment, and long-term sustainable development.",
  },
  {
    name: "Johnsy Gino",
    role: "Vice Chairperson",
    image: "/gracepath/leaders/portrait-im6.png",
    bio: "A registered nurse with over 15 years of experience across Andhra Pradesh, Delhi, and Gujarat, Johnsy later became a fashion designer and entrepreneur. She founded Ambi's Studio and Ambi's Atelier, and serves as an elected member of the Poonjar Grama Panchayath and Chairperson of its Welfare Standing Committee. She brings compassionate healthcare, executive leadership, and public service to Gracepath.",
  },
  {
    name: "Angelina Mary Gino",
    role: "Chief Coordinator",
    image: "/gracepath/leaders/portrait-im7.png",
    bio: "A psychology graduate, mental health practitioner, and youth leader with training in clinical and forensic psychology and peer counselling. Angelina has worked with KRIPA and Yellowwings, supporting psychological assessment, counselling, and rehabilitation. At Gracepath, she leads program coordination, youth engagement, and community outreach operations.",
  },
  {
    name: "Alan Joy",
    role: "Program Coordinator",
    image: "/gracepath/leaders/portrait-im8.png",
    bio: "A social work professional and youth advocate with a Master's degree in Social Work. Alan's field associations include St. John's National Academy of Health Sciences, Louismount Hospital & Rehabilitation Centre, and ADART. His experience spans medical and psychiatric social work, community health, rural development, and social action.",
  },
  {
    name: "Thresiamma John",
    role: "Patron & Spiritual Guide",
    image: "/gracepath/leaders/portrait-im2.png",
    bio: "A veteran social worker and community organizer whose decades of service have focused on women's empowerment, stronger families, and vulnerable populations. As Gracepath's Patron and Spiritual Guide, she is the moral compass and spiritual anchor of the organization.",
  },
  {
    name: "Jomon T. John",
    role: "Chief Advisor",
    image: "/gracepath/leaders/portrait-im3.png",
    bio: "A healthcare leader, entrepreneur, and founder of New Light Psychiatric Services. With experience in mental health administration, clinical practice oversight, CAPART, and the SNS Foundation, Jomon provides strategic guidance, governance oversight, and expert leadership to Gracepath.",
  },
  {
    name: "Dr. Panchami Thomas",
    role: "Advisor - Health & Clinical Affairs",
    image: "/gracepath/leaders/portrait-im4.png",
    bio: "A Doctor of Nursing Practice and board-certified Psychiatric Mental Health Nurse Practitioner. Dr. Panchami brings expertise across inpatient, outpatient, and community care settings, guiding Gracepath's community health, clinical initiatives, wellness programming, and health equity work.",
  },
];

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className={leader.featured ? "leader-card leader-card--featured" : "leader-card"}>
      <div className="leader-photo">
        <Image src={leader.image} alt={`${leader.name}, ${leader.role}`} fill sizes={leader.featured ? "(max-width: 760px) 100vw, 52vw" : "(max-width: 760px) 100vw, 25vw"} />
      </div>
      <div className="leader-content">
        <p className="leader-role">{leader.role}</p>
        <h3>{leader.name}</h3>
        <p className="leader-bio">{leader.bio}</p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  const featured = leadership.slice(0, 4);
  const advisors = leadership.slice(4);

  return (
    <main className="about-page">
      <div className="topline">
        <div className="shell topline-inner">
          <span>Grassroots action for a more just, inclusive India.</span>
          <a href="mailto:gracepathdevelopmentfoundation@gmail.com">Write to us -&gt;</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <Link className="brand" href="/" aria-label="Gracepath Development Foundation home">
            <span className="logo-crop logo-crop--nav"><Image src="/gracepath/logo.png" alt="Gracepath Development Foundation" fill sizes="180px" /></span>
          </Link>
          <nav className="main-nav about-nav" aria-label="Main navigation">
            <Link className="about-nav-active" href="/about">About us</Link>
            <Link href="/#programs">What we do</Link>
            <Link href="/#approach">Our approach</Link>
            <Link href="/#contact">Contact</Link>
            <Link className="nav-cta" href="/#support">Support our work -&gt;</Link>
          </nav>
        </div>
      </header>

      <section className="about-hero">
        <div className="shell about-hero-grid">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> About Gracepath</p>
            <h1>People make<br /><em>the path.</em></h1>
          </div>
          <div className="about-hero-copy">
            <p>Gracepath Development Foundation is built on a simple belief: lasting change grows when people are seen, heard, and supported to shape their own future.</p>
            <div className="about-hero-meta"><span>Leadership matrix</span><span>01 - 07</span></div>
          </div>
        </div>
        <div className="about-hero-shape about-hero-shape--one" />
        <div className="about-hero-shape about-hero-shape--two" />
        <div className="about-hero-sun" />
      </section>

      <section className="about-story section shell">
        <div className="section-kicker"><span>01</span><div /> Our story</div>
        <div className="about-story-grid">
          <h2>A foundation with<br /><em>heart at the centre.</em></h2>
          <div>
            <p className="lead">We work across education, healthcare, environment, livelihoods, and community development - forging partnerships that turn care into meaningful, ground-level action.</p>
            <p>Our leadership brings together social work, healthcare, mental health, public service, entrepreneurship, and community organizing. Different experiences, one shared commitment: to uplift marginalized communities with dignity, compassion, and purpose.</p>
          </div>
        </div>
      </section>

      <section className="leadership section">
        <div className="shell">
          <div className="leadership-heading">
            <div><div className="section-kicker"><span>02</span><div /> Our people</div><h2>The people<br /><em>behind the work.</em></h2></div>
            <p>Gracepath is guided by leaders who bring professional expertise, local understanding, and a deep belief in service.</p>
          </div>
          <div className="leadership-grid">{featured.map((leader) => <LeaderCard key={leader.name} leader={leader} />)}</div>
        </div>
      </section>

      <section className="advisors section shell">
        <div className="advisors-heading"><div className="section-kicker"><span>03</span><div /> Advisory circle</div><p>Experience that keeps our mission grounded, thoughtful, and accountable.</p></div>
        <div className="advisors-grid">{advisors.map((leader) => <LeaderCard key={leader.name} leader={leader} />)}</div>
      </section>

      <section className="mission-band">
        <div className="shell mission-grid">
          <div><p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> What guides us</p><h2>Compassion in action.<br /><em>Progress with purpose.</em></h2></div>
          <div className="mission-points"><div><span>Vision</span><p>A just, inclusive, and self-reliant society where every individual lives with dignity, health, and purpose.</p></div><div><span>Mission</span><p>To uplift marginalized communities through holistic programs in education, health, livelihood, and environment - built on compassion and sustainable impact.</p></div></div>
        </div>
      </section>

      <section className="about-cta section shell">
        <div className="about-cta-card"><div><p className="section-kicker"><span>04</span><div /> Walk with us</p><h2>There is a place<br />for <em>you</em> here.</h2></div><div><p>Whether you bring time, skills, partnership, or support, your contribution can help a community move forward.</p><Link className="button button--dark" href="/#support">Get involved -&gt;</Link></div></div>
      </section>

      <footer className="footer" id="contact">
        <div className="shell footer-top">
          <div className="footer-brand"><Link className="brand brand--footer" href="/"><span className="logo-crop logo-crop--footer"><Image src="/gracepath/logo.png" alt="Gracepath Development Foundation" fill sizes="220px" /></span></Link><p>Empowering lives,<br />enriching communities.</p></div>
          <div className="footer-contact"><p className="footer-label">Visit us</p><address>10/30, Kunnathetthu Building,<br />Chennad, Kottayam,<br />Kerala - 686581</address><a href="tel:+919825011579">+91-98250-11579</a><a href="mailto:gracepathdevelopmentfoundation@gmail.com">gracepathdevelopmentfoundation@gmail.com</a></div>
          <div className="footer-nav"><p className="footer-label">Explore</p><Link href="/about">About us</Link><Link href="/#programs">What we do</Link><Link href="/#approach">Our approach</Link><Link href="/#support">Get involved</Link></div>
        </div>
        <div className="shell footer-bottom"><span>Copyright {new Date().getFullYear()} Gracepath Development Foundation</span><span>Made with care in Kerala</span></div>
      </footer>
    </main>
  );
}
