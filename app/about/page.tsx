import Image from "next/image";
import Link from "next/link";

type Leader = {
  name: string;
  role: string;
  image: string;
  bio: string[];
  featured?: boolean;
};

type Patron = {
  name: string;
  image: string;
};

const leadership: Leader[] = [
  {
    name: "Gino Sebastian",
    role: "Chairman",
    image: "/gracepath/leaders/portrait-im5.png",
    featured: true,
    bio: [
      "Mr. Gino Sebastian is an executive leader and corporate director with over two decades of multifaceted experience across different functions. As a Wholetime Director at Arctech Solar India, he plays a pivotal role in shaping operational strategy, navigating complex regulatory landscapes, and driving scalable growth.",
      "Throughout his 20+ year career, Gino has established a reputation for driving operational excellence, building resilient systems and practices, and establishing collaborative institutional relationships. His cross-functional expertise spans large-scale project management, workforce development, and strategic corporate governance.",
      "As Chairman of the Gracepath Development Foundation, Gino brings his executive vision, strategic acumen, and deep-rooted commitment to social impact to the forefront of the organization's mission. Driven by a passion for social equity and community empowerment, his leadership serves as a guiding beacon for Gracepath's initiatives aimed at uplifting marginalized populations, fostering sustainable development, and creating long-term positive change across society.",
    ],
  },
  {
    name: "Johnsy Gino",
    role: "Vice Chairperson",
    image: "/gracepath/leaders/portrait-im6.png",
    bio: [
      "Mrs. Johnsy Gino is a dynamic leader whose career spans clinical healthcare, creative entrepreneurship, and dedicated public service. With over 15 years of experience as a Registered Nurse, she served in leading hospitals across Andhra Pradesh, Delhi, and Gujarat, establishing a strong foundation in patient care, empathy, and community health.",
      "Driven by a passion for design and business, Johnsy transitioned into entrepreneurship by formalizing her training as a professional Fashion Designer. She successfully founded and manages Ambi's Studio and Ambi's Atelier, a premier fashion studio and designer house. As a successful business owner, she has built a reputation for creative excellence and executive leadership.",
      "Her deep commitment to social welfare led her into active public governance. She currently serves as an Elected Member of the Poonjar Grama Panchayath and holds the position of Chairperson of the Welfare Standing Committee, where she leads local initiatives focused on community development, social security, and empowering marginalized families.",
      "As Vice Chairperson of the Gracepath Development Foundation, Johnsy brings her compassionate healthcare background, executive leadership, and public service experience to the core of the foundation. Her heartfelt dedication to uplifting the underprivileged serves as a constant source of inspiration and vitality for Gracepath's social and humanitarian endeavors.",
    ],
  },
  {
    name: "Angelina Mary Gino",
    role: "Chief Coordinator",
    image: "/gracepath/leaders/angeloSister.jpeg",
    bio: [
      "Ms. Angelina Mary Gino is a vibrant youth leader, mental health practitioner, and dynamic advocate for social service, driven by the belief that dedicated service to society is the ultimate path to a meaningful life. A Psychology graduate from Rajagiri Viswajyothi College of Applied Sciences, she combines academic rigor with practical clinical training and a deep empathy for human well-being.",
      "Angelina has completed specialized training in Clinical Psychology with valuable exposure to Forensic Psychology, along with certifications in Peer Counselling. Her hands-on field experience includes impactful work with the Kerala Rehabilitation Institute for the Physically Affected (KRIPA) and a clinical internship at Yellowwings, where she supported individuals through psychological assessment, counseling, and holistic rehabilitation care.",
      "In addition to her clinical and academic foundation, Angelina brings exceptional creative energy and communication skills to her community work. A trained Bharatanatyam dancer with nearly a decade of formal practice and an experienced stage anchor, her artistic versatility adds extraordinary vibrancy, cultural depth, and poise to her public engagements.",
      "As Chief Coordinator of the Gracepath Development Foundation, Angelina oversees program coordination, youth engagement, and community outreach operations. Her passion, structured approach to psychological support, and commitment to societal uplifting serve as an inspiring bridge between Gracepath's leadership vision and its community-level impact.",
    ],
  },
  {
    name: "Alan Joy",
    role: "Program Coordinator",
    image: "/gracepath/leaders/potrait-im8.jpg",
    bio: [
      "Mr. Alan Joy is a dedicated social work professional, youth advocate, and community organizer driven by a lifelong passion for social service and human empowerment. Holding a Master's degree in Social Work (MSW), he combines professional methodologies with a strong, hands-on commitment to community development.",
      "During his academic career, Alan distinguished himself as an energetic student and university-level youth leader. His leadership, discipline, and commitment to service were further sharpened through his selection and participation in national-level camps of the National Cadet Corps (NCC). These experiences built a strong foundation in team leadership, civic responsibility, and strategic event management.",
      "Alan brings valuable practical exposure to his role, having completed intensive field associations with esteemed institutions including St. John's National Academy of Health Sciences (Bengaluru), Louismount Hospital & Rehabilitation Centre (Wayanad), and ADART (Pala). Through these real-world engagements, he gained deep experience in medical and psychiatric social work, community health, rural development, and social action frameworks.",
      "As Program Coordinator at the Gracepath Development Foundation, Alan leverages his vibrant personality, youth connect, and field expertise to design, coordinate, and execute community outreach programs. His energetic leadership brings vitality and structure to Gracepath's initiatives, effectively bridging grassroots needs with impactful organizational programs.",
    ],
  },
  {
    name: "Jomon T. John",
    role: "Chief Advisor",
    image: "/gracepath/leaders/portrait-im3.png",
    bio: [
      "Jomon T. John is a healthcare leader, entrepreneur, and executive serving as the Owner & Founder of New Light Psychiatric Services. With extensive experience in mental health administration, clinical practice oversight, and healthcare entrepreneurship, Jomon has established high standards of compassionate, evidence-based behavioral healthcare practices.",
      "A distinguished alumnus of Visva-Bharati University, Santiniketan (Kolkata), Jomon's foundational worldview was deeply shaped by the institution's rich heritage of humanism, holistic education, and social progress. Earlier, he worked extensively in the social sector through notable associations with the Council for Advancement of People's Action and Rural Technology (CAPART) and the SNS Foundation. These experiences provided him with profound insights into grassroots level community service, rural development frameworks, and institutional empowerment.",
      "As Chief Advisor to the Gracepath Development Foundation, he provides strategic guidance, governance oversight, and expert leadership to advance the foundation's community outreach, wellness and organizational growth initiatives. His cross-sector background in healthcare business management and community advocacy helps drive Gracepath's mission to empower and uplift the communities.",
    ],
  },
  {
    name: "Dr. Panchami Thomas",
    role: "Advisor - Health & Clinical Affairs",
    image: "/gracepath/leaders/portrait-im4.png",
    bio: [
      "Dr. Panchami Thomas, DNP, PMHNP-BC, is a healthcare leader, advanced practice clinician, and mental health advocate. She holds a Doctor of Nursing Practice from the University of South Alabama and is a board-certified Psychiatric Mental Health Nurse Practitioner with extensive expertise across inpatient, outpatient, and community care settings.",
      "As a lead clinical provider, Dr. Panchami manages comprehensive care practices, offering specialized psychiatric evaluations, medication management, and therapeutic services. Her clinical work focuses on addressing complex behavioral health needs with compassionate care.",
      "In her role as Advisor - Health & Clinical Affairs, Dr. Panchami provides strategic oversight and expert guidance to Gracepath on community health, clinical initiatives, and wellness programming. Her deep commitment to holistic patient care and healthcare accessibility helps guide our mission to foster health equity and empower individuals and families across the community.",
    ],
  },
];

