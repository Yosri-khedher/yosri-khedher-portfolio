import Link from "next/link";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { QrShare } from "@/components/QrShare";
import { SaveContact } from "@/components/SaveContact";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile, skillGroups } from "@/data/profile";
import { projects } from "@/data/projects";
import { certifications, experiences, leadership } from "@/data/timeline";

const nav = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]] as const;

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export default function Home() {
  const personSchema = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Software Engineering Student", email: profile.email, telephone: profile.phone, url: profile.linkedin, address: { "@type": "PostalAddress", addressCountry: "TN" }, sameAs: [profile.linkedin] };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Yosri Khedher home"><span>YK</span><i>YOSRI KHEDHER</i></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <ThemeToggle />
    </header>

    <section id="home" className="hero shell">
      <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
      <Reveal className="hero-content">
        <div className="availability"><span/> OPEN TO NEW OPPORTUNITIES</div>
        <p className="hero-overline">HELLO, I&apos;M</p>
        <h1>Yosri<br/><em>Khedher.</em></h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-bio">{profile.shortBio}</p>
        <div className="hero-pill">{profile.indicator}</div>
        <div className="hero-actions">
          <a className="button button-primary" href={profile.cvPath} target="_blank" rel="noreferrer"><Download /> View My CV</a>
          <SaveContact />
          <a className="button button-secondary" href="#projects">View My Projects <ArrowUpRight /></a>
          <a className="button button-plain" href="#contact">Contact Me</a>
        </div>
        <div className="social-row" aria-label="Social links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <span className="social-disabled" aria-label="GitHub link coming soon" title="GitHub link coming soon"><Github /></span>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </Reveal>
      <aside className="hero-card" aria-label="Profile summary"><span className="card-kicker">// PORTFOLIO 2026</span><div className="monogram">YK</div><p>Engineering ideas into thoughtful, secure digital experiences.</p><div className="hero-card-line"><span>BASED IN</span><b>Tunisia</b></div></aside>
    </section>

    <section id="about" className="section shell about-grid">
      <Reveal><SectionTitle eyebrow="01 / ABOUT" title="Curiosity is where every good system starts."/><p className="lead-copy">{profile.about}</p></Reveal>
      <Reveal className="about-note"><span className="note-symbol">✦</span><p>{profile.goal}</p><div className="mini-facts"><span>SOFTWARE</span><span>SECURITY</span><span>INTELLIGENCE</span></div></Reveal>
    </section>

    <section id="skills" className="section shell">
      <Reveal><SectionTitle eyebrow="02 / EXPERTISE" title="Skills built through study, projects and practice." copy="A multidisciplinary foundation for software, systems and intelligent technologies."/></Reveal>
      <div className="skills-grid">{skillGroups.map((group, index) => <Reveal key={group.title} className="skill-card"><span className="number">0{index + 1}</span><h3>{group.title}</h3><div className="tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></Reveal>)}</div>
    </section>

    <section id="projects" className="section shell projects-section">
      <Reveal><SectionTitle eyebrow="03 / SELECTED WORK" title="Featured projects." copy="Exploring the meeting point of code, data, security and connected systems."/></Reveal>
      <div className="project-grid">{projects.map((project) => <Reveal key={project.title} className="project-card"><div className="project-head"><span>{project.accent}</span><span className="project-mark">↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>{project.url ? <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View Project <ArrowUpRight /></a> : <span className="project-link disabled" title="Project link will be added soon">View Project <ArrowUpRight /></span>}</Reveal>)}</div>
      <p className="project-disclaimer">Project links will be added as repositories and demos are published.</p>
    </section>

    <section id="experience" className="section shell split-section">
      <Reveal><SectionTitle eyebrow="04 / EXPERIENCE" title="Learning in real-world contexts."/></Reveal>
      <div className="timeline">{experiences.map((item) => <Reveal key={item.organization} className="timeline-item"><div className="timeline-dot"/><p className="timeline-date">{item.period}</p><h3>{item.organization}</h3><strong>{item.role}</strong>{item.detail && <p>{item.detail}</p>}</Reveal>)}</div>
    </section>

    <section id="leadership" className="section shell split-section leadership-section">
      <Reveal><SectionTitle eyebrow="05 / LEADERSHIP" title="Leading with initiative."/></Reveal>
      <div className="leadership-list">{leadership.map((item, index) => <Reveal key={item.organization} className="leadership-item"><span>0{index + 1}</span><div><h3>{item.organization}</h3><p>{item.role}</p>{item.detail && <small>{item.detail}</small>}</div></Reveal>)}</div>
    </section>

    <section id="certifications" className="section shell certification-section">
      <Reveal><SectionTitle eyebrow="06 / LEARNING" title="Certifications & training."/></Reveal>
      <Reveal className="certification-list">{certifications.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</Reveal>
    </section>

    <section id="education" className="section shell education-grid">
      <Reveal><SectionTitle eyebrow="07 / EDUCATION" title="Academic foundation."/><div className="education-card"><span>2024–2027</span><h3>Licence in Software Engineering & Information Systems</h3><p>Faculty of Sciences of Gabès — University of Gabès</p><small>Third year in 2026–2027</small></div></Reveal>
      <Reveal className="education-side"><div className="education-card"><span>2024</span><h3>Mathematics Baccalaureate</h3><p>Honours: Assez Bien</p></div><div className="international"><span className="eyebrow">INTERNATIONAL EXPERIENCE</span><p>Selected among the top 10 candidates for an exchange programme with Università degli Studi di Roma Tor Vergata, Italy.</p><p>International workshops and intercultural initiatives · HISA Youth Fellowship 2025 application, Oxford / United Kingdom.</p></div></Reveal>
    </section>

    <section id="languages" className="section shell languages-section"><Reveal><SectionTitle eyebrow="08 / LANGUAGES" title="Comfortable across cultures."/><div className="language-grid">{profile.languages.map(([language, level]) => <div key={language}><span>{language}</span><b>{level}</b></div>)}</div></Reveal></section>

    <section id="contact" className="section shell contact-section">
      <Reveal className="contact-panel"><span className="eyebrow">09 / LET&apos;S CONNECT</span><h2>Let&apos;s build<br/><em>what&apos;s next.</em></h2><p>Whether it&apos;s a project, an opportunity or simply a conversation about technology, I&apos;d be glad to hear from you.</p><div className="contact-actions"><SaveContact/><a className="button button-secondary" href={profile.cvPath} download><Download/> Download My CV</a><QrShare/></div></Reveal>
      <Reveal className="contact-details"><a href={`tel:${profile.phoneUri}`}><Phone/><span><small>PHONE</small>{profile.phone}</span></a><a href={`mailto:${profile.email}`}><Mail/><span><small>EMAIL</small>{profile.email}</span></a><a href={`mailto:${profile.universityEmail}`}><Mail/><span><small>UNIVERSITY EMAIL</small>{profile.universityEmail}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span><small>LINKEDIN</small>Connect with me <ArrowUpRight/></span></a></Reveal>
    </section>
    <footer className="shell footer"><a className="brand" href="#home"><span>YK</span><i>YOSRI KHEDHER</i></a><p>© {new Date().getFullYear()} Yosri Khedher. Built for the next connection.</p></footer>
    <nav className="mobile-nav" aria-label="Mobile navigation">{[["Home", "#home"], ["About", "#about"], ["Projects", "#projects"], ["Contact", "#contact"]].map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
  </main>;
}
