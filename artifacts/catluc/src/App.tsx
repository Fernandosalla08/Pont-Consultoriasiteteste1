import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiTrendingUp,
  FiTarget,
  FiLayers,
  FiSettings,
  FiCpu,
  FiEye,
  FiArrowRight,
  FiCheckCircle,
  FiZap,
  FiCrosshair,
  FiMaximize,
  FiRepeat,
  FiMail,
  FiMenu,
  FiX,
  FiMapPin,
  FiBarChart2,
  FiActivity,
  FiRotateCcw,
  FiSliders,
  FiFlag,
  FiSun,
  FiTruck,
  FiPackage,
} from "react-icons/fi";
import { LanguageProvider, useLanguage, flags } from "./LanguageContext";

const base = import.meta.env.BASE_URL;
const pontLogo = `${base}pont-logo-v2.png`;

/* ── helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={visible ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Language Switcher ── */
function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-3">
      {flags.map((f) => (
        <button
          key={f.lang}
          onClick={() => setLang(f.lang)}
          title={f.label}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-bold uppercase tracking-wider transition-all ${
            lang === f.lang
              ? "bg-[#2A3E7C]/30 text-white border border-[#2A3E7C]/60"
              : "text-white/40 hover:text-white/70 border border-transparent"
          }`}
        >
          <img src={f.flagUrl} alt={f.label} className="w-6 h-auto rounded-sm" />
          <span>{f.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ── Navbar ── */
function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = [
    { label: t.nav.services, id: "serviços" },
    { label: t.nav.stpLean, id: "stp-&-lean" },
    { label: t.nav.toc, id: "toc" },
    { label: t.nav.industries, id: "indústrias" },
    { label: t.nav.contact, id: "contato" },
  ];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <img src={pontLogo} alt="Pont Consultoria" className="h-12 w-auto" />
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wider font-medium"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contato")}
            className="text-sm bg-[#2A3E7C] hover:bg-[#2A3E7C] text-white font-bold px-5 py-2 transition-colors uppercase tracking-wider"
          >
            {t.nav.talkToUs}
          </button>
          <LanguageSwitcher />
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button className="text-white" onClick={() => setOpen(!open)}>
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left text-white/70 hover:text-white uppercase tracking-wider text-sm font-medium"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ── Hero ── */
function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#2A3E7C] text-sm font-bold tracking-[0.25em] uppercase mb-6"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.88] tracking-tighter text-white mb-10"
        >
          {t.hero.h1[0]}{" "}
          <br className="hidden md:block" />
          {t.hero.h1[1]}{" "}
          <br className="hidden md:block" />
          <em className="not-italic text-[#2A3E7C]">{t.hero.h1Accent}</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-14"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-16 mb-14"
        >
          {t.hero.metrics.map((m) => (
            <div key={m.label} className="border-l-2 border-[#2A3E7C] pl-4">
              <div className="text-3xl font-black text-white">{m.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Services ── */
const serviceIcons = [FiTrendingUp, FiTarget, FiLayers];

function Services() {
  const { t } = useLanguage();
  return (
    <section id="serviços" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            {t.services.tag}
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            {t.services.title} <em className="not-italic text-[#2A3E7C]">{t.services.titleAccent}</em>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-2xl mb-16">
            {t.services.subtitle}
          </motion.p>
        </Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Section key={i}>
                <motion.div
                  variants={fadeUp}
                  custom={i}
                  className="bg-transparent p-8 hover:bg-[#0f0f0f] transition-colors group h-full"
                >
                  <div className="w-12 h-12 border border-[#2A3E7C]/40 flex items-center justify-center mb-6 group-hover:border-[#2A3E7C] group-hover:bg-[#2A3E7C]/10 transition-all">
                    <Icon className="text-[#2A3E7C]" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-lg uppercase tracking-tight mb-3">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/40 border border-white/10 px-2 py-0.5">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </Section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── VSM ── */
const vsmIcons = [FiMapPin, FiBarChart2, FiZap, FiActivity, FiSliders, FiFlag];

function VSM() {
  const { t } = useLanguage();
  return (
    <section id="stp-&-lean" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            {t.vsm.tag}
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            {t.vsm.title} <em className="not-italic text-[#2A3E7C]">{t.vsm.titleAccent}</em>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-3xl mb-6 leading-relaxed">
            {t.vsm.p1}
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-white/50 text-base max-w-3xl mb-10 leading-relaxed">
            {t.vsm.p2}
          </motion.p>
        </Section>

        <Section>
          <motion.div variants={fadeUp} className="bg-[#2A3E7C]/10 border-l-4 border-[#2A3E7C] p-6 mb-10 max-w-xl">
            <div className="text-white/60 text-sm uppercase tracking-widest mb-1">{t.vsm.diagnosisLabel}</div>
            <ul className="space-y-2 mt-3">
              {t.vsm.diagnosisItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                  <FiCheckCircle className="text-[#2A3E7C] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 mb-16">
          {t.vsm.cards.map((c, i) => {
            const Icon = vsmIcons[i];
            return (
              <Section key={i}>
                <motion.div variants={fadeUp} custom={i} className="bg-transparent p-8 hover:bg-transparent transition-colors h-full">
                  <Icon className="text-[#2A3E7C] mb-4" size={22} />
                  <h3 className="text-white font-bold uppercase tracking-tight mb-3">{c.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              </Section>
            );
          })}
        </div>

        <Section>
          <motion.div variants={fadeUp} className="text-center">
            <div className="text-5xl md:text-7xl font-black text-[#2A3E7C]">40–70%</div>
            <div className="text-white/50 text-sm uppercase tracking-widest mt-2">{t.vsm.statLabel}</div>
          </motion.div>
        </Section>
      </div>
    </section>
  );
}

/* ── Automation Philosophy ── */
const automationIcons = [FiMapPin, FiTarget, FiCpu];

function AutomationPhilosophy() {
  const { t } = useLanguage();
  return (
    <section className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            {t.automation.tag}
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-12">
            {t.automation.title1}{" "}
            <em className="not-italic text-[#2A3E7C]">{t.automation.title1Accent}</em>
            <br />
            {t.automation.title2}{" "}
            <em className="not-italic text-[#2A3E7C]">{t.automation.title2Accent}</em>
          </motion.h2>
        </Section>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 mb-16">
          {t.automation.steps.map((s, i) => {
            const Icon = automationIcons[i];
            return (
              <Section key={i}>
                <motion.div variants={fadeUp} custom={i} className="bg-transparent p-10 relative h-full">
                  <div className="text-[#2A3E7C]/40 text-6xl font-black absolute top-6 right-6 leading-none select-none">{i + 1}</div>
                  <Icon className="text-[#2A3E7C] mb-6" size={32} />
                  <h3 className="text-white font-bold text-2xl uppercase tracking-tight mb-4">{s.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{s.desc}</p>
                  {i < t.automation.steps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#2A3E7C]">
                      <FiArrowRight size={24} />
                    </div>
                  )}
                </motion.div>
              </Section>
            );
          })}
        </div>

        <Section>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-3xl leading-relaxed border-l-4 border-[#2A3E7C] pl-6">
            {t.automation.quote}{" "}
            <strong className="text-white">{t.automation.quoteBold}</strong>
          </motion.p>
        </Section>
      </div>
    </section>
  );
}

/* ── TOC ── */
const tocIcons = [FiCrosshair, FiMaximize, FiLayers, FiZap, FiRepeat];
const throughputData = [
  { pct: 85, warn: false },
  { pct: 72, warn: false },
  { pct: 31, warn: true },
  { pct: 68, warn: false },
  { pct: 79, warn: false },
  { pct: 90, warn: false },
];

function TOC() {
  const { t } = useLanguage();
  return (
    <section id="toc" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            {t.toc.tag}
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-16">
            {t.toc.title} <em className="not-italic text-[#2A3E7C]">{t.toc.titleAccent}</em>
          </motion.h2>
        </Section>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-0 divide-y divide-white/5">
            {t.toc.steps.map((s, i) => {
              const Icon = tocIcons[i];
              return (
                <Section key={i}>
                  <motion.div variants={fadeUp} custom={i} className="flex gap-5 py-7 group hover:bg-white/2 transition-colors px-2">
                    <div className="shrink-0 w-10 h-10 border border-[#2A3E7C]/30 group-hover:border-[#2A3E7C] group-hover:bg-[#2A3E7C]/10 flex items-center justify-center transition-all">
                      <Icon className="text-[#2A3E7C]" size={16} />
                    </div>
                    <div>
                      <div className="text-[#2A3E7C] text-xs font-bold tracking-widest mb-1">0{i + 1}</div>
                      <h3 className="text-white font-bold uppercase tracking-tight mb-2">{s.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                </Section>
              );
            })}
          </div>

          <Section>
            <motion.div variants={fadeUp} className="border border-white/10 p-8 h-fit sticky top-24">
              <div className="text-white/40 text-xs uppercase tracking-widest mb-1">{t.toc.chartTitle}</div>
              <div className="text-white font-black text-xl uppercase mb-6">
                {t.toc.chartSubtitle} <span className="text-[#2A3E7C]">{t.toc.chartSubtitleAccent}</span>
              </div>
              <div className="space-y-4">
                {throughputData.map((s, i) => {
                  const label = t.toc.throughputLabels[i];
                  return (
                    <div key={label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className={`font-medium uppercase tracking-wider ${s.warn ? "text-red-400" : "text-white/60"}`}>
                          {s.warn && "⚠ "}{label}
                        </span>
                        <span className={s.warn ? "text-red-400 font-bold" : "text-white/40"}>{s.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 overflow-hidden">
                        <div
                          className={`h-full transition-all ${s.warn ? "bg-red-500" : "bg-[#2A3E7C]/60"}`}
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-white/50 leading-relaxed">
                <strong className="text-white">{t.toc.bottleneckBold}</strong> {t.toc.bottleneck}
              </div>
            </motion.div>
          </Section>
        </div>
      </div>
    </section>
  );
}

/* ── Financial Compass ── */
function FinancialCompass() {
  const { t } = useLanguage();
  const fc = t.financialCompass;
  const subtitleParts = fc.subtitle.split(/\{bold1\}|\{bold2\}/);
  return (
    <section className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            {fc.tag}
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            {fc.titleFull.split(/BÚSSOLA|COMPASS|BRÚJULA|KOMPASS/).length > 1 ? (
              <>
                {fc.titleFull.split(/(BÚSSOLA|COMPASS|BRÚJULA|KOMPASS|FINANCEIRA|FINANCIAL|FINANCIERO|FINANZIELLE[NR]?|FINANCIERO|DER FINANZIELLE KOMPASS|THE FINANCIAL COMPASS|LA BRÚJULA FINANCIERA|A BÚSSOLA FINANCEIRA)/i)[0]}
                <em className="not-italic text-[#2A3E7C]">{fc.titleFull.match(/(BÚSSOLA|COMPASS|BRÚJULA|KOMPASS)/i)?.[0]}</em>
                {fc.titleFull.split(/(BÚSSOLA|COMPASS|BRÚJULA|KOMPASS)/i)[2]}
              </>
            ) : fc.titleFull}
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-2xl mb-12 leading-relaxed">
            {subtitleParts[0]}
            <strong className="text-white">{fc.bold1}</strong>
            {subtitleParts[1]}
            <strong className="text-white">{fc.bold2}</strong>
            {subtitleParts[2]}
          </motion.p>
        </Section>

        <Section>
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center gap-0 mb-16 overflow-x-auto">
            {fc.flow.map((label, i) => (
              <React.Fragment key={label}>
                <div className={`shrink-0 px-6 py-4 border font-bold text-sm uppercase tracking-wider whitespace-nowrap ${i === 1 ? "border-[#2A3E7C] bg-[#2A3E7C]/10 text-[#2A3E7C]" : "border-white/20 bg-white/5 text-white"}`}>
                  {label}
                </div>
                {i < fc.flow.length - 1 && (
                  <FiArrowRight className="text-[#2A3E7C] shrink-0 rotate-90 md:rotate-0 my-1 md:my-0 mx-0 md:mx-1" size={16} />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </Section>

        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {fc.cards.map((c, i) => (
            <Section key={i}>
              <motion.div variants={fadeUp} custom={i} className="bg-transparent p-8 h-full hover:bg-transparent transition-colors">
                <div className="w-2 h-2 bg-[#2A3E7C] rounded-full mb-5" />
                <h3 className="text-white font-bold uppercase tracking-tight mb-3">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Industries ── */
const industryIcons = [FiSettings, FiActivity, FiTarget, FiCpu, FiLayers, FiZap, FiSun, FiTruck, FiPackage];

function Industries() {
  const { t } = useLanguage();
  return (
    <section id="indústrias" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            {t.industries.tag}
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            {t.industries.title} <em className="not-italic text-[#2A3E7C]">{t.industries.titleAccent}</em>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-2xl mb-16">
            {t.industries.subtitle}
          </motion.p>
        </Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {t.industries.items.map((ind, i) => {
            const Icon = industryIcons[i];
            return (
              <Section key={i}>
                <motion.div variants={fadeUp} custom={i} className="bg-transparent p-8 hover:bg-transparent transition-colors group h-full">
                  <Icon className="text-[#2A3E7C] mb-5" size={22} />
                  <h3 className="text-white font-bold uppercase tracking-tight mb-3 group-hover:text-[#2A3E7C] transition-colors">{ind.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{ind.desc}</p>
                </motion.div>
              </Section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Why Choose ── */
function WhyChoose() {
  const { t } = useLanguage();
  return (
    <section className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            {t.whyChoose.tag}
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-16">
            {t.whyChoose.title} <em className="not-italic text-[#2A3E7C]">{t.whyChoose.titleAccent}</em>
          </motion.h2>
        </Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {t.whyChoose.items.map((d, i) => (
            <Section key={i}>
              <motion.div variants={fadeUp} custom={i} className={`bg-transparent p-8 hover:bg-transparent transition-colors h-full ${i === t.whyChoose.items.length - 1 && t.whyChoose.items.length % 3 !== 0 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="text-[#2A3E7C] font-black text-4xl mb-5 opacity-90">{i + 1}</div>
                <h3 className="text-white font-bold uppercase tracking-tight mb-3">{d.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            </Section>
          ))}
        </div>

        <Section>
          <motion.blockquote variants={fadeUp} className="mt-20 border-l-4 border-[#2A3E7C] pl-8 max-w-3xl">
            <p className="text-2xl md:text-3xl text-white font-bold italic leading-snug mb-4">
              {t.whyChoose.quote}
            </p>
            <cite className="text-white/40 text-sm uppercase tracking-widest not-italic">{t.whyChoose.quoteAuthor}</cite>
          </motion.blockquote>
        </Section>
      </div>
    </section>
  );
}

