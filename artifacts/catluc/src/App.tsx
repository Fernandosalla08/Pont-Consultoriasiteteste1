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

/* ── Navbar ── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Serviços", id: "serviços" },
    { label: "VSM & Lean", id: "vsm-&-lean" },
    { label: "Teoria das Restrições", id: "toc" },
    { label: "Indústrias", id: "indústrias" },
    { label: "Contato", id: "contato" },
  ];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-48">
        <img src={pontLogo} alt="Pont Consultoria" className="h-44 w-auto" />
        <nav className="hidden md:flex items-center gap-8">
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
            Fale Conosco
          </button>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
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
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-48">

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#2A3E7C] text-sm font-bold tracking-[0.25em] uppercase mb-6"
        >
          Pont Consultoria — Brasil
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.88] tracking-tighter text-white mb-10"
        >
          TRANSFORME.{" "}
          <br className="hidden md:block" />
          OTIMIZE.{" "}
          <br className="hidden md:block" />
          <em className="not-italic text-[#2A3E7C]">ACELERE.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-14"
        >
          Transformamos a sua indústria utilizando a Teoria das Restrições e o Sistema Toyota de Produção.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-16 mb-14"
        >
          {[
            { value: "3X", label: "Ganho Médio de OEE dos Equipamentos Gargalo" },
            { value: "60%", label: "Redução de Desperdícios" },
            { value: "90 Dias", label: "Retorno Rápido" },
          ].map((m) => (
            <div key={m.label} className="border-l-2 border-[#2A3E7C] pl-4">
              <div className="text-3xl font-black text-white">{m.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{m.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 bg-[#2A3E7C] hover:bg-[#2A3E7C] text-black font-bold px-8 py-4 text-sm uppercase tracking-wider transition-all"
          >
            Inicie sua Transformação <FiArrowRight />
          </a>
          <a
            href="#serviços"
            onClick={(e) => { e.preventDefault(); document.getElementById("serviços")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-8 py-4 text-sm uppercase tracking-wider transition-all"
          >
            Ver Serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Services ── */
const services = [
  {
    icon: FiTrendingUp,
    title: "Virada de Negócios",
    desc: "Diagnóstico e transformação rápida de operações com baixo desempenho. Identificamos as restrições centrais e construímos um roteiro claro para resultados extraordinários.",
    tags: ["Turnaround", "Impacto no P&L", "Gestão de Mudanças"],
  },
  {
    icon: FiTarget,
    title: "Teoria das Restrições",
    desc: "Usando o framework Teoria das Restrições de Goldratt, identificamos gargalos ocultos e aplicamos os Cinco Passos de Foco para máximo throughput com mínimo investimento.",
    tags: ["Teoria das Restrições", "Tambor-Pulmão-Corda", "Corrente Crítica"],
  },
  {
    icon: FiLayers,
    title: "Sistemas de Produção",
    desc: "Design de produção Lean e baseado em fluxo sob medida para a sua indústria. Otimizamos layout, fluxo de material, programação e planejamento de mão de obra.",
    tags: ["Manufatura Enxuta", "Design de Fluxo", "Kaizen"],
  },
];

