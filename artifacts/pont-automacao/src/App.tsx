import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCpu, FiSettings, FiUsers, FiTrendingUp, FiCheckCircle,
  FiArrowRight, FiMail, FiPhone, FiLinkedin, FiMenu, FiX,
  FiZap, FiShield, FiTarget, FiStar, FiPackage, FiTool,
  FiBarChart2, FiClock, FiAward
} from "react-icons/fi";

const WINE = "#6B1035";
const WINE_LIGHT = "#8B1545";
const WINE_DIM = "rgba(107,16,53,0.15)";

function useCountUp(target: number, duration: number = 1800, active: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: any }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 1800, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: WINE_DIM, color: WINE_LIGHT }}>
        <Icon size={22} />
      </div>
      <div className="text-5xl font-black text-white mb-1">
        {count}<span style={{ color: WINE_LIGHT }}>{suffix}</span>
      </div>
      <div className="text-white/60 text-sm font-medium uppercase tracking-widest mt-2">{label}</div>
    </motion.div>
  );
}

const services = [
  {
    icon: FiCpu,
    title: "Automação de Projetos e Engenharia",
    desc: "Desenvolvimento de ferramentas que automatizam tarefas repetitivas seguindo suas diretrizes de projeto — eliminando erros humanos e reduzindo drasticamente o tempo de entrega.",
    bullets: ["Automação de detalhamento técnico", "Geração de modelos configuráveis", "Padronização de entregas"],
  },
  {
    icon: FiSettings,
    title: "Projetos Mecânicos Turnkey",
    desc: "Soluções completas, do projeto informacional ao detalhamento para fabricação e documentação técnica — sem fragmentação, sem retrabalho.",
    bullets: ["Projeto conceitual ao executivo", "Documentação técnica completa", "Prontos para manufatura"],
  },
  {
    icon: FiUsers,
    title: "Suporte e Transferência Tecnológica",
    desc: "Treinamentos especializados e fluxos de trabalho para garantir autonomia total da sua equipe — o conhecimento fica na empresa, não no consultor.",
    bullets: ["Capacitação da equipe interna", "Documentação de processos", "Suporte contínuo pós-projeto"],
  },
];

const metrics = [
  { value: 88, suffix: "%", label: "Redução de Erro Humano", icon: FiShield },
  { value: 120, suffix: "x", label: "Aumento de Produtividade", icon: FiTrendingUp },
  { value: 35, suffix: "%", label: "Redução no Lead Time", icon: FiClock },
  { value: 47, suffix: "%", label: "Redução de WIP", icon: FiBarChart2 },
];

const process = [
  { num: "01", title: "Diagnóstico", desc: "Mapeamos os fluxos de trabalho atuais, identificamos gargalos e oportunidades de automação com maior retorno." },
  { num: "02", title: "Projeto & Desenvolvimento", desc: "Desenvolvemos as ferramentas e fluxos personalizados, testando em paralelo com a operação real da sua equipe." },
  { num: "03", title: "Implantação", desc: "Implementamos as soluções com acompanhamento presencial, garantindo adoção e ajustes em tempo real." },
  { num: "04", title: "Autonomia Total", desc: "Transferimos o conhecimento completo para sua equipe. Você opera, nós damos suporte quando precisar." },
];

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "Gerente de Engenharia",
    company: "Indústria de Implementos Agrícolas",
    text: "A Pont Automação transformou completamente nosso processo de detalhamento. O que levava 5 dias agora é feito em menos de 10 minutos. A equipe ficou impressionada com a velocidade e a precisão dos entregáveis.",
    stars: 5,
  },
  {
    name: "Fernanda Souza",
    role: "Diretora de Operações",
    company: "Fabricante de Equipamentos Industriais",
    text: "Contratamos a Pont para um projeto Turnkey de grande porte. Entregaram no prazo, dentro do orçamento e com qualidade acima do esperado. A transferência de conhecimento foi exemplar — nossa equipe ficou totalmente capacitada.",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Coordenador de Projetos",
    company: "Empresa de Construção Modular",
    text: "A redução de erros no detalhamento técnico foi impressionante. Antes tínhamos retrabalho constante; hoje os projetos saem padronizados na primeira vez. O ROI foi percebido já no primeiro mês.",
    stars: 5,
  },
];

