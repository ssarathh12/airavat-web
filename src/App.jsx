import vinayImg from './assets/Vinay.webp';
import logoMark from './logoMark.js';
import IndiaMap from './IndiaMap.jsx';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Users, Target, Zap, FileText, ScanSearch, Compass, PieChart, Menu, X, MessageCircle, Lock } from 'lucide-react';
import { useState } from 'react';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#impact', label: 'Where We Work' },
  { href: '#contact', label: 'Contact' },
];

const CTA_LABEL = 'Book a confidential consultation';
const PRIMARY_BTN = 'inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-btn font-sans text-caption font-semibold hover:bg-brand-orange-dark transition-colors';
const SECONDARY_BTN = 'inline-flex items-center justify-center gap-2 border-2 border-brand-ink text-brand-ink px-6 py-3 rounded-btn font-sans text-caption font-semibold hover:bg-brand-ink hover:text-white transition-colors';

// Show content as soon as a little of it is on screen, and only animate once
const REVEAL = { once: true, amount: 0.1 };

const IMPACT = [
  { id: 'ka', name: 'Karnataka', year: 'Assembly election 2023' },
  { id: 'wb', name: 'West Bengal', year: 'Assembly election 2021' },
  { id: 'mh', name: 'Maharashtra', year: 'Assembly election 2024' },
  { id: 'tn', name: 'Tamil Nadu', year: 'Assembly election 2021' },
  { id: 'py', name: 'Puducherry', year: 'Assembly election 2021' },
  { id: 'dl', name: 'Delhi', year: 'Assembly election 2020' },
];

const STEPS = [
  { title: 'Diagnose', desc: 'Booth-level study of past results, demographics and local issues to see where the seat really stands.' },
  { title: 'Plan', desc: 'A constituency blueprint covering positioning, messaging, voter segments and a phase-wise outreach calendar.' },
  { title: 'Execute', desc: 'War-room support on the ground and online, from booth committees to daily content.' },
  { title: 'Monitor', desc: 'Daily media and sentiment tracking, with course corrections made early.' },
];

const CONTACT_EMAIL = 'contact@airavatstrategies.com';
// Web3Forms access key (free, from web3forms.com, sent to contact@airavatstrategies.com).
// While empty, the form opens the visitor's email app with the enquiry filled in.
const WEB3FORMS_KEY = '';
const FIELD = 'w-full rounded-btn border border-brand-ink/20 bg-white px-4 py-3 text-body text-brand-ink focus:outline-none focus:border-brand-orange';
const LABEL = 'block text-caption font-semibold mb-1';
const FORM_FIELDS = [
  ['Name', 'name'], ['Role', 'role'], ['Phone', 'phone'], ['Email', 'email'],
  ['State', 'state'], ['Constituency', 'constituency'], ['Message', 'message'],
];

function EnquiryForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('_honey')) return;
    const subject = `Website enquiry from ${data.get('name')}`;

    if (!WEB3FORMS_KEY) {
      const body = FORM_FIELDS.map(([label, key]) => `${label}: ${data.get(key) || '-'}`).join('\n');
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      data.delete('_honey');
      data.append('access_key', WEB3FORMS_KEY);
      data.append('subject', subject);
      data.append('from_name', 'airavatstrategies.com');
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { Accept: 'application/json' }, body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-white rounded-btn p-8 text-center">
        <p className="font-display text-card font-semibold mb-2">Thank you. We have your message.</p>
        <p className="text-brand-ink/70">We will get back to you within one working day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-btn p-6 sm:p-8 text-left grid sm:grid-cols-2 gap-5">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <label htmlFor="f-name" className={LABEL}>Name *</label>
        <input id="f-name" name="name" required className={FIELD} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="f-role" className={LABEL}>You are</label>
        <select id="f-role" name="role" className={FIELD} defaultValue="">
          <option value="" disabled>Select</option>
          <option>Candidate or aspirant</option>
          <option>Sitting MLA or MP</option>
          <option>Party office</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="f-phone" className={LABEL}>Phone *</label>
        <input id="f-phone" name="phone" type="tel" required className={FIELD} autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="f-email" className={LABEL}>Email</label>
        <input id="f-email" name="email" type="email" className={FIELD} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="f-state" className={LABEL}>State</label>
        <select id="f-state" name="state" className={FIELD} defaultValue="">
          <option value="" disabled>Select</option>
          <option>Karnataka</option>
          <option>Telangana</option>
          <option>Andhra Pradesh</option>
          <option>Goa</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="f-constituency" className={LABEL}>Constituency</label>
        <input id="f-constituency" name="constituency" className={FIELD} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-message" className={LABEL}>How can we help? *</label>
        <textarea id="f-message" name="message" required rows={4} className={FIELD} />
      </div>
      <label className="sm:col-span-2 flex items-start gap-3 text-caption text-brand-ink/70">
        <input type="checkbox" name="consent" value="Yes" required className="mt-1 accent-brand-orange" />
        <span>I agree to Airavat Strategies using these details to reply to me, as set out in the <a href="/privacy.html" className="underline hover:text-brand-orange">Privacy Policy</a>.</span>
      </label>
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
        <button type="submit" disabled={status === 'sending'} className={`${PRIMARY_BTN} disabled:opacity-60`}>
          {status === 'sending' ? 'Sending...' : 'Send enquiry'}
        </button>
        {status === 'mailto' && (
          <p className="text-caption text-brand-ink/70">Your email app should now open with your enquiry ready to send. If it did not, write to us at {CONTACT_EMAIL} or WhatsApp us.</p>
        )}
        {status === 'error' && (
          <p className="text-caption text-brand-orange-dark">Your message could not be sent. Please email or WhatsApp us instead.</p>
        )}
      </div>
    </form>
  );
}