/* ── Contact ── */
function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  const { fields } = t.contact;
  return (
    <section id="contato" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <Section>
            <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
              {t.contact.tag}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              {t.contact.title} <em className="not-italic text-[#2A3E7C]">{t.contact.titleAccent}</em>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg mb-10 leading-relaxed">
              {t.contact.subtitle}
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-4">
              <FiMail className="text-[#2A3E7C]" size={20} />
              <a href="mailto:contato@pontgroup.net" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                contato@pontgroup.net
              </a>
            </motion.div>
          </Section>

          <Section>
            <motion.div variants={fadeUp} className="border border-white/10 p-8">
              {sent ? (
                <div className="text-center py-10">
                  <FiCheckCircle className="text-[#2A3E7C] mx-auto mb-4" size={40} />
                  <h3 className="text-white font-bold text-xl uppercase mb-2">{t.contact.successTitle}</h3>
                  <p className="text-white/50 text-sm">{t.contact.successSubtitle}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: "nome", field: fields.name, type: "text" },
                    { id: "email", field: fields.email, type: "email" },
                    { id: "empresa", field: fields.company, type: "text" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">{f.field.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.field.placeholder}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#2A3E7C] text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors"
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">{fields.message.label}</label>
                    <textarea
                      rows={4}
                      placeholder={fields.message.placeholder}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#2A3E7C] text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#2A3E7C] hover:bg-[#2A3E7C] text-black font-bold py-4 text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    {t.contact.button} <FiArrowRight />
                  </button>
                </form>
              )}
            </motion.div>
          </Section>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-transparent border-t border-white/5">
      <div className="border-b border-white/5 py-16">
        <div className="flex flex-col items-center gap-5">
          <p className="text-white font-bold text-sm uppercase tracking-widest text-center leading-relaxed">
            {t.footer.solutionsTitle.split("\n").map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </p>
          <div className="relative w-full max-w-7xl mt-4">
            <img
              src={`${import.meta.env.BASE_URL}pont-automacao-infografico-v4.png`}
              alt="Infográfico Pont Automação"
              className="w-full rounded-lg opacity-90 transition-opacity duration-300"
            />
            <a
              href="https://www.pontautomacao.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute flex flex-col items-center gap-2 px-4 py-3 border border-white/30 rounded-xl bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 group"
              style={{ top: "38%", left: "1%", width: "22%" }}
            >
              <span className="text-white font-semibold text-xs text-center leading-relaxed">{t.footer.ctaText}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white shrink-0">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="https://www.pontconsultoria.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={pontLogo} alt="Pont Consultoria" className="h-64 w-auto mix-blend-screen" style={{ filter: "contrast(1.8) brightness(1.4)" }} />
          </a>
          <p className="text-white/30 text-xs text-center">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            {t.footer.links.map((l, i) => (
              <button
                key={l}
                onClick={() => document.getElementById(i === 0 ? "serviços" : "contato")?.scrollIntoView({ behavior: "smooth" })}
                className="text-xs text-white/30 hover:text-white/60 uppercase tracking-wider transition-colors"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── App ── */
export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-transparent text-white min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <VSM />
        <TOC />
        <FinancialCompass />
        <AutomationPhilosophy />
        <Industries />
        <WhyChoose />
        <Footer />
        <Contact />
      </div>
    </LanguageProvider>
  );
}
