import { useState } from 'react'
import './App.css'

const services = [
  {
    icon: 'chart',
    title: 'Data analytics & business analytics',
    description:
      'Analytical thinking, data preparation, statistics, and business insights.',
  },
  {
    icon: 'screen',
    title: 'Excel, Power BI & reporting',
    description:
      'Advanced Excel, dashboards, KPI reporting, and business visualisation.',
  },
  {
    icon: 'code',
    title: 'Python & applied programming',
    description:
      'Python fundamentals, data handling, automation, and project implementation.',
  },
  {
    icon: 'sigma',
    title: 'Statistics & analytical foundations',
    description:
      'Sampling, hypothesis testing, regression, and practical business interpretation.',
  },
  {
    icon: 'chip',
    title: 'Generative AI & applied AI learning',
    description:
      'GenAI concepts, LLM workflows, prompt design, and responsible use of AI.',
  },
  {
    icon: 'layers',
    title: 'Digital projects & founder support',
    description:
      'Project scoping for websites, student projects, prototypes, and digital solutions.',
  },
]

const journey = [
  {
    icon: 'search',
    number: '01',
    title: 'Discover',
    description: 'Understand your current level, goals, timeline, or business problem.',
  },
  {
    icon: 'calendar',
    number: '02',
    title: 'Design',
    description: 'Create a structured roadmap with topics, tools, milestones, and outcomes.',
  },
  {
    icon: 'code',
    number: '03',
    title: 'Learn & build',
    description: 'Teach concepts through examples, guided practice, and hands-on work.',
  },
  {
    icon: 'chart',
    number: '04',
    title: 'Review & improve',
    description: 'Assess progress, review deliverables, and refine the work.',
  },
  {
    icon: 'rocket',
    number: '05',
    title: 'Apply with confidence',
    description: 'Connect learning to work, study, portfolios, or business use.',
  },
]

const regions = [
  { name: 'North America', countries: 'United States · Canada' },
  { name: 'Europe', countries: 'United Kingdom · France · Germany · Norway · Ireland' },
  { name: 'Middle East', countries: 'Saudi Arabia · UAE · Qatar · Israel' },
  { name: 'Asia', countries: 'Malaysia · Singapore' },
  { name: 'Africa', countries: 'Mauritius' },
  { name: 'Oceania', countries: 'Australia · New Zealand' },
]

const learningValues = [
  {
    icon: 'spark',
    title: 'Clear, practical teaching',
    description:
      'Complex ideas are broken into understandable steps and connected to real use cases.',
  },
  {
    icon: 'chart',
    title: 'Progress you can apply',
    description:
      'Sessions focus on useful skills, guided practice, and meaningful next steps.',
  },
  {
    icon: 'target',
    title: 'Support that fits your goal',
    description:
      'Learning plans and project guidance adapt to your level, timeline, and needs.',
  },
]

const faqs = [
  {
    question: 'Who can work with you?',
    answer:
      'School and university students, graduates, working professionals, founders, creators, and small-business teams can enquire about learning or digital project support.',
  },
  {
    question: 'Do you offer one-to-one and group classes?',
    answer:
      'Yes. Support can include personal tutoring, group classes, workshops, and structured upskilling. The format is agreed around the learner, topic, and goals.',
  },
  {
    question: 'Can you help with real projects and portfolio building?',
    answer:
      'Project guidance can cover clarifying requirements, discussing technical direction, guided implementation, and reviewing work. Any scope is discussed before starting.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'The supplied brief names learners and client locations across 16 countries, as well as locations in India. It is a list of named locations, not an independently audited client count.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Send an enquiry with your goal and timeline. The first step is to understand what you need, then agree on a suitable learning roadmap or project scope.',
  },
]