function Logo({ dark = false }) {
  return (
    <span className="flex items-center gap-3">
      <span className={dark ? 'bg-white rounded-btn p-1.5' : ''}>
        <img src={logoMark} alt="" className={dark ? 'h-9 w-auto' : 'h-11 w-auto'} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold text-card ${dark ? 'text-white' : 'text-brand-ink'}`}>Airavat Strategies</span>
        <span className="font-display font-semibold text-[10px] tracking-wider text-brand-orange mt-1">Shaping Tomorrow's Leaders</span>
      </span>
    </span>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-brand-ink font-sans text-body">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-brand-grey">
        <div className="w-[95%] lg:w-[90%] mx-auto">
          <div className="flex justify-between items-center h-20">
            <a href="#" aria-label="Airavat Strategies, back to top" className="flex-shrink-0 hover:opacity-80 transition-opacity">
              <Logo />
            </a>

            <nav className="flex items-center gap-2 lg:gap-8">
              <div className="hidden lg:flex items-center gap-8">
                {NAV.map((n) => (
                  <a key={n.href} href={n.href} className="text-caption font-semibold text-brand-ink hover:text-brand-orange transition-colors">{n.label}</a>
                ))}
              </div>
              <a href="#contact" className={`hidden sm:inline-flex ${PRIMARY_BTN}`}>{CTA_LABEL}</a>
              <button
                className="lg:hidden p-2 text-brand-ink"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile menu: full panel with the CTA at the bottom */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full h-[calc(100dvh-80px)] overflow-y-auto bg-white border-t border-brand-grey flex flex-col justify-between px-6 py-8">
            <div className="flex flex-col gap-2">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="py-3 font-display text-card font-semibold text-brand-ink border-b border-brand-grey" onClick={() => setIsMenuOpen(false)}>{n.label}</a>
              ))}
            </div>
            <a href="#contact" className={PRIMARY_BTN} onClick={() => setIsMenuOpen(false)}>{CTA_LABEL}</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-14 bg-white">
        <div className="w-[92%] lg:w-[88%] mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <h1 className="text-section md:text-hero font-bold text-brand-ink mb-4">
              Shaping Tomorrow's Leaders
            </h1>
            <p className="text-body text-brand-ink/70 mb-8 max-w-[62ch] mx-auto">
              Airavat Strategies helps candidates, legislators and parties in Karnataka, Telangana, Andhra Pradesh and Goa plan campaigns and govern with evidence.
            </p>
            <a href="#contact" className={PRIMARY_BTN}>{CTA_LABEL}</a>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {[
                { icon: ScanSearch, title: 'Voter Analysis', desc: 'Deep constituency insights for strategic planning' },
                { icon: Compass, title: 'Campaign Strategy', desc: 'Comprehensive election management solutions' },
                { icon: PieChart, title: 'Data Visualization', desc: 'Clear insights from complex political data' },
              ].map((c) => (
                <div key={c.title} className="bg-brand-grey p-6 rounded-btn">
                  <c.icon className="w-10 h-10 text-brand-orange mb-3 mx-auto" />
                  <h3 className="text-card font-semibold mb-1">{c.title}</h3>
                  <p className="text-caption text-brand-ink/70">{c.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Founder */}
      <section id="about" className="py-16 bg-brand-grey">
        <div className="w-[92%] lg:w-[88%] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={REVEAL} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="max-w-[65ch]">
              <h2 className="text-section font-bold mb-5">Meet Our Founder</h2>
              <p className="mb-4">
                With over 6 years of experience in political consultancy, Vinay Krishna and the Airavat Strategies team have worked with major parties including BJP, INC, AAP, and Shiv Sena (UBT).
              </p>
              <p className="mb-4">
                His expertise lies in constituency analysis, war room strategy, and delivering data-driven solutions for high-profile leaders.
              </p>
              <p>
                At Airavat Strategies, we combine traditional political wisdom with cutting-edge technology to help you win the seats that matter.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-80 h-80">
                <img src={vinayImg} alt="Vinay Krishna Polnati, Founder of Airavat Strategies" className="w-full h-full object-cover object-[50%_20%] rounded-btn" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact: one map instead of five state images */}
      <section id="impact" className="py-16 bg-white">
        <div className="w-[92%] lg:w-[88%] mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={REVEAL} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-section font-bold mb-3">Our <span className="text-brand-orange">Impact</span></h2>
              <p className="text-brand-ink/70 mb-8 max-w-[60ch]">Assembly elections where our team has run campaign strategy and war rooms.</p>
              <ul className="divide-y divide-brand-grey border-y border-brand-grey">
                {IMPACT.map((s) => (
                  <li key={s.id} className="flex items-center justify-between py-3">
                    <span className="flex items-center gap-3 font-display text-card font-semibold">
                      <span className="w-3 h-3 rounded-sm bg-brand-orange" aria-hidden="true" />
                      {s.name}
                    </span>
                    <span className="text-caption text-brand-ink/70">{s.year}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 ${PRIMARY_BTN}`}>{CTA_LABEL}</a>
            </div>
            <div className="flex justify-center">
              <IndiaMap highlight={IMPACT.map((s) => s.id)} className="w-full max-w-md h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-brand-grey">
        <div className="w-[92%] lg:w-[88%] mx-auto">
          <h2 className="text-section font-bold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Target, title: 'Comprehensive Campaign Strategy', desc: 'Constituency blueprints covering positioning, messaging, voter segments and a phase-wise outreach plan.' },
              { icon: Users, title: 'Voter Segmentation & Micro-targeting', desc: 'Booth-level analysis of past Form 20 results and demographics to find where votes can be won.' },
              { icon: Zap, title: 'AI-Integrated Digital Outreach', desc: 'Content, monitoring and response for social and messaging channels, informed by daily sentiment tracking.' },
              { icon: FileText, title: 'Legislative & Parliamentary Support', desc: 'Question drafting, bill briefs, debate notes and daily media analysis for sitting MPs and MLAs.' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 rounded-btn"
              >
                <service.icon className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="text-card font-semibold mb-3">{service.title}</h3>
                <p className="text-brand-ink/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-brand-ink text-white">
        <div className="w-[92%] lg:w-[88%] mx-auto">
          <h2 className="text-section font-bold text-center text-white mb-10">How We Work</h2>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border border-white/15 rounded-btn p-6">
                <span className="font-display text-section font-bold text-brand-orange">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-card font-semibold text-white mt-2 mb-2">{s.title}</h3>
                <p className="text-white/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="w-[92%] lg:w-[88%] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-section font-bold">Get in Touch</h2>
            <p className="mt-2 text-brand-ink/70">Let's discuss how we can help shape your political success</p>
          </div>
          <div className="bg-brand-grey p-8 rounded-btn">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Mail className="w-10 h-10 text-brand-orange mb-2" />
                <h3 className="text-card font-semibold mb-1">Email Us</h3>
                <a href="mailto:contact@airavatstrategies.com" className="text-caption text-brand-ink hover:text-brand-orange underline-offset-2 hover:underline">contact@airavatstrategies.com</a>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-10 h-10 text-brand-orange mb-2" />
                <h3 className="text-card font-semibold mb-1">Call Us</h3>
                <a href="tel:+919652899946" className="text-caption text-brand-ink hover:text-brand-orange underline-offset-2 hover:underline">+91 9652899946</a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-10 h-10 text-brand-orange mb-2" />
                <h3 className="text-card font-semibold mb-1">Visit Us</h3>
                <p className="text-caption">Alt F Coworking Space, Begumpet</p>
                <p className="text-caption">Hyderabad, Telangana, India</p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="font-display text-card font-semibold mb-1">Ready to Transform Your Campaign?</p>
              <p className="text-brand-ink/70">Reach out to us today for a confidential consultation</p>
              <p className="inline-flex items-center gap-2 text-caption font-semibold mt-3">
                <Lock className="w-4 h-4 text-brand-orange" />
                All conversations are confidential. We do not disclose client names.
              </p>
              <div className="mt-8 max-w-3xl mx-auto">
                <EnquiryForm />
              </div>
              <p className="text-caption text-brand-ink/70 mt-8">Prefer to talk directly?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-3">
                <a
                  href="https://wa.me/919652899946?text=Hello%20Airavat%20Strategies%2C%20I%20would%20like%20to%20discuss%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={PRIMARY_BTN}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a href="mailto:contact@airavatstrategies.com?subject=Consultation%20request" className={SECONDARY_BTN}>
                  <Mail className="w-5 h-5" />
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ink text-white pt-12 pb-6">
        <div className="w-[92%] lg:w-[88%] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/15">
            <div>
              <Logo dark />
              <p className="text-caption text-white/70 mt-4 max-w-xs">Political strategy, constituency intelligence and legislative support.</p>
            </div>
            <div className="text-caption space-y-1">
              <p className="font-display font-semibold text-white mb-2">Office</p>
              <p className="text-white/70">Alt F Coworking Space, Begumpet</p>
              <p className="text-white/70">Hyderabad, Telangana, India</p>
            </div>
            <div className="text-caption space-y-1">
              <p className="font-display font-semibold text-white mb-2">Contact</p>
              <p><a href="mailto:contact@airavatstrategies.com" className="text-white/70 hover:text-brand-orange">contact@airavatstrategies.com</a></p>
              <p><a href="tel:+919652899946" className="text-white/70 hover:text-brand-orange">+91 9652899946</a></p>
              <p><a href="https://www.linkedin.com/company/107107584/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-orange">LinkedIn</a></p>
              <p><a href="/privacy.html" className="text-white/70 hover:text-brand-orange">Privacy Policy</a></p>
            </div>
          </div>
          <p className="text-caption text-white/60 pt-6 text-center">&copy; 2026 Airavat Strategies (OPC) Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