const patrons: Patron[] = [
  {
    name: "Mrs. Thresiamma John",
    image: "/gracepath/leaders/portrait-im2.png",
  },
  {
    name: "Mrs. Mary Sebastian",
    image: "/gracepath/leaders/patron-new.png",
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
        <div className="leader-bio">{leader.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
    </article>
  );
}

function PatronFeature() {
  return (
    <div className="patron-feature">
      <div className="patron-portraits">
        {patrons.map((patron) => (
          <figure className="patron-portrait" key={patron.image}>
            <div className="patron-photo">
              <Image src={patron.image} alt={patron.name} fill sizes="(max-width: 640px) 100vw, 42vw" />
            </div>
            <figcaption>
              <strong>{patron.name}</strong>
              <span>Patron</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="patron-description">
        <p>At Gracepath Development Foundation, our mission is anchored in the timeless values of selfless service, compassion, and spiritual guidance passed down by our revered Patrons, Mrs. Mary Sebastian and Mrs. Thresiamma John. As the true driving force behind our organization, their lives of quiet sacrifice, unwavering faith, and generosity have served as our constant inspiration. By teaching us the vital importance of giving back to the society, uplifting the poor, and extending a helping hand to those in need, their enduring legacy forms the guiding foundation for all our efforts to transform lives and serve the society.</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const featured = leadership.slice(0, 4);
  const advisors = leadership.slice(4);

  return (
    <main className="about-page">
      <div className="topline"><div className="shell topline-inner"><span>Grassroot Actions for a more just and inclusive India</span><Link href="/#contact">Write to us ↓</Link></div></div>
      <header className="site-header"><div className="shell nav-wrap"><Link className="brand" href="/" aria-label="Gracepath Development Foundation home"><span className="logo-crop logo-crop--nav"><Image src="/gracepath/logo-transparent.png" alt="Gracepath Development Foundation" fill sizes="200px" /></span></Link><nav className="main-nav about-nav" aria-label="Main navigation"><Link className="about-nav-active" href="/about">About us</Link><Link href="/#programs">What we do</Link><Link href="/#approach">Our approach</Link><Link href="/#contact">Contact</Link><Link className="nav-cta" href="/#contact">Contact us ↓</Link></nav></div></header>

      <section className="about-hero"><div className="shell about-hero-grid"><div><p className="eyebrow"><span className="eyebrow-line" /> About Gracepath</p><h1>People make<br /><em>the path.</em></h1></div><div className="about-hero-copy"><p>Gracepath Development Foundation is built on a simple belief: lasting change grows when people are seen, heard, and supported to shape their own future.</p><div className="about-hero-meta"><span>Leadership matrix</span><span>01 - 08</span></div></div></div><div className="about-hero-shape about-hero-shape--one" /><div className="about-hero-shape about-hero-shape--two" /><div className="about-hero-sun" /></section>

      <section className="about-story section shell"><div className="section-kicker"><span>01</span><div /> Our story</div><div className="about-story-grid"><h2>A foundation with<br /><em>heart at the centre.</em></h2><div><p className="lead">We work across education, healthcare, environment, livelihoods, and community development - forging partnerships that turn care into meaningful, ground-level action.</p><p>Our leadership brings together social work, healthcare, mental health, public service, entrepreneurship, and community organizing. Different experiences, one shared commitment: to uplift marginalized communities with dignity, compassion, and purpose.</p></div></div></section>

      <section className="leadership section"><div className="shell"><div className="leadership-heading"><div><div className="section-kicker"><span>02</span><div /> Our people</div><h2>The people<br /><em>behind the work.</em></h2></div><p>Gracepath is guided by leaders who bring professional expertise, local understanding, and a deep belief in service.</p></div><div className="leadership-grid">{featured.map((leader) => <LeaderCard key={leader.name} leader={leader} />)}</div></div></section>

      <section className="advisors section shell"><div className="advisors-heading"><div className="section-kicker"><span>03</span><div /> Advisory circle</div><p>Experience that keeps our mission grounded, thoughtful, and accountable.</p></div><div className="advisors-grid">{advisors.map((leader) => <LeaderCard key={leader.name} leader={leader} />)}</div></section>

      <section className="patrons section"><div className="shell"><div className="patrons-heading"><div className="section-kicker"><span>04</span><div /> Our patrons</div><p>Grounded in the wisdom, care, and encouragement of those who stand with Gracepath.</p></div><PatronFeature /></div></section>

      <section className="mission-band"><div className="shell mission-grid"><div><p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> What guides us</p><h2>Compassion in action.<br /><em>Progress with purpose.</em></h2></div><div className="mission-points"><div><span>Vision</span><p>An inclusive, and self-reliant society where every individual lives with dignity, health, and purpose.</p></div><div><span>Mission</span><p>To uplift marginalized communities through holistic programs in education, health, livelihood, and environment - built on compassion and sustainable impact.</p></div></div></div></section>

      <footer className="footer" id="contact"><div className="shell footer-top"><div className="footer-brand"><Link className="brand brand--footer" href="/"><span className="logo-crop logo-crop--footer"><Image src="/gracepath/logo-transparent.png" alt="Gracepath Development Foundation" fill sizes="240px" /></span></Link><p>Empowering Lives,<br />Enriching Communities.</p></div><div className="footer-contact"><p className="footer-label">Visit us</p><address>10/30, Kunnathetthu Building,<br />Chennad, Kottayam,<br />Kerala - 686581</address><a href="tel:+919979411579">+91 99794 11579</a><a href="mailto:gracepathdevelopmentfoundation@gmail.com">gracepathdevelopmentfoundation@gmail.com</a></div><div className="footer-nav"><p className="footer-label">Explore</p><Link href="/about">About us</Link><Link href="/#programs">What we do</Link><Link href="/#approach">Our approach</Link><Link href="/#contact">Contact us</Link><a href="https://www.instagram.com/gracepath_foundation?stkn=MXhyMDloY2dzMmVodw==" target="_blank" rel="noreferrer">Instagram</a></div></div><div className="shell footer-bottom"><span>Copyright {new Date().getFullYear()} Gracepath Development Foundation</span><span>Made with care in Kerala</span></div></footer>
    </main>
  );
}