function Icon({ name }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M7.5 3v4M16.5 3v4M3.5 10h17M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V4M4 20h17" />
        <path d="m7 15 4-4 3 2 6-7" />
      </>
    ),
    chip: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 10h6v4H9zM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" />
      </>
    ),
    code: (
      <>
        <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 3.5 4.8" />
      </>
    ),
    rocket: (
      <>
        <path d="M14 5c2-2 5-2 6-2 0 1 0 4-2 6l-5 5-4-4 5-5Z" />
        <path d="m9 10-4 1-2 4 6-1m5 1-1 5 4-2 1-4M7 17l-3 3" />
        <circle cx="16" cy="7" r="1" />
      </>
    ),
    screen: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8m-4-4v4M7 8h10M7 11h6" />
      </>
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5M8 11l2 2 4-4" />
      </>
    ),
    sigma: <path d="M18 5H7l6 7-6 7h11" />,
    spark: (
      <>
        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
        <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
        <path d="m13 11 7-7m-4 0h4v4" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  )
}

function Brand() {
  return (
    <a className="brand" href="#home">
      <span className="brand-mark">DS</span>
      <span className="brand-name">
        <strong>DISHA SONKAR</strong>
        <small>Global Learning &amp; AI Solutions</small>
      </span>
    </a>
  )
}

function WorldMap() {
  return (
    <div aria-label="Illustrated world map with international connections" className="world-map" role="img">
      <svg className="map-lines" fill="none" viewBox="0 0 720 410">
        <defs>
          <pattern height="7" id="map-dots" patternUnits="userSpaceOnUse" width="7">
            <circle cx="1.7" cy="1.7" fill="currentColor" r="1.35" />
          </pattern>
        </defs>
        <g className="continents" fill="url(#map-dots)">
          <path d="m68 83 21-23 42-11 20 9 10 19-9 11 18 11-2 21-16 8-8 17-18 7-13 30-17-2-8-23-18-10-6-25-15-16 5-16-9-7 11-20Zm82 122 22 4 20 20 9 32-13 36-19 18-11-18 1-29-14-26 5-37Zm46-122 17-18 28-4 22 11 25-2 24 12 13 23-8 14-26 1-17 16-23 1-14 16-25-4-8-21-19-9 2-17-15-10 4-19Zm66 79 25 8 15 19-4 21-19 12-15 32-12 25-15-7 2-24 13-21-3-19 12-17-8-17 9-12Zm88-115 30-16 35 5 24-9 44 14 29-8 46 16 45 4 29 24-7 18-30 6-13 16-28 4-15-17-22 8-25-6-18 11-20-8-10 17-14 2-17-18-17-1-12-15-18-2-13-15-25-3-11-13-26-1-4-11Zm44 81 20-8 24 12 7 24-10 31-20 21-15 32-13 6-9-23 8-23-5-25 10-22-9-25 12-10Zm95 91 17-14 27 3 15 17-10 19-21 7-20-10-8-22Zm147-72 24-8 24 8 13 17-17 13-20-5-16-25Z" />
        </g>
        <g className="map-routes">
          <path d="M135 143Q265 70 385 124T590 109M180 217Q310 128 430 197t151 65M385 124Q438 212 501 303M235 118Q362 265 523 168" />
        </g>
        <g className="map-points">
          <circle cx="135" cy="143" r="4" />
          <circle cx="235" cy="118" r="4" />
          <circle cx="385" cy="124" r="5" />
          <circle cx="430" cy="197" r="4" />
          <circle cx="523" cy="168" r="4" />
          <circle cx="590" cy="109" r="4" />
          <circle cx="501" cy="303" r="4" />
        </g>
      </svg>
      <span className="map-label label-canada">Canada</span>
      <span className="map-label label-us">United States</span>
      <span className="map-label label-uk">United Kingdom</span>
      <span className="map-label label-middle">Middle East</span>
      <span className="map-label label-asia">Asia</span>
      <span className="map-label label-india">India</span>
      <span className="map-label label-oceania">Oceania</span>
    </div>
  )
}

