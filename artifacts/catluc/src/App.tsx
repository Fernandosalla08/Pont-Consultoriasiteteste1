import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FiSettings,
  FiTarget,
  FiLayers,
  FiCpu,
  FiEye,
  FiArrowRight,
  FiCheckCircle,
  FiTrendingUp,
  FiZap,
  FiCrosshair,
  FiMaximize,
  FiRepeat,
  FiMail
} from "react-icons/fi";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            CatLuc Consulting
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 text-white">
            Transforme.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Automatize.</span><br />
            Acelere.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Impulsionamos transformações de negócios mensuráveis através da Teoria das Restrições e o Sistema Toyota de Produção — combinados com automação industrial de ponta: corte a laser, CNC, solda e visão de máquina.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Ganho de Throughput Médio", value: "3X" },
              { label: "Redução de Desperdícios", value: "60%" },
              { label: "Retorno Rápido", value: "90D" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, borderLeftColor: "transparent" }}
                animate={{ opacity: 1, borderLeftColor: "hsl(var(--primary))" }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                className="border-l-2 border-primary pl-4 py-1 bg-white/5 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:translate-x-1 flex items-center gap-3">
            Inicie sua Transformação
            <FiArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Virada de Negócios",
      desc: "Diagnóstico e transformação rápida de operações com baixo desempenho. Identificamos as restrições centrais e criamos um roteiro claro para resultados extraordinários.",
      icon: <FiTrendingUp className="w-8 h-8 text-primary" />,
      tags: ["Turnaround", "Impacto no P&L", "Gestão de Mudanças"]
    },
    {
      title: "Teoria das Restrições",
      desc: "Usando o framework TOC de Goldratt, identificamos gargalos ocultos e aplicamos os Cinco Passos de Foco para máximo throughput com mínimo investimento.",
      icon: <FiTarget className="w-8 h-8 text-primary" />,
      tags: ["TOC", "Tambor-Pulmão-Corda", "Corrente Crítica"]
    },
    {
      title: "Sistemas de Produção",
      desc: "Lean e fluxo baseado em design para sua indústria. Otimizamos layout, fluxo de material, programação e planejamento de mão de obra.",
      icon: <FiLayers className="w-8 h-8 text-primary" />,
      tags: ["Manufatura Enxuta", "Design de Fluxo", "Kaizen"]
    },
    {
      title: "Automação Industrial",
      desc: "Soluções de automação turnkey com robôs, CLPs e interfaces IHM para mais velocidade, precisão e confiabilidade no chão de fábrica.",
      icon: <FiSettings className="w-8 h-8 text-primary" />,
      tags: ["Robótica", "CLP / IHM", "Integração de Sistemas"]
    },
    {
      title: "Sistemas Laser & CNC",
      desc: "Seleção, instalação e otimização de máquinas de corte laser e centros de usinagem CNC. Maximizamos OEE, reduzimos tempos de setup e melhoramos a qualidade.",
      icon: <FiCpu className="w-8 h-8 text-primary" />,
      tags: ["Corte a Laser", "Usinagem CNC", "Otimização de OEE"]
    },
    {
      title: "Visão de Máquina & Solda",
      desc: "Visão de máquina avançada para inspeção automatizada e controle de qualidade, com integração de automação de solda robótica MIG/TIG e laser.",
      icon: <FiEye className="w-8 h-8 text-primary" />,
      tags: ["Visão de Máquina", "Solda Robótica", "Controle de Qualidade"]
    }
  ];

  return (
    <section className="py-24 bg-background border-b border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Nossa Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">Domínio Total da Operação</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-[#0a0a0a] border border-white/10 p-8 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <div className="mb-6 bg-white/5 w-16 h-16 flex items-center justify-center border border-white/10">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{s.title}</h4>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed min-h-[80px]">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t, j) => (
                  <span key={j} className="text-xs font-semibold px-2 py-1 bg-white/5 text-white/70 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ShingoVSMSection = () => {
  return (
    <section className="py-24 bg-[#050505] border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Toyota Production System</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-white">Shingo VSM & Análise Lean</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Realizamos uma análise profunda da sua fábrica usando o Shingo VSM — Mapa do Fluxo de Valor Shingo, a ferramenta central do Sistema Toyota de Produção criada por Shigeo Shingo — tornando cada perda, desperdício e ineficiência visível em todo o fluxo produtivo.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8">
              <div className="text-4xl font-bold text-primary mb-2">40–70%</div>
              <div className="text-sm font-bold uppercase tracking-wider text-white">Redução Típica de Lead Time por Engajamento</div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wide mb-4">O Diagnóstico Revela:</h4>
              {[
                "Falhas de Sincronismo de Produção",
                "Perdas por Espera",
                "Layout Ineficiente",
                "Superprodução & WIP Excessivo",
                "Retrabalho & Defeitos"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              "VSM do Estado Atual",
              "Análise de Perdas por Pareto",
              "Eventos de Melhoria Rápida (Kaizen)",
              "Design de Fluxo e Sincronismo",
              "Otimização de Layout",
              "VSM do Estado Futuro"
            ].map((item, i) => (
              <div key={i} className="bg-background border border-white/10 p-6 flex flex-col justify-center text-center aspect-square hover:border-primary/50 transition-colors">
                <span className="text-3xl font-bold text-white/10 mb-4">{`0${i+1}`}</span>
                <span className="text-sm font-bold text-white uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  return (
    <section className="py-32 relative bg-primary flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4yKSIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0a0a0a] mb-16 max-w-4xl mx-auto">
          Não automatize desperdícios.<br />
          Automatize processos enxutos.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Mapear & Expor",
              desc: "Shingo VSM revela cada perda e fluxo quebrado no seu processo atual."
            },
            {
              step: "02",
              title: "Simplificar Primeiro",
              desc: "TOC + Lean eliminam desperdícios, sincronizam fluxo e enxugam ao máximo."
            },
            {
              step: "03",
              title: "Só Então Automatizar",
              desc: "Agora automatizamos — um processo limpo, enxuto e otimizado."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8 text-left border border-black/10 relative">
              <div className="text-primary text-5xl font-black opacity-20 absolute top-4 right-4">{item.step}</div>
              <h3 className="text-white text-xl font-bold uppercase mb-4 tracking-tight relative z-10">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <p className="mt-16 text-[#0a0a0a] font-bold text-lg max-w-3xl mx-auto">
          Poucas empresas no mundo aplicam essa sequência. A maioria automatiza primeiro — e incorpora permanentemente suas ineficiências em máquinas caras. Nós automatizamos processos enxutos. Nunca perdas.
        </p>
      </div>
    </section>
  );
};

const TOCSection = () => {
  return (
    <section className="py-24 bg-background border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Metodologia Goldratt</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">Abordagem TOC</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            {[
              { title: "Identificar a Restrição", desc: "Mapeamos sua operação para encontrar o único gargalo que limita o throughput do sistema.", icon: <FiCrosshair /> },
              { title: "Explorar a Restrição", desc: "Antes de adicionar recursos, extraímos o máximo de desempenho da restrição sem investimento adicional.", icon: <FiMaximize /> },
              { title: "Subordinar Tudo ao Resto", desc: "Todos os outros processos se alinham para apoiar a restrição. Paramos de otimizar não-gargalos.", icon: <FiLayers /> },
              { title: "Elevar a Restrição", desc: "Quando necessário, investimos precisamente — automação, capacidade ou competência — para quebrar permanentemente o gargalo.", icon: <FiZap /> },
              { title: "Repetir & Acelerar", desc: "As restrições mudam conforme o desempenho melhora. Instalamos uma cultura de melhoria contínua.", icon: <FiRepeat /> }
            ].map((step, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="text-primary shrink-0 mt-1">{step.icon}</div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1">{`${i+1}. ${step.title}`}</h4>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-[#050505] p-8 border border-white/10">
              <h4 className="text-white font-bold uppercase tracking-wide mb-8 text-center text-sm">Visualização de Throughput do Sistema</h4>
              
              <div className="flex flex-col gap-4">
                {[
                  { name: "Entrada", val: 85, color: "bg-white/20" },
                  { name: "Processamento", val: 72, color: "bg-white/20" },
                  { name: "Solda (Gargalo)", val: 31, color: "bg-primary", isWarning: true },
                  { name: "Montagem", val: 68, color: "bg-white/20" },
                  { name: "Inspeção", val: 79, color: "bg-white/20" },
                  { name: "Expedição", val: 90, color: "bg-white/20" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-32 text-right text-xs font-bold text-muted-foreground uppercase tracking-wider flex justify-end items-center gap-2">
                      {item.isWarning && <span className="text-primary">⚠</span>}
                      <span className={item.isWarning ? "text-primary" : ""}>{item.name}</span>
                    </div>
                    <div className="flex-1 h-6 bg-white/5 relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`absolute top-0 left-0 h-full ${item.color}`} 
                      />
                    </div>
                    <div className={`w-12 text-sm font-bold ${item.isWarning ? "text-primary" : "text-white"}`}>
                      {item.val}%
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 border border-primary/20 text-sm text-primary/90 font-medium">
                <strong className="text-primary uppercase tracking-wide">Insight Operacional:</strong> Restrição identificada: Solda a 31% está limitando toda a linha. Corrigir este único ponto libera o throughput do sistema inteiro.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompassSection = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Inteligência Financeira</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">A Bússola Financeira</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Metodologia CatLuc que conecta a Contabilidade de Ganhos TOC à Engenharia de Produto e Engenharia de Processo — o elo perdido entre o chão de fábrica e o controle financeiro.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 opacity-80">
          <div className="px-6 py-3 border border-white/20 bg-white/5 text-white font-bold text-sm uppercase tracking-wider">Chão de Fábrica</div>
          <FiArrowRight className="text-primary w-6 h-6 rotate-90 md:rotate-0" />
          <div className="px-6 py-3 border border-primary bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(255,100,0,0.2)]">Bússola Financeira</div>
          <FiArrowRight className="text-primary w-6 h-6 rotate-90 md:rotate-0" />
          <div className="px-6 py-3 border border-white/20 bg-white/5 text-white font-bold text-sm uppercase tracking-wider">Engenharia</div>
          <FiArrowRight className="text-primary w-6 h-6 rotate-90 md:rotate-0" />
          <div className="px-6 py-3 border border-white/20 bg-white/5 text-white font-bold text-sm uppercase tracking-wider">Controle Financeiro</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Lucratividade Real", desc: "Revele a verdadeira margem de cada produto baseado no consumo da restrição." },
            { title: "Mix Ótimo de Produtos", desc: "Determine exatamente o que produzir e quando para maximizar o ganho da empresa." },
            { title: "Estratégia de Preços", desc: "Decisões de vendas baseadas em dados operacionais reais, não em custos teóricos." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 border border-white/5 bg-background">
              <h4 className="text-xl font-bold text-white uppercase mb-4">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center p-8 border border-white/10 bg-white/[0.02]">
          <p className="text-white/80 italic font-medium">
            "Aplicado em fabricação de metais, automotivo, equipamentos industriais e eletrônica — a Bússola Financeira revela consistentemente que o mix de produtos mais lucrativo não é o que a contabilidade tradicional de custos prevê."
          </p>
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { name: "Metal & Ferraria", tags: "Corte laser, solda, CNC, prensa-dobradeira" },
    { name: "Automotivo", tags: "Linhas de montagem, estampagem, fornecedores tier" },
    { name: "Aeroespacial", tags: "Fabricação de alta precisão, automação de inspeção" },
    { name: "Equipamentos Industriais", tags: "Construtores de máquinas customizadas, OEMs" },
    { name: "Produtos de Construção", tags: "Aço estrutural, edifício modular, pré-fabricados" },
    { name: "Fabricação de Eletrônicos", tags: "Montagem de PCB, integração eletromecânica" }
  ];

  return (
    <section className="py-24 bg-background border-b border-white/5">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-12 text-center">Indústrias Atendidas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <div key={i} className="p-6 border border-white/10 bg-[#050505] hover:border-primary/30 transition-colors group">
              <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">{ind.name}</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{ind.tags}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  const reasons = [
    { title: "Expertise Técnica e de Negócios", desc: "Combinação rara de consultoria estratégica e automação industrial hands-on. Não apenas aconselhamos — implementamos." },
    { title: "Simplificar Antes de Automatizar", desc: "Nunca automatizamos perdas. Primeiro eliminamos desperdícios com Shingo VSM e TOC, depois automatizamos processos enxutos." },
    { title: "TOC + Sistema Toyota Comprovados", desc: "Dois dos métodos operacionais mais poderosos combinados — entregando resultados mensuráveis em 90 dias ou menos." },
    { title: "A Bússola Financeira", desc: "Nossa metodologia conecta o chão de fábrica à engenharia de produto, engenharia de processo e controle financeiro." },
    { title: "Agnósticos em Tecnologia", desc: "Recomendamos o que é certo para sua situação — laser, CNC, visão, robótica — não o que somos pagos para vender." }
  ];

  return (
    <section className="py-24 bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Vantagem Competitiva</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">Por que Escolher CatLuc</h3>
            <div className="w-20 h-2 bg-primary mb-8" />
            <p className="text-muted-foreground">
              A diferença entre um conselho teórico e resultados operacionais tangíveis que impactam diretamente o seu P&L.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-2xl font-black text-white/10 mt-[-4px]">{`0${i+1}`}</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-2">{r.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 text-[400px] text-black/5 leading-none font-serif">"</div>
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <blockquote className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0a0a0a] leading-tight mb-8">
          "Todo sistema tem uma restrição. Toda restrição é uma oportunidade. Existimos para transformar sua maior limitação na sua maior vantagem competitiva."
        </blockquote>
        <cite className="text-[#0a0a0a] font-bold text-sm tracking-widest uppercase not-italic">
          — CatLuc Consulting
        </cite>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-24 bg-background relative" id="contato">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">Vamos Falar Sobre O Seu Desafio</h3>
            <p className="text-muted-foreground text-lg mb-12">
              Conte-nos sobre sua operação e retornaremos em até 24 horas. Sem compromisso — apenas uma conversa.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/80">
                <FiMail className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">contact@catlucconsulting.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#050505] p-8 border border-white/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Nome</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-white/10 p-3 text-white focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-background border border-white/10 p-3 text-white focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Empresa</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-white/10 p-3 text-white focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full bg-background border border-white/10 p-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest py-4 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#050505] border-t border-white/5 py-8 text-center">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="w-2 h-2 bg-primary rounded-full" />
        <span className="text-white font-bold tracking-widest uppercase text-sm">CatLuc Consulting</span>
      </div>
      <p className="text-white/30 text-xs uppercase tracking-wider">
        © 2025 CatLuc Consulting. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <HeroSection />
      <ServicesSection />
      <ShingoVSMSection />
      <PhilosophySection />
      <TOCSection />
      <CompassSection />
      <IndustriesSection />
      <WhyUsSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