function Services() {
  return (
    <section id="serviços" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            O Que Fazemos
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            NOSSOS <em className="not-italic text-[#2A3E7C]">SERVIÇOS</em>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-2xl mb-16">
            Da consultoria estratégica de negócios à otimização industrial hands-on — soluções de ponta a ponta que criam vantagem competitiva duradoura.
          </motion.p>
        </Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((s, i) => (
            <Section key={i}>
              <motion.div
                variants={fadeUp}
                custom={i}
                className="bg-transparent p-8 hover:bg-[#0f0f0f] transition-colors group h-full"
              >
                <div className="w-12 h-12 border border-[#2A3E7C]/40 flex items-center justify-center mb-6 group-hover:border-[#2A3E7C] group-hover:bg-[#2A3E7C]/10 transition-all">
                  <s.icon className="text-[#2A3E7C]" size={20} />
                </div>
                <h3 className="text-white font-bold text-lg uppercase tracking-tight mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs text-white/40 border border-white/10 px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </motion.div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── VSM ── */
const vsmCards = [
  { icon: FiMapPin, title: "VSM do Estado Atual", desc: "Mapeamos todo o fluxo de valor como existe hoje — cada etapa, cada espera, cada passagem — do material bruto ao produto expedido. Todo desperdício fica visível." },
  { icon: FiBarChart2, title: "Análise de Perdas por Pareto", desc: "Quantificamos cada perda em tempo, custo e capacidade e ranqueamos pelo impacto. Os 20% maiores problemas causam 80% do dano — vamos direto ao ponto." },
  { icon: FiZap, title: "Eventos de Melhoria Rápida (Kaizen)", desc: "Workshops focados de 3–5 dias atacando as perdas de maior prioridade. Resultados imediatos e mensuráveis — sem meses de planejamento antes da ação." },
  { icon: FiActivity, title: "Design de Fluxo e Sincronismo", desc: "Redesenhamos o fluxo de produção para eliminar esperas e sincronizar todas as etapas ao takt time do cliente — suave, contínuo e sem desperdício." },
  { icon: FiSliders, title: "Otimização de Layout", desc: "Layout físico da fábrica redesenhado para movimento mínimo, fluxo lógico e gestão visual." },
  { icon: FiFlag, title: "VSM do Estado Futuro", desc: "Desenhamos o estado futuro ideal — um blueprint concreto e executável com lead time drasticamente reduzido e máximo fluxo de valor." },
];

function VSM() {
  return (
    <section id="vsm-&-lean" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Sistema Toyota de Produção
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            FLUXO DE VALOR DO SHINGO &amp; <em className="not-italic text-[#2A3E7C]">IMPLANTAÇÃO LEAN</em>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-3xl mb-6 leading-relaxed">
            Realizamos uma análise profunda da sua fábrica usando o <strong className="text-white">Fluxo de Valor do Shingo</strong>, a ferramenta central do Sistema Toyota de Produção criada por <strong className="text-white">Shigeo Shingo</strong> — tornando cada perda, desperdício e ineficiência visível em todo o fluxo produtivo.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-white/50 text-base max-w-3xl mb-10 leading-relaxed">
            A partir do VSM, aplicamos <strong className="text-white">Análise de Pareto</strong> para ranquear e priorizar as maiores perdas, concentrando energia exatamente onde ela entrega os resultados mais rápidos e significativos.
          </motion.p>
        </Section>

        <Section>
          <motion.div variants={fadeUp} className="bg-[#2A3E7C]/10 border-l-4 border-[#2A3E7C] p-6 mb-10 max-w-xl">
            <div className="text-white/60 text-sm uppercase tracking-widest mb-1">Nosso diagnóstico revela:</div>
            <ul className="space-y-2 mt-3">
              {[
                "Falhas de Sincronismo de Produção — etapas fora de ritmo",
                "Perdas por Espera — operadores, máquinas e materiais esperando",
                "Layout Ineficiente — movimentação desnecessária e transporte longo",
                "Superprodução & WIP Excessivo — escondendo problemas reais",
                "Retrabalho & Defeitos — falhas de qualidade que destroem o lead time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                  <FiCheckCircle className="text-[#2A3E7C] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 mb-16">
          {vsmCards.map((c, i) => (
            <Section key={i}>
              <motion.div variants={fadeUp} custom={i} className="bg-transparent p-8 hover:bg-transparent transition-colors h-full">
                <c.icon className="text-[#2A3E7C] mb-4" size={22} />
                <h3 className="text-white font-bold uppercase tracking-tight mb-3">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            </Section>
          ))}
        </div>

        <Section>
          <motion.div variants={fadeUp} className="text-center">
            <div className="text-5xl md:text-7xl font-black text-[#2A3E7C]">40–70%</div>
            <div className="text-white/50 text-sm uppercase tracking-widest mt-2">Redução Típica de Lead Time por Iniciativa</div>
          </motion.div>
        </Section>
      </div>
    </section>
  );
}

/* ── Automation Philosophy ── */
function AutomationPhilosophy() {
  const steps = [
    { num: "1", icon: FiMapPin, title: "Mapear & Expor", desc: "Fluxo de Valor do Shingo revela cada perda e fluxo quebrado no seu processo atual" },
    { num: "2", icon: FiTarget, title: "Simplificar Primeiro", desc: "Teoria das Restrições + Lean eliminam desperdícios, sincronizam o fluxo e enxugam ao máximo" },
    { num: "3", icon: FiCpu, title: "Só Então Otimizar", desc: "Agora otimizamos — um processo limpo, enxuto e otimizado — multiplicando a eficiência, nunca travando desperdícios" },
  ];
  return (
    <section className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Nossa Filosofia de Otimização
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-12">
            NÃO AUTOMATIZE{" "}
            <em className="not-italic text-[#2A3E7C]">DESPERDÍCIOS.</em>
            <br />
            AUTOMATIZE{" "}
            <em className="not-italic text-[#2A3E7C]">PROCESSOS ENXUTOS.</em>
          </motion.h2>
        </Section>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 mb-14">
          {steps.map((s, i) => (
            <Section key={i}>
              <motion.div variants={fadeUp} custom={i} className="bg-transparent p-10 relative h-full">
                <div className="text-[#2A3E7C]/60 text-8xl font-black absolute top-6 right-6 leading-none select-none">{s.num}</div>
                <s.icon className="text-[#2A3E7C] mb-5" size={24} />
                <h3 className="text-white font-bold text-xl uppercase tracking-tight mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#2A3E7C]">
                    <FiArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            </Section>
          ))}
        </div>

        <Section>
          <motion.p variants={fadeUp} className="text-white/50 text-base max-w-3xl leading-relaxed border-l-4 border-[#2A3E7C] pl-6">
            Poucas empresas no mundo aplicam essa sequência. A maioria automatiza primeiro — e incorpora permanentemente suas ineficiências em máquinas caras.{" "}
            <strong className="text-white">Nós otimizamos processos enxutos. Nunca perdas.</strong>
          </motion.p>
        </Section>
      </div>
    </section>
  );
}

/* ── TOC ── */
const tocSteps = [
  { icon: FiCrosshair, title: "Identificar a Restrição", desc: "Mapeamos toda a sua operação para encontrar o único gargalo que limita o throughput do sistema — o elo mais fraco da cadeia." },
  { icon: FiMaximize, title: "Explorar a Restrição", desc: "Antes de adicionar recursos, extraímos o máximo desempenho da restrição com zero investimento adicional." },
  { icon: FiLayers, title: "Subordinar Tudo ao Resto", desc: "Todos os outros processos se alinham para apoiar a restrição. Paramos de otimizar não-gargalos que criam eficiência falsa." },
  { icon: FiZap, title: "Elevar a Restrição", desc: "Quando necessário, investimos com precisão — otimização, capacidade ou competência — para quebrar permanentemente o gargalo." },
  { icon: FiRepeat, title: "Repetir & Acelerar", desc: "As restrições mudam conforme o desempenho melhora. Instalamos uma cultura de melhoria contínua que sustenta cada ganho." },
];

const throughputSteps = [
  { label: "Entrada", pct: 85, warn: false },
  { label: "Processamento", pct: 72, warn: false },
  { label: "Solda", pct: 31, warn: true },
  { label: "Montagem", pct: 68, warn: false },
  { label: "Inspeção", pct: 79, warn: false },
  { label: "Expedição", pct: 90, warn: false },
];

function TOC() {
  return (
    <section id="toc" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Teoria das Restrições
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-16">
            A ABORDAGEM <em className="not-italic text-[#2A3E7C]">TEORIA DAS RESTRIÇÕES</em>
          </motion.h2>
        </Section>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Steps */}
          <div className="space-y-0 divide-y divide-white/5">
            {tocSteps.map((s, i) => (
              <Section key={i}>
                <motion.div variants={fadeUp} custom={i} className="flex gap-5 py-7 group hover:bg-white/2 transition-colors px-2">
                  <div className="shrink-0 w-10 h-10 border border-[#2A3E7C]/30 group-hover:border-[#2A3E7C] group-hover:bg-[#2A3E7C]/10 flex items-center justify-center transition-all">
                    <s.icon className="text-[#2A3E7C]" size={16} />
                  </div>
                  <div>
                    <div className="text-[#2A3E7C] text-xs font-bold tracking-widest mb-1">0{i + 1}</div>
                    <h3 className="text-white font-bold uppercase tracking-tight mb-2">{s.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              </Section>
            ))}
          </div>

          {/* Throughput Visual */}
          <Section>
            <motion.div variants={fadeUp} className="border border-white/10 p-8 h-fit sticky top-24">
              <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Análise de Throughput</div>
              <div className="text-white font-black text-xl uppercase mb-6">ENCONTRE O <span className="text-[#2A3E7C]">GARGALO</span></div>
              <div className="space-y-4">
                {throughputSteps.map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className={`font-medium uppercase tracking-wider ${s.warn ? "text-red-400" : "text-white/60"}`}>
                        {s.warn && "⚠ "}{s.label}
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
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-white/50 leading-relaxed">
                <strong className="text-white">Restrição identificada:</strong> Solda a 31% está limitando toda a linha. Corrigir este único ponto libera o throughput do sistema inteiro.
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
  const flow = ["Chão de Fábrica", "Bússola Financeira", "Engenharia", "Controle Financeiro"];
  return (
    <section className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Metodologia Pont Consultoria
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            A <em className="not-italic text-[#2A3E7C]">BÚSSOLA</em> FINANCEIRA
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-2xl mb-12 leading-relaxed">
            Uma metodologia que conecta a Contabilidade de Ganhos da Teoria das Restrições à <strong className="text-white">Engenharia de Produto</strong> e <strong className="text-white">Engenharia de Processo</strong> — o elo perdido entre o chão de fábrica e o controle financeiro.
          </motion.p>
        </Section>

        <Section>
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center gap-0 mb-16 overflow-x-auto">
            {flow.map((label, i) => (
              <React.Fragment key={label}>
                <div className={`shrink-0 px-6 py-4 border font-bold text-sm uppercase tracking-wider whitespace-nowrap ${i === 1 ? "border-[#2A3E7C] bg-[#2A3E7C]/10 text-[#2A3E7C]" : "border-white/20 bg-white/5 text-white"}`}>
                  {label}
                </div>
                {i < flow.length - 1 && (
                  <FiArrowRight className="text-[#2A3E7C] shrink-0 rotate-90 md:rotate-0 my-1 md:my-0 mx-0 md:mx-1" size={16} />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </Section>

        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {[
            { title: "Lucratividade Real do Produto", desc: "Quais produtos geram o maior ganho real através da restrição — não apenas a margem contábil." },
            { title: "Mix Ótimo de Produtos", desc: "O mix ideal para maximizar o throughput total dadas as restrições de capacidade atuais." },
            { title: "Estratégia de Preços e Vendas", desc: "Orienta precificação e prioridades de vendas com base na economia real da restrição." },
          ].map((c, i) => (
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
const industries = [
  { icon: FiSettings, title: "Metal Mecânico", desc: "Usinagem, torneamento, fresamento e operações de conformação metálica em série." },
  { icon: FiActivity, title: "Automotivo", desc: "Linhas de montagem, plantas de estampagem, fornecedores tier — melhoria rápida de throughput." },
  { icon: FiTarget, title: "Aeroespacial", desc: "Fabricação de alta precisão e otimização de inspeção para ambientes AS9100." },
  { icon: FiCpu, title: "Equipamentos Industriais", desc: "Construtores de máquinas customizadas, OEMs e montagem industrial — projetado para fluxo." },
  { icon: FiLayers, title: "Produtos de Construção", desc: "Aço estrutural, edifício modular e otimização de manufatura pré-fabricada." },
  { icon: FiZap, title: "Fabricação de Eletrônicos", desc: "Montagem de PCB, integração eletromecânica e otimização guiada por visão." },
  { icon: FiSun, title: "Implementos Agrícolas", desc: "Colheitadeiras, plantadeiras, pulverizadores e implementos de solo — fluxo contínuo e qualidade para o agronegócio." },
  { icon: FiTruck, title: "Implementos Rodoviários", desc: "Reboques, semirreboques e carrocerias para transporte — linhas de montagem otimizadas e lead time reduzido." },
  { icon: FiPackage, title: "Indústria Alimentícia", desc: "Processamento, embalagem e conservação de alimentos — eficiência operacional com rigor em qualidade e segurança alimentar." },
];

function Industries() {
  return (
    <section id="indústrias" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Quem Atendemos
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            INDÚSTRIAS <em className="not-italic text-[#2A3E7C]">ALVO</em>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-2xl mb-16">
            Expertise profunda em manufatura e setores industriais com métodos comprovados que se traduzem entre verticais.
          </motion.p>
        </Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {industries.map((ind, i) => (
            <Section key={i}>
              <motion.div variants={fadeUp} custom={i} className="bg-transparent p-8 hover:bg-transparent transition-colors group h-full">
                <ind.icon className="text-[#2A3E7C] mb-5" size={22} />
                <h3 className="text-white font-bold uppercase tracking-tight mb-3 group-hover:text-[#2A3E7C] transition-colors">{ind.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{ind.desc}</p>
              </motion.div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why Choose ── */
const differentiators = [
  { num: "1", title: "Expertise Técnica e de Negócios", desc: "Combinação rara de consultoria estratégica e otimização industrial hands-on. Não apenas aconselhamos — implementamos." },
  { num: "2", title: "Simplificar Antes de Otimizar", desc: "Nunca otimizamos perdas. Primeiro eliminamos desperdícios com Fluxo de Valor do Shingo e Teoria das Restrições, depois otimizamos processos enxutos." },
  { num: "3", title: "Teoria das Restrições + Sistema Toyota Comprovados", desc: "Dois dos métodos operacionais mais poderosos combinados — entregando resultados mensuráveis em 90 dias ou menos." },
  { num: "4", title: "A Bússola Financeira", desc: "Nossa metodologia conecta o chão de fábrica à engenharia de produto, engenharia de processo e controle financeiro." },
  { num: "5", title: "Agnósticos em Tecnologia", desc: "Recomendamos o que é certo para a sua situação — robótica, otimização, sistemas industriais — não o que somos pagos para vender." },
  { num: "6", title: "Prática Hands-On", desc: "Entendemos que se a teoria estiver diferente da prática, então a teoria está errada. As coisas precisam funcionar na fábrica — não apenas no papel." },
];

function WhyChoose() {
  return (
    <section className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Section>
          <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Nossos Diferenciais
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-16">
            POR QUE ESCOLHER A <em className="not-italic text-[#2A3E7C]">PONT</em>
          </motion.h2>
        </Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {differentiators.map((d, i) => (
            <Section key={i}>
              <motion.div variants={fadeUp} custom={i} className={`bg-transparent p-8 hover:bg-transparent transition-colors h-full ${i === differentiators.length - 1 && differentiators.length % 3 !== 0 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="text-[#2A3E7C] font-black text-4xl mb-5 opacity-90">{d.num}</div>
                <h3 className="text-white font-bold uppercase tracking-tight mb-3">{d.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            </Section>
          ))}
        </div>

        {/* Quote */}
        <Section>
          <motion.blockquote variants={fadeUp} className="mt-20 border-l-4 border-[#2A3E7C] pl-8 max-w-3xl">
            <p className="text-2xl md:text-3xl text-white font-bold italic leading-snug mb-4">
              "Todo sistema tem uma restrição. Toda restrição é uma oportunidade. Existimos para transformar sua maior limitação na sua maior vantagem competitiva."
            </p>
            <cite className="text-white/40 text-sm uppercase tracking-widest not-italic">Pont Consultoria — Crença Central</cite>
          </motion.blockquote>
        </Section>
      </div>
    </section>
  );
}

/* ── Contact ── */
function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section id="contato" className="bg-transparent border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <Section>
            <motion.p variants={fadeUp} className="text-[#2A3E7C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Entre em Contato
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              VAMOS FALAR SOBRE O SEU <em className="not-italic text-[#2A3E7C]">DESAFIO</em>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg mb-10 leading-relaxed">
              Conte-nos sobre sua operação e retornaremos em até 24 horas. Sem compromisso — apenas uma conversa.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-4">
              <FiMail className="text-[#2A3E7C]" size={20} />
              <a href="mailto:contato@pontconsultoria.com.br" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                contato@pontconsultoria.com.br
              </a>
            </motion.div>
          </Section>

          <Section>
            <motion.div variants={fadeUp} className="border border-white/10 p-8">
              {sent ? (
                <div className="text-center py-10">
                  <FiCheckCircle className="text-[#2A3E7C] mx-auto mb-4" size={40} />
                  <h3 className="text-white font-bold text-xl uppercase mb-2">Mensagem Enviada!</h3>
                  <p className="text-white/50 text-sm">Retornaremos em até 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: "nome", label: "Nome", type: "text", placeholder: "Seu nome completo" },
                    { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
                    { id: "empresa", label: "Empresa", type: "text", placeholder: "Nome da empresa" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#2A3E7C] text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors"
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Descreva sua operação e o principal desafio que enfrenta..."
                      className="w-full bg-white/5 border border-white/10 focus:border-[#2A3E7C] text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#2A3E7C] hover:bg-[#2A3E7C] text-black font-bold py-4 text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    Enviar Mensagem <FiArrowRight />
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
  return (
    <footer className="bg-transparent border-t border-white/5">
      {/* Grupo Pont CTA */}
      <div className="border-b border-white/5 py-16">
        <div className="flex flex-col items-center gap-5">
          <p className="text-white font-bold text-sm uppercase tracking-widest text-center leading-relaxed">
            Soluções em<br />Engenharia de Produto
          </p>
          <div className="relative w-full max-w-4xl mt-4">
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
              <span className="text-white font-semibold text-xs text-center leading-relaxed">Clique aqui e saiba como transformar os seus projetos feitos manualmente em um configurador de produtos</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white shrink-0">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="https://www.pontconsultoria.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={pontLogo} alt="Pont Consultoria" className="h-48 w-auto mix-blend-screen" style={{ filter: "contrast(1.8) brightness(1.4)" }} />
          </a>
          <p className="text-white/30 text-xs text-center">
            © {new Date().getFullYear()} Pont Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Serviços", "Contato"].map((l) => (
              <button
                key={l}
                onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
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
  );
}