function ProjectPreview({ type }) {
  if (type === 'dashboard') {
    return (
      <div aria-hidden="true" className="project-preview dashboard-preview">
        <div className="preview-toolbar"><i /><i /><i /></div>
        <div className="dashboard-body">
          <div className="dashboard-sidebar" />
          <div className="dashboard-content">
            <span className="dashboard-title" />
            <div className="metric-row"><i /><i /><i /></div>
            <div className="dashboard-chart"><span /><span /><span /><span /><span /><span /><span /></div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'ai') {
    return (
      <div aria-hidden="true" className="project-preview ai-preview">
        <div className="ai-orb"><Icon name="spark" /></div>
        <span className="ai-line ai-line-one" />
        <span className="ai-line ai-line-two" />
        <span className="ai-line ai-line-three" />
        <span className="ai-prompt">Explore an idea...</span>
      </div>
    )
  }

  return (
    <div aria-hidden="true" className="project-preview web-preview">
      <div className="web-browser"><i /><i /><i /></div>
      <div className="web-page">
        <span className="web-page-title" />
        <span className="web-page-copy" />
        <span className="web-page-button" />
        <span className="web-page-image" />
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formMessage, setFormMessage] = useState('')
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!contactEmail) {
      setFormMessage(
        'This form is not connected yet. Add a contact email to enable enquiries.',
      )
      return
    }

    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Website enquiry: ${formData.get('topic')}`)
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`,
    )
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setFormMessage('Your email app is opening with your enquiry.')
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span />
            <span />
          </button>
          <nav aria-label="Main navigation" className={menuOpen ? 'nav-open' : ''}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#global" onClick={closeMenu}>Global reach</a>
            <a href="#feedback" onClick={closeMenu}>Testimonials</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a href="#contact-form" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact-form" onClick={closeMenu}>Book a call</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <span className="eyebrow"><i /> International mentorship · Analytics · Digital solutions</span>
            <h1>
              Build skills.
              <br />
              Create capability.
              <br />
              <span>Move forward.</span>
            </h1>
            <p className="hero-description">
              Practical, business-led learning and technology support for
              students, working professionals, and ambitious teams—delivered
              through an international client network.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                Explore services <Icon name="arrow" />
              </a>
              <a className="button button-outline" href="#contact">
                <Icon name="calendar" /> Book a discovery call
              </a>
            </div>
            <div className="hero-stats">
              <div><Icon name="people" /><strong>60+</strong><span>Learners &amp; clients<br />served to date</span></div>
              <div><Icon name="calendar" /><strong>3+</strong><span>Years of direct<br />client delivery</span></div>
              <div><Icon name="layers" /><strong>5</strong><span>Years working<br />across the field</span></div>
              <div><Icon name="globe" /><strong>Global</strong><span>Client reach across<br />multiple markets</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow" />
            <div className="hero-orbit orbit-a" />
            <div className="hero-orbit orbit-b" />
            <div className="hero-globe">
              <div className="globe-grid" />
              <div className="globe-land land-one" />
              <div className="globe-land land-two" />
              <div className="globe-land land-three" />
              <span className="globe-node node-one" />
              <span className="globe-node node-two" />
              <span className="globe-node node-three" />
            </div>
            <span className="globe-ring ring-one" />
            <span className="globe-ring ring-two" />
            <span className="globe-caption">LEARN WITHOUT BORDERS</span>
            <span className="globe-tag tag-one">Analytics</span>
            <span className="globe-tag tag-two">AI &amp; learning</span>
            <span className="globe-tag tag-three">Digital projects</span>
          </div>
        </section>

        <section className="about-section section-shell section-pad" id="about">
          <div className="about-visual">
            <span className="section-kicker">ABOUT DISHA</span>
            <div className="about-monogram">DS</div>
            <span className="about-orbit about-orbit-one" />
            <span className="about-orbit about-orbit-two" />
            <div className="about-visual-caption">
              <span className="caption-dot" />
              <span>International perspective<br /><strong>Practical execution</strong></span>
            </div>
            <span className="about-visual-side">LEARN · BUILD · GROW</span>
          </div>
          <div className="about-copy">
            <span className="section-kicker">ABOUT DISHA</span>
            <h2>A mentor with a<br />business-first point of view.</h2>
            <p>
              I&apos;m Disha Sonkar—an international mentor and technology-focused
              learning partner helping people turn complex concepts into
              practical, usable skills. My work connects analytics, programming,
              business problem-solving, and digital project execution.
            </p>
            <p>
              I work with learners at different stages, from school and
              university students building their first projects to working
              professionals strengthening their analytical and technical
              capabilities.
            </p>
            <div className="about-pill-row">
              <div><Icon name="target" /><span>International<br />perspective</span></div>
              <div><Icon name="code" /><span>Practical<br />execution</span></div>
              <div><Icon name="chart" /><span>Measurable<br />progress</span></div>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-shell">
            <div className="section-heading">
              <span className="section-kicker">WHAT I DO</span>
              <h2>Learning that connects<br />technology to business.</h2>
              <p>
                A structured service offering for individuals, professionals,
                founders, and organisations—from foundational upskilling to
                guided project delivery.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span className="service-icon"><Icon name={service.icon} /></span>
                  <div className="service-card-copy">
                    <span className="service-index">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-arrow"><Icon name="arrow" /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="journey-section section-pad" id="journey">
          <div className="section-shell">
            <div className="section-heading journey-heading">
              <span className="section-kicker">THE EXPERIENCE</span>
              <h2>A clear path from<br />learning to application.</h2>
              <p>Build confidence through practice—with the right level of structure for each learner, role, or project.</p>
            </div>
            <div className="journey-track">
              {journey.map((step) => (
                <article className="journey-card" key={step.number}>
                  <div className="journey-marker"><Icon name={step.icon} /></div>
                  <span className="journey-index">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="global-section section-pad" id="global">
          <div className="section-shell global-layout">
            <div className="global-copy">
              <span className="section-kicker">GLOBAL REACH</span>
              <h2>Connected across<br />markets and disciplines.</h2>
              <p>
                Learners and clients have engaged from international markets,
                alongside a strong domestic footprint in India.
              </p>
              <div className="global-metrics">
                <div><Icon name="globe" /><strong>16</strong><span>International<br />countries named</span></div>
                <div><Icon name="target" /><strong>India</strong><span>Multiple states<br />and locations</span></div>
              </div>
              <details className="country-list">
                <summary>View country list <Icon name="arrow" /></summary>
                <div className="region-list">
                  {regions.map((region) => (
                    <p key={region.name}><strong>{region.name}</strong><span>{region.countries}</span></p>
                  ))}
                </div>
              </details>
              <p className="global-disclaimer">Country list reflects locations named in the supplied brief, not an independently audited client count.</p>
            </div>
            <WorldMap />
          </div>
        </section>

        <section className="feedback-section section-pad" id="feedback">
          <div className="section-shell feedback-layout">
            <div className="feedback-copy">
              <span className="section-kicker">LEARNER EXPERIENCE</span>
              <h2>Learning that feels clear, useful, and yours.</h2>
              <p>
                Every engagement is shaped around a real goal. Here&apos;s what
                the approach is designed to bring to your learning or project.
              </p>
              <div className="feedback-cards">
                {learningValues.map((value) => (
                  <article className="feedback-card" key={value.title}>
                    <Icon name={value.icon} />
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                ))}
              </div>
              <p className="feedback-note">
                Client testimonials can be added here when approved for publication.
              </p>
            </div>
            <aside className="impact-panel">
              <span className="section-kicker">IMPACT AT A GLANCE</span>
              <div className="impact-grid">
                <div><Icon name="people" /><strong>60+</strong><span>Learners &amp; clients<br />served to date</span></div>
                <div><Icon name="layers" /><strong>3+</strong><span>Years of direct<br />client delivery</span></div>
                <div><Icon name="globe" /><strong>16</strong><span>International countries<br />named in the brief</span></div>
                <div><Icon name="calendar" /><strong>5</strong><span>Years working<br />across the field</span></div>
              </div>
              <div aria-hidden="true" className="impact-glow" />
            </aside>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects">
          <div className="section-shell projects-layout">
            <div className="projects-copy">
              <span className="section-kicker">WORK &amp; OUTCOMES</span>
              <h2>Ideas transformed<br />into practical outcomes.</h2>
              <p>
                Example areas of support—dashboards, AI learning, and websites.
                Specific case studies can be added with permission.
              </p>
              <div className="project-cards">
                <article className="project-card">
                  <ProjectPreview type="dashboard" />
                  <h3>Power BI dashboard</h3>
                  <p>Business performance &amp; KPI reporting</p>
                </article>
                <article className="project-card">
                  <ProjectPreview type="ai" />
                  <h3>AI project guidance</h3>
                  <p>GenAI concepts &amp; practical workflows</p>
                </article>
                <article className="project-card">
                  <ProjectPreview type="website" />
                  <h3>Business website</h3>
                  <p>Website design &amp; digital presence</p>
                </article>
              </div>
              <p className="project-disclaimer">Illustrative service areas; no client names or outcomes are implied.</p>
            </div>
            <aside className="contact-card" id="contact">
              <span className="section-kicker">LET&apos;S CONNECT</span>
              <h2>Let&apos;s turn your next goal into a practical learning or technology journey.</h2>
              <a className="button button-primary" href="#contact-form">
                <Icon name="calendar" /> Book a discovery call
              </a>
              <a className="button button-outline" href="#contact-form">
                Send an enquiry <Icon name="arrow" />
              </a>
            </aside>
          </div>
        </section>

        <section className="faq-contact-section section-pad" id="faq">
          <div className="section-shell faq-contact-layout">
            <div className="faq-column">
              <span className="section-kicker">FAQ</span>
              <h2>Frequently asked questions</h2>
              <p>Quick answers about learning, projects, and getting started.</p>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <details className="faq-item" key={faq.question} open={index === 0}>
                    <summary>
                      <span>{faq.question}</span>
                      <i aria-hidden="true" />
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="contact-column" id="contact-form">
              <span className="section-kicker">GET IN TOUCH</span>
              <h2>Let&apos;s turn your next goal into a practical journey.</h2>
              <p>Tell me whether you want to upskill, build a project, or explore a digital solution.</p>
              <a className="contact-method" href={contactEmail ? `mailto:${contactEmail}` : '#contact-form'}>
                <span className="contact-method-icon"><Icon name="calendar" /></span>
                <span>
                  <strong>{contactEmail ? 'Email Disha' : 'Start with an enquiry'}</strong>
                  <small>{contactEmail || 'Share your goals using the form.'}</small>
                </span>
              </a>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <label>
                    Your name
                    <input autoComplete="name" name="name" placeholder="Your name" required />
                  </label>
                  <label>
                    Email address
                    <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
                  </label>
                </div>
                <label>
                  What are you interested in?
                  <select defaultValue="" name="topic" required>
                    <option disabled value="">Choose a starting point</option>
                    <option>Tutoring or professional upskilling</option>
                    <option>Analytics, AI, or automation</option>
                    <option>Website or digital project</option>
                    <option>Research or project guidance</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label>
                  Tell me about your goal
                  <textarea name="message" placeholder="Share your goal, timeline, or question..." required rows="3" />
                </label>
                <button className="button button-primary form-submit" type="submit">
                  Send an enquiry <Icon name="arrow" />
                </button>
                <p aria-live="polite" className="form-status">
                  {formMessage || (!contactEmail ? 'Enquiry delivery needs a contact email before launch.' : '')}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <Brand />
          <p>International mentorship · Practical progress</p>
          <a href="#home">Back to top ↑</a>
          <span>© {new Date().getFullYear()} Disha Sonkar</span>
        </div>
      </footer>
    </>
  )
}

export default App