const differentiators = [
  { icon: FiZap, title: "Velocidade Real", desc: "De 5 dias para 10 minutos — não é promessa, é resultado documentado com nossos clientes." },
  { icon: FiTarget, title: "Soluções sob Medida", desc: "Cada automação é desenvolvida para as diretrizes e padrões específicos da sua empresa." },
  { icon: FiAward, title: "Qualidade Comprovada", desc: "88% de redução no erro humano. Modelos padronizados e auditáveis em todos os projetos." },
  { icon: FiPackage, title: "Entrega Turnkey", desc: "Do conceito ao arquivo para fabricação. Sem fragmentação, sem burocracia entre etapas." },
  { icon: FiTool, title: "Suporte Pós-Projeto", desc: "Não entregamos e sumimos. Acompanhamos sua equipe até a autonomia total estar garantida." },
  { icon: FiCheckCircle, title: "Capacitação Incluída", desc: "O conhecimento fica na sua empresa. Formamos a equipe interna durante todo o processo." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pontLogoUrl = "/pont-automacao-recolored.png";
  const consultoriaLogoUrl = "/pont-logo-v2.png";
  const infograficoUrl = "/pont-automacao-infografico.png";

  return (
    <div className="min-h-screen text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <img src={pontLogoUrl} alt="Pont Automação" className="h-12 w-auto" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-white/70">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
            <a href="#processo" className="hover:text-white transition-colors">Processo</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a
              href="mailto:contato@pontautomacao.com.br"
              className="px-5 py-2 rounded-lg text-white font-bold tracking-wider transition-all hover:opacity-90"
              style={{ background: WINE }}
            >
              Fale Conosco
            </a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/90 border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm font-semibold uppercase tracking-widest">
            {["servicos","resultados","processo","depoimentos"].map(s => (
              <a key={s} href={`#${s}`} className="text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>{s}</a>
            ))}
            <a href="mailto:contato@pontautomacao.com.br" className="px-5 py-2 rounded-lg text-white font-bold text-center" style={{ background: WINE }}>Fale Conosco</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${WINE_DIM} 0%, transparent 70%)` }} />
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-sm font-bold tracking-[0.25em] uppercase mb-6"
          style={{ color: WINE_LIGHT }}>
          Pont Automação — Engenharia Inteligente
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.88] tracking-tighter text-white mb-10">
          ENGENHARIA.{" "}
          <br className="hidden md:block" />
          AUTOMATIZADA.{" "}
          <br className="hidden md:block" />
          <em className="not-italic" style={{ color: WINE_LIGHT }}>ACELERADA.</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-14">
          Desenvolvemos ferramentas e processos que transformam semanas de trabalho em minutos — sem perder qualidade, sem aumentar o headcount.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4">
          <a href="#servicos"
            className="px-10 py-4 text-white font-bold uppercase tracking-widest text-sm rounded-lg transition-all hover:opacity-90"
            style={{ background: WINE }}>
            Conhecer Soluções
          </a>
          <a href="#resultados"
            className="px-10 py-4 text-white/80 font-bold uppercase tracking-widest text-sm rounded-lg border border-white/20 hover:bg-white/5 transition-all">
            Ver Resultados
          </a>
        </motion.div>
        {/* Floating metrics preview */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-6 text-center">
          {[["88%","menos erros"],["120x","mais produtividade"],["10min","antes eram 5 dias"]].map(([val, lbl]) => (
            <div key={val} className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="text-2xl font-black" style={{ color: WINE_LIGHT }}>{val}</div>
              <div className="text-white/50 text-xs uppercase tracking-widest mt-1">{lbl}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: WINE_LIGHT }}>O Que Fazemos</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
              NOSSAS <em className="not-italic" style={{ color: WINE_LIGHT }}>SOLUÇÕES</em>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: WINE_DIM }}>
                  <s.icon size={26} style={{ color: WINE_LIGHT }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{s.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6 text-sm">{s.desc}</p>
                <ul className="space-y-2">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-white/50">
                      <FiCheckCircle size={14} style={{ color: WINE_LIGHT }} className="shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section id="resultados" className="py-28 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: WINE_LIGHT }}>Dados Reais</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
              RESULTADOS EM <em className="not-italic" style={{ color: WINE_LIGHT }}>NÚMEROS</em>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Métricas coletadas com clientes reais. Sem estimativas — apenas resultados documentados.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {metrics.map((m) => <StatCard key={m.label} {...m} />)}
          </div>
          {/* Before/After */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wider text-center">Comparativo de Eficiência Operacional</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: "Lead Time de Engenharia", before: "100%", after: "65%", reduction: "-35%", desc: "Resultado com automação" },
                { label: "WIP (Trabalho em Processo)", before: "100%", after: "53%", reduction: "-47%", desc: "Menos retrabalho e fila" },
                { label: "Eficiência de Headcount", before: "1 equipe", after: "1 equipe", reduction: "= entrega", desc: "Mesma equipe, maior produção" },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-4">{item.label}</p>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-white/30 text-lg font-bold line-through">{item.before}</span>
                    <FiArrowRight style={{ color: WINE_LIGHT }} />
                    <span className="text-white text-lg font-bold">{item.after}</span>
                  </div>
                  <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-2" style={{ background: WINE_DIM, color: WINE_LIGHT }}>
                    {item.reduction}
                  </div>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INFOGRAPHIC */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <p className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: WINE_LIGHT }}>Visão Geral</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              RESULTADOS FINANCEIROS ATRAVÉS DA <em className="not-italic" style={{ color: WINE_LIGHT }}>AUTOMAÇÃO</em>
            </h2>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            src={infograficoUrl}
            alt="Infográfico Pont Automação"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      </section>

      {/* PROCESS */}
      <section id="processo" className="py-28 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: WINE_LIGHT }}>Como Trabalhamos</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
              NOSSO <em className="not-italic" style={{ color: WINE_LIGHT }}>PROCESSO</em>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div key={p.num}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-7xl font-black mb-6 leading-none" style={{ color: `${WINE_LIGHT}25` }}>{p.num}</div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 z-10">
                    <FiArrowRight size={20} style={{ color: WINE_LIGHT }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-4">
            <p className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: WINE_LIGHT }}>O Que Nossos Clientes Dizem</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">
              DEPOIMENTOS & <em className="not-italic" style={{ color: WINE_LIGHT }}>REFERÊNCIAS</em>
            </h2>
          </motion.div>
          {/* Suggestion banner */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-12 p-4 rounded-xl border border-dashed text-sm text-white/50 flex items-center gap-3"
            style={{ borderColor: `${WINE_LIGHT}40`, background: WINE_DIM }}>
            <FiStar style={{ color: WINE_LIGHT }} className="shrink-0" size={16} />
            <span><strong className="text-white/80">Sugestão:</strong> Substitua os depoimentos abaixo por relatos reais de clientes — nome, cargo, empresa e resultado obtido. Depoimentos autênticos aumentam significativamente a credibilidade e a conversão.</span>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <FiStar key={j} size={16} style={{ color: WINE_LIGHT, fill: WINE_LIGHT }} />
                  ))}
                </div>
                <blockquote className="text-white/70 leading-relaxed flex-1 mb-6 text-sm italic">
                  "{t.text}"
                </blockquote>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs mt-1">{t.role}</p>
                  <p className="text-xs mt-1 font-semibold" style={{ color: WINE_LIGHT }}>{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-28 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
            <p className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: WINE_LIGHT }}>Nossos Diferenciais</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
              POR QUE A <em className="not-italic" style={{ color: WINE_LIGHT }}>PONT AUTOMAÇÃO</em>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div key={d.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: WINE_DIM }}>
                  <d.icon size={20} style={{ color: WINE_LIGHT }} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{d.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="p-12 md:p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              PRONTO PARA <em className="not-italic" style={{ color: WINE_LIGHT }}>ACELERAR</em>?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Vamos analisar seus processos de engenharia e mostrar exatamente onde a automação pode transformar sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contato@pontautomacao.com.br"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold uppercase tracking-widest text-sm text-white transition-all hover:opacity-90"
                style={{ background: WINE }}>
                <FiMail size={16} /> Fale Conosco
              </a>
              <a href="https://wa.me/55"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold uppercase tracking-widest text-sm text-white/80 border border-white/20 hover:bg-white/5 transition-all">
                <FiPhone size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <img src={pontLogoUrl} alt="Pont Automação" className="h-12 w-auto opacity-90" />
            <div className="text-center">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Parte do Grupo Pont</p>
              <a href="https://pontconsultoria.com.br" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group">
                <img src={consultoriaLogoUrl} alt="Pont Consultoria" className="h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="text-left">
                  <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors font-semibold">Pont Consultoria</p>
                  <p className="text-white/30 text-xs">Lean & Teoria das Restrições</p>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:contato@pontautomacao.com.br" className="text-white/40 hover:text-white transition-colors"><FiMail size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><FiLinkedin size={20} /></a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Pont Automação. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
