export type Lang = 'pt' | 'en' | 'es' | 'de';

export interface T {
  nav: { services: string; stpLean: string; toc: string; industries: string; contact: string; talkToUs: string };
  hero: { tagline: string; h1: string[]; h1Accent: string; subtitle: string; metrics: { value: string; label: string }[] };
  services: { tag: string; title: string; titleAccent: string; subtitle: string; items: { title: string; desc: string; tags: string[] }[] };
  vsm: { tag: string; title: string; titleAccent: string; p1: string; p2: string; diagnosisLabel: string; diagnosisItems: string[]; cards: { title: string; desc: string }[]; statLabel: string };
  toc: { tag: string; title: string; titleAccent: string; steps: { title: string; desc: string }[]; chartTitle: string; chartSubtitle: string; chartSubtitleAccent: string; throughputLabels: string[]; bottleneckBold: string; bottleneck: string };
  financialCompass: { tag: string; titleFull: string; subtitle: string; bold1: string; bold2: string; flow: string[]; cards: { title: string; desc: string }[] };
  automation: { tag: string; title1: string; title1Accent: string; title2: string; title2Accent: string; steps: { title: string; desc: string }[]; quote: string; quoteBold: string };
  industries: { tag: string; title: string; titleAccent: string; subtitle: string; items: { title: string; desc: string }[] };
  whyChoose: { tag: string; title: string; titleAccent: string; items: { title: string; desc: string }[]; quote: string; quoteAuthor: string };
  contact: { tag: string; title: string; titleAccent: string; subtitle: string; fields: { name: { label: string; placeholder: string }; email: { label: string; placeholder: string }; company: { label: string; placeholder: string }; message: { label: string; placeholder: string } }; button: string; successTitle: string; successSubtitle: string };
  footer: { solutionsTitle: string; ctaText: string; copyright: string; links: string[] };
}

const year = new Date().getFullYear();

export const translations: Record<Lang, T> = {
  pt: {
    nav: { services: "Serviços", stpLean: "STP & Lean", toc: "Teoria das Restrições", industries: "Indústrias", contact: "Contato", talkToUs: "Fale Conosco" },
    hero: {
      tagline: "PONT CONSULTORIA — BRASIL",
      h1: ["TRANSFORME.", "OTIMIZE."],
      h1Accent: "ACELERE.",
      subtitle: "Transformamos a sua indústria utilizando a Teoria das Restrições e o Sistema Toyota de Produção.",
      metrics: [{ value: "30%", label: "Ganho Médio de OEE dos Equipamentos Gargalo" }, { value: "60%", label: "Redução de Desperdícios" }, { value: "90 Dias", label: "ROI" }],
    },
    services: {
      tag: "O Que Fazemos", title: "NOSSOS", titleAccent: "SERVIÇOS",
      subtitle: "Da consultoria estratégica de negócios à otimização industrial hands-on — soluções de ponta a ponta que criam vantagem competitiva duradoura.",
      items: [
        { title: "Virada de Negócios", desc: "Diagnóstico e transformação rápida de operações com baixo desempenho. Identificamos as restrições centrais e construímos um roteiro claro para resultados extraordinários.", tags: ["Turnaround", "Impacto no P&L", "Gestão de Mudanças"] },
        { title: "Teoria das Restrições", desc: "Usando o framework Teoria das Restrições de Goldratt, identificamos gargalos ocultos e aplicamos os Cinco Passos de Foco para máximo throughput com mínimo investimento.", tags: ["Teoria das Restrições", "Tambor-Pulmão-Corda", "Corrente Crítica"] },
        { title: "Sistemas de Produção", desc: "Design de produção Lean e baseado em fluxo sob medida para a sua indústria. Otimizamos layout, fluxo de material, programação e planejamento de mão de obra.", tags: ["Manufatura Enxuta", "Design de Fluxo", "Kaizen"] },
      ],
    },
    vsm: {
      tag: "Sistema Toyota de Produção", title: "FLUXO DE VALOR DO SHINGO &", titleAccent: "IMPLANTAÇÃO LEAN",
      p1: "Realizamos uma análise profunda da sua fábrica usando o Fluxo de Valor do Shingo, a ferramenta central do Sistema Toyota de Produção criada por Shigeo Shingo — tornando cada perda, desperdício e ineficiência visível em todo o fluxo produtivo.",
      p2: "A partir do MFV, aplicamos Análise de Pareto para ranquear e priorizar as maiores perdas, concentrando energia exatamente onde ela entrega os resultados mais rápidos e significativos.",
      diagnosisLabel: "Nosso diagnóstico revela:",
      diagnosisItems: ["Falhas de Sincronismo de Produção — etapas fora de ritmo", "Perdas por Espera — operadores, máquinas e materiais esperando", "Layout Ineficiente — movimentação desnecessária e transporte longo", "Superprodução & WIP Excessivo — escondendo problemas reais", "Retrabalho & Defeitos — falhas de qualidade que destroem o lead time"],
      cards: [
        { title: "MFV do Estado Atual", desc: "Mapeamos todo o fluxo de valor como existe hoje — cada etapa, cada espera, cada passagem — do material bruto ao produto expedido. Todo desperdício fica visível." },
        { title: "Análise de Perdas por Pareto", desc: "Quantificamos cada perda em tempo, custo e capacidade e ranqueamos pelo impacto. Os 20% maiores problemas causam 80% do dano — vamos direto ao ponto." },
        { title: "Eventos de Melhoria Rápida (Kaizen)", desc: "Workshops focados de 3–5 dias atacando as perdas de maior prioridade. Resultados imediatos e mensuráveis — sem meses de planejamento antes da ação." },
        { title: "Design de Fluxo e Sincronismo", desc: "Redesenhamos o fluxo de produção para eliminar esperas e sincronizar todas as etapas ao takt time do cliente — suave, contínuo e sem desperdício." },
        { title: "Otimização de Layout", desc: "Layout físico da fábrica redesenhado para movimento mínimo, fluxo lógico e gestão visual." },
        { title: "MFV do Estado Futuro", desc: "Desenhamos o estado futuro ideal — um blueprint concreto e executável com lead time drasticamente reduzido e máximo fluxo de valor." },
      ],
      statLabel: "Redução Típica de Lead Time por Iniciativa",
    },
    toc: {
      tag: "Teoria das Restrições", title: "A ABORDAGEM", titleAccent: "TEORIA DAS RESTRIÇÕES",
      steps: [
        { title: "Identificar a Restrição", desc: "Mapeamos toda a sua operação para encontrar o único gargalo que limita o throughput do sistema — o elo mais fraco da cadeia." },
        { title: "Explorar a Restrição", desc: "Antes de adicionar recursos, extraímos o máximo desempenho da restrição com zero investimento adicional." },
        { title: "Subordinar Tudo ao Resto", desc: "Todos os outros processos se alinham para apoiar a restrição. Paramos de otimizar não-gargalos que criam eficiência falsa." },
        { title: "Elevar a Restrição", desc: "Quando necessário, investimos com precisão — otimização, capacidade ou competência — para quebrar permanentemente o gargalo." },
        { title: "Repetir & Acelerar", desc: "As restrições podem acabar mudando, se não segurarmos as rédeas do nosso negócio. Instalamos uma cultura para manter o gargalo fixo, assim a empresa funciona com mais estabilidade." },
      ],
      chartTitle: "Análise de Throughput", chartSubtitle: "ENCONTRE O", chartSubtitleAccent: "GARGALO",
      throughputLabels: ["Entrada", "Processamento", "Solda", "Montagem", "Inspeção", "Expedição"],
      bottleneckBold: "Restrição identificada:", bottleneck: "Solda a 31% está limitando toda a linha. Corrigir este único ponto libera o throughput do sistema inteiro.",
    },
    financialCompass: {
      tag: "Metodologia Pont Consultoria", titleFull: "A BÚSSOLA FINANCEIRA",
      subtitle: "Uma metodologia que conecta a Contabilidade de Ganhos da Teoria das Restrições à {bold1} e {bold2} — o elo perdido entre o chão de fábrica e o controle financeiro.",
      bold1: "Engenharia de Produto", bold2: "Engenharia de Processo",
      flow: ["Chão de Fábrica", "Bússola Financeira", "Engenharia", "Controle Financeiro"],
      cards: [
        { title: "Lucratividade Real do Produto", desc: "Quais produtos geram o maior ganho real através da restrição — não apenas a margem contábil." },
        { title: "Mix Ótimo de Produtos", desc: "O mix ideal para maximizar o throughput total dadas as restrições de capacidade atuais." },
        { title: "Estratégia de Preços e Vendas", desc: "Orienta precificação e prioridades de vendas com base na economia real da restrição." },
      ],
    },
    automation: {
      tag: "Nossa Filosofia de Otimização", title1: "NÃO AUTOMATIZE", title1Accent: "DESPERDÍCIOS.", title2: "AUTOMATIZE", title2Accent: "PROCESSOS ENXUTOS.",
      steps: [
        { title: "Mapear & Expor", desc: "Fluxo de Valor do Shingo revela cada perda e fluxo quebrado no seu processo atual" },
        { title: "Simplificar Primeiro", desc: "Teoria das Restrições + Lean eliminam desperdícios, sincronizam o fluxo e enxugam ao máximo" },
        { title: "Só Então Automatizar", desc: "Agora automatizamos — um processo limpo, enxuto e otimizado — multiplicando a eficiência, nunca travando desperdícios" },
      ],
      quote: "Poucas empresas no mundo aplicam essa sequência. A maioria automatiza primeiro — e incorpora permanentemente suas ineficiências em máquinas caras.",
      quoteBold: "Nós automatizamos processos enxutos. Nunca perdas.",
    },
    industries: {
      tag: "Quem Atendemos", title: "INDÚSTRIAS", titleAccent: "ALVO",
      subtitle: "Expertise profunda em manufatura e setores industriais com métodos comprovados que se traduzem entre verticais.",
      items: [
        { title: "Metal Mecânico", desc: "Usinagem, torneamento, fresamento e operações de conformação metálica em série." },
        { title: "Automotivo", desc: "Linhas de montagem, plantas de estampagem, fornecedores tier — melhoria rápida de throughput." },
        { title: "Aeroespacial", desc: "Fabricação de alta precisão e otimização de inspeção para ambientes AS9100." },
        { title: "Equipamentos Industriais", desc: "Construtores de máquinas customizadas, OEMs e montagem industrial — projetado para fluxo." },
        { title: "Produtos de Construção", desc: "Aço estrutural, edifício modular e otimização de manufatura pré-fabricada." },
        { title: "Fabricação de Eletrônicos", desc: "Montagem de PCB, integração eletromecânica e otimização guiada por visão." },
        { title: "Implementos Agrícolas", desc: "Colheitadeiras, plantadeiras, pulverizadores e implementos de solo — fluxo contínuo e qualidade para o agronegócio." },
        { title: "Implementos Rodoviários", desc: "Reboques, semirreboques e carrocerias para transporte — linhas de montagem otimizadas e lead time reduzido." },
        { title: "Indústria Alimentícia", desc: "Processamento, embalagem e conservação de alimentos — eficiência operacional com rigor em qualidade e segurança alimentar." },
      ],
    },
    whyChoose: {
      tag: "Nossos Diferenciais", title: "POR QUE ESCOLHER A", titleAccent: "PONT",
      items: [
        { title: "Expertise Técnica e de Negócios", desc: "Combinação rara de consultoria estratégica e otimização industrial hands-on. Não apenas aconselhamos — implementamos." },
        { title: "Simplificar Antes de Otimizar", desc: "Nunca otimizamos perdas. Primeiro eliminamos desperdícios com Fluxo de Valor do Shingo e Teoria das Restrições, depois otimizamos processos enxutos." },
        { title: "Teoria das Restrições + Sistema Toyota Comprovados", desc: "Dois dos métodos operacionais mais poderosos combinados — entregando resultados mensuráveis em 90 dias ou menos." },
        { title: "A Bússola Financeira", desc: "Nossa metodologia conecta o chão de fábrica à engenharia de produto, engenharia de processo e controle financeiro." },
        { title: "Agnósticos em Tecnologia", desc: "Recomendamos o que é certo para a sua situação — robótica, otimização, sistemas industriais — não o que somos pagos para vender." },
        { title: "Prática Hands-On", desc: "Entendemos que se a teoria estiver diferente da prática, então a teoria está errada. As coisas precisam funcionar na fábrica — não apenas no papel." },
      ],
      quote: '"Todo sistema tem uma restrição. Toda restrição é uma oportunidade. Existimos para transformar sua maior limitação na sua maior vantagem competitiva."',
      quoteAuthor: "Pont Consultoria — Crença Central",
    },
    contact: {
      tag: "Entre em Contato", title: "VAMOS FALAR SOBRE O SEU", titleAccent: "DESAFIO",
      subtitle: "Conte-nos sobre sua operação e retornaremos em até 24 horas. Sem compromisso — apenas uma conversa.",
      fields: { name: { label: "Nome", placeholder: "Seu nome completo" }, email: { label: "E-mail", placeholder: "seu@email.com" }, company: { label: "Empresa", placeholder: "Nome da empresa" }, message: { label: "Mensagem", placeholder: "Descreva sua operação e o principal desafio que enfrenta..." } },
      button: "Enviar Mensagem", successTitle: "Mensagem Enviada!", successSubtitle: "Retornaremos em até 24 horas.",
    },
    footer: { solutionsTitle: "Soluções em\nEngenharia de Produto", ctaText: "Clique aqui e saiba como transformar os seus projetos feitos manualmente em um configurador de produtos", copyright: `© ${year} Pont Consultoria. Todos os direitos reservados.`, links: ["Serviços", "Contato"] },
  },

  en: {
    nav: { services: "Services", stpLean: "STP & Lean", toc: "Theory of Constraints", industries: "Industries", contact: "Contact", talkToUs: "Talk to Us" },
    hero: {
      tagline: "PONT CONSULTORIA — BRAZIL",
      h1: ["TRANSFORM.", "OPTIMIZE."],
      h1Accent: "ACCELERATE.",
      subtitle: "We transform your industry using the Theory of Constraints and the Toyota Production System.",
      metrics: [{ value: "30%", label: "Average OEE Gain on Bottleneck Equipment" }, { value: "60%", label: "Waste Reduction" }, { value: "90 Days", label: "ROI" }],
    },
    services: {
      tag: "What We Do", title: "OUR", titleAccent: "SERVICES",
      subtitle: "From strategic business consulting to hands-on industrial optimization — end-to-end solutions that create lasting competitive advantage.",
      items: [
        { title: "Business Turnaround", desc: "Rapid diagnosis and transformation of underperforming operations. We identify core constraints and build a clear roadmap to extraordinary results.", tags: ["Turnaround", "P&L Impact", "Change Management"] },
        { title: "Theory of Constraints", desc: "Using Goldratt's Theory of Constraints framework, we identify hidden bottlenecks and apply the Five Focusing Steps for maximum throughput with minimum investment.", tags: ["Theory of Constraints", "Drum-Buffer-Rope", "Critical Chain"] },
        { title: "Production Systems", desc: "Lean and flow-based production design tailored to your industry. We optimize layout, material flow, scheduling and workforce planning.", tags: ["Lean Manufacturing", "Flow Design", "Kaizen"] },
      ],
    },
    vsm: {
      tag: "Toyota Production System", title: "SHINGO VALUE STREAM &", titleAccent: "LEAN IMPLEMENTATION",
      p1: "We conduct a deep analysis of your factory using Shingo's Value Stream, the central tool of the Toyota Production System created by Shigeo Shingo — making every loss, waste and inefficiency visible throughout the production flow.",
      p2: "From the VSM, we apply Pareto Analysis to rank and prioritize the greatest losses, focusing energy exactly where it delivers the fastest and most significant results.",
      diagnosisLabel: "Our diagnosis reveals:",
      diagnosisItems: ["Production Synchronization Failures — steps out of rhythm", "Waiting Losses — operators, machines and materials waiting", "Inefficient Layout — unnecessary movement and long transportation", "Overproduction & Excessive WIP — hiding real problems", "Rework & Defects — quality failures that destroy lead time"],
      cards: [
        { title: "Current State VSM", desc: "We map the entire value stream as it exists today — every step, every wait, every handoff — from raw material to shipped product. Every waste becomes visible." },
        { title: "Pareto Loss Analysis", desc: "We quantify each loss in time, cost and capacity and rank by impact. The top 20% of problems cause 80% of the damage — we go straight to the point." },
        { title: "Rapid Improvement Events (Kaizen)", desc: "Focused 3–5 day workshops attacking the highest priority losses. Immediate, measurable results — no months of planning before action." },
        { title: "Flow Design and Synchronization", desc: "We redesign the production flow to eliminate waiting and synchronize every step to the customer's takt time — smooth, continuous and waste-free." },
        { title: "Layout Optimization", desc: "Physical factory layout redesigned for minimum movement, logical flow and visual management." },
        { title: "Future State VSM", desc: "We draw the ideal future state — a concrete, executable blueprint with dramatically reduced lead time and maximum value flow." },
      ],
      statLabel: "Typical Lead Time Reduction per Initiative",
    },
    toc: {
      tag: "Theory of Constraints", title: "THE", titleAccent: "THEORY OF CONSTRAINTS APPROACH",
      steps: [
        { title: "Identify the Constraint", desc: "We map your entire operation to find the single bottleneck limiting system throughput — the weakest link in the chain." },
        { title: "Exploit the Constraint", desc: "Before adding resources, we extract maximum performance from the constraint with zero additional investment." },
        { title: "Subordinate Everything Else", desc: "All other processes align to support the constraint. We stop optimizing non-bottlenecks that create false efficiency." },
        { title: "Elevate the Constraint", desc: "When necessary, we invest with precision — optimization, capacity or competence — to permanently break the bottleneck." },
        { title: "Repeat & Accelerate", desc: "Constraints can change if we don't keep a firm grip on our business. We install a culture to keep the bottleneck fixed, so the company operates with greater stability." },
      ],
      chartTitle: "Throughput Analysis", chartSubtitle: "FIND THE", chartSubtitleAccent: "BOTTLENECK",
      throughputLabels: ["Input", "Processing", "Welding", "Assembly", "Inspection", "Shipping"],
      bottleneckBold: "Constraint identified:", bottleneck: "Welding at 31% is limiting the entire line. Fixing this single point unlocks the entire system's throughput.",
    },
    financialCompass: {
      tag: "Pont Consultoria Methodology", titleFull: "THE FINANCIAL COMPASS",
      subtitle: "A methodology that connects the Theory of Constraints Throughput Accounting to {bold1} and {bold2} — the missing link between the shop floor and financial control.",
      bold1: "Product Engineering", bold2: "Process Engineering",
      flow: ["Shop Floor", "Financial Compass", "Engineering", "Financial Control"],
      cards: [
        { title: "True Product Profitability", desc: "Which products generate the highest real gain through the constraint — not just the accounting margin." },
        { title: "Optimal Product Mix", desc: "The ideal mix to maximize total throughput given current capacity constraints." },
        { title: "Pricing and Sales Strategy", desc: "Guides pricing and sales priorities based on the real economics of the constraint." },
      ],
    },
    automation: {
      tag: "Our Optimization Philosophy", title1: "DON'T AUTOMATE", title1Accent: "WASTE.", title2: "AUTOMATE", title2Accent: "LEAN PROCESSES.",
      steps: [
        { title: "Map & Expose", desc: "Shingo Value Stream reveals every loss and broken flow in your current process" },
        { title: "Simplify First", desc: "Theory of Constraints + Lean eliminate waste, synchronize flow and streamline to the maximum" },
        { title: "Only Then Automate", desc: "Now we automate — a clean, lean and optimized process — multiplying efficiency, never locking in waste" },
      ],
      quote: "Few companies in the world apply this sequence. Most automate first — and permanently embed their inefficiencies in expensive machines.",
      quoteBold: "We automate lean processes. Never waste.",
    },
    industries: {
      tag: "Who We Serve", title: "TARGET", titleAccent: "INDUSTRIES",
      subtitle: "Deep expertise in manufacturing and industrial sectors with proven methods that translate across verticals.",
      items: [
        { title: "Metal Mechanics", desc: "Machining, turning, milling and metal forming operations in series." },
        { title: "Automotive", desc: "Assembly lines, stamping plants, tier suppliers — rapid throughput improvement." },
        { title: "Aerospace", desc: "High-precision manufacturing and inspection optimization for AS9100 environments." },
        { title: "Industrial Equipment", desc: "Custom machine builders, OEMs and industrial assembly — designed for flow." },
        { title: "Construction Products", desc: "Structural steel, modular building and prefabricated manufacturing optimization." },
        { title: "Electronics Manufacturing", desc: "PCB assembly, electromechanical integration and vision-guided optimization." },
        { title: "Agricultural Implements", desc: "Harvesters, planters, sprayers and soil implements — continuous flow and quality for agribusiness." },
        { title: "Road Implements", desc: "Trailers, semi-trailers and transport bodies — optimized assembly lines and reduced lead time." },
        { title: "Food Industry", desc: "Food processing, packaging and preservation — operational efficiency with rigorous quality and food safety." },
      ],
    },
    whyChoose: {
      tag: "Our Differentials", title: "WHY CHOOSE", titleAccent: "PONT",
      items: [
        { title: "Technical and Business Expertise", desc: "A rare combination of strategic consulting and hands-on industrial optimization. We don't just advise — we implement." },
        { title: "Simplify Before Optimizing", desc: "We never optimize waste. First we eliminate waste with Shingo Value Stream and Theory of Constraints, then we optimize lean processes." },
        { title: "Proven TOC + Toyota System", desc: "Two of the most powerful operational methods combined — delivering measurable results in 90 days or less." },
        { title: "The Financial Compass", desc: "Our methodology connects the shop floor to product engineering, process engineering and financial control." },
        { title: "Technology Agnostic", desc: "We recommend what's right for your situation — robotics, optimization, industrial systems — not what we're paid to sell." },
        { title: "Hands-On Practice", desc: "We understand that if theory differs from practice, then theory is wrong. Things need to work on the factory floor — not just on paper." },
      ],
      quote: '"Every system has a constraint. Every constraint is an opportunity. We exist to turn your greatest limitation into your greatest competitive advantage."',
      quoteAuthor: "Pont Consultoria — Core Belief",
    },
    contact: {
      tag: "Get in Touch", title: "LET'S TALK ABOUT YOUR", titleAccent: "CHALLENGE",
      subtitle: "Tell us about your operation and we'll get back to you within 24 hours. No commitment — just a conversation.",
      fields: { name: { label: "Name", placeholder: "Your full name" }, email: { label: "E-mail", placeholder: "your@email.com" }, company: { label: "Company", placeholder: "Company name" }, message: { label: "Message", placeholder: "Describe your operation and the main challenge you face..." } },
      button: "Send Message", successTitle: "Message Sent!", successSubtitle: "We'll get back to you within 24 hours.",
    },
    footer: { solutionsTitle: "Solutions in\nProduct Engineering", ctaText: "Click here and learn how to transform your manually created projects into a product configurator", copyright: `© ${year} Pont Consultoria. All rights reserved.`, links: ["Services", "Contact"] },
  },

  es: {
    nav: { services: "Servicios", stpLean: "STP & Lean", toc: "Teoría de Restricciones", industries: "Industrias", contact: "Contacto", talkToUs: "Hable con Nosotros" },
    hero: {
      tagline: "PONT CONSULTORIA — BRASIL",
      h1: ["TRANSFORME.", "OPTIMICE."],
      h1Accent: "ACELERE.",
      subtitle: "Transformamos su industria utilizando la Teoría de Restricciones y el Sistema de Producción Toyota.",
      metrics: [{ value: "30%", label: "Ganancia Media de OEE en Equipos Cuello de Botella" }, { value: "60%", label: "Reducción de Desperdicios" }, { value: "90 Días", label: "ROI" }],
    },
    services: {
      tag: "Lo Que Hacemos", title: "NUESTROS", titleAccent: "SERVICIOS",
      subtitle: "Desde la consultoría estratégica de negocios hasta la optimización industrial práctica — soluciones de extremo a extremo que crean ventajas competitivas duraderas.",
      items: [
        { title: "Recuperación Empresarial", desc: "Diagnóstico y transformación rápida de operaciones con bajo rendimiento. Identificamos las restricciones centrales y construimos una hoja de ruta clara hacia resultados extraordinarios.", tags: ["Turnaround", "Impacto en P&L", "Gestión del Cambio"] },
        { title: "Teoría de Restricciones", desc: "Usando el marco de Teoría de Restricciones de Goldratt, identificamos cuellos de botella ocultos y aplicamos los Cinco Pasos de Enfoque para el máximo throughput con mínima inversión.", tags: ["Teoría de Restricciones", "Tambor-Amortiguador-Cuerda", "Cadena Crítica"] },
        { title: "Sistemas de Producción", desc: "Diseño de producción Lean y basado en flujo a medida para su industria. Optimizamos layout, flujo de materiales, programación y planificación de mano de obra.", tags: ["Manufactura Esbelta", "Diseño de Flujo", "Kaizen"] },
      ],
    },
    vsm: {
      tag: "Sistema de Producción Toyota", title: "FLUJO DE VALOR SHINGO &", titleAccent: "IMPLEMENTACIÓN LEAN",
      p1: "Realizamos un análisis profundo de su fábrica usando el Flujo de Valor de Shingo, la herramienta central del Sistema de Producción Toyota creada por Shigeo Shingo — haciendo visible cada pérdida, desperdicio e ineficiencia en todo el flujo productivo.",
      p2: "A partir del MFV, aplicamos el Análisis de Pareto para clasificar y priorizar las mayores pérdidas, concentrando la energía exactamente donde entrega los resultados más rápidos y significativos.",
      diagnosisLabel: "Nuestro diagnóstico revela:",
      diagnosisItems: ["Fallas de Sincronización de Producción — etapas fuera de ritmo", "Pérdidas por Espera — operadores, máquinas y materiales esperando", "Layout Ineficiente — movimiento innecesario y transporte largo", "Sobreproducción & WIP Excesivo — ocultando problemas reales", "Retrabajo & Defectos — fallas de calidad que destruyen el lead time"],
      cards: [
        { title: "MFV del Estado Actual", desc: "Mapeamos todo el flujo de valor tal como existe hoy — cada etapa, cada espera, cada transferencia — desde la materia prima hasta el producto expedido. Todo el desperdicio queda visible." },
        { title: "Análisis de Pérdidas por Pareto", desc: "Cuantificamos cada pérdida en tiempo, costo y capacidad y clasificamos por impacto. El 20% mayor de los problemas causa el 80% del daño — vamos directamente al punto." },
        { title: "Eventos de Mejora Rápida (Kaizen)", desc: "Talleres enfocados de 3–5 días atacando las pérdidas de mayor prioridad. Resultados inmediatos y medibles — sin meses de planificación antes de actuar." },
        { title: "Diseño de Flujo y Sincronismo", desc: "Rediseñamos el flujo de producción para eliminar esperas y sincronizar cada etapa al takt time del cliente — suave, continuo y sin desperdicios." },
        { title: "Optimización de Layout", desc: "Layout físico de la fábrica rediseñado para movimiento mínimo, flujo lógico y gestión visual." },
        { title: "MFV del Estado Futuro", desc: "Diseñamos el estado futuro ideal — un blueprint concreto y ejecutable con lead time drásticamente reducido y máximo flujo de valor." },
      ],
      statLabel: "Reducción Típica de Lead Time por Iniciativa",
    },
    toc: {
      tag: "Teoría de Restricciones", title: "EL ENFOQUE DE LA", titleAccent: "TEORÍA DE RESTRICCIONES",
      steps: [
        { title: "Identificar la Restricción", desc: "Mapeamos toda su operación para encontrar el único cuello de botella que limita el throughput del sistema — el eslabón más débil de la cadena." },
        { title: "Explotar la Restricción", desc: "Antes de agregar recursos, extraemos el máximo rendimiento de la restricción con cero inversión adicional." },
        { title: "Subordinar Todo lo Demás", desc: "Todos los demás procesos se alinean para apoyar la restricción. Dejamos de optimizar no-cuellos de botella que crean eficiencia falsa." },
        { title: "Elevar la Restricción", desc: "Cuando es necesario, invertimos con precisión — optimización, capacidad o competencia — para romper permanentemente el cuello de botella." },
        { title: "Repetir & Acelerar", desc: "Las restricciones pueden cambiar si no mantenemos las riendas de nuestro negocio. Instalamos una cultura para mantener el cuello de botella fijo, para que la empresa funcione con mayor estabilidad." },
      ],
      chartTitle: "Análisis de Throughput", chartSubtitle: "ENCUENTRE EL", chartSubtitleAccent: "CUELLO DE BOTELLA",
      throughputLabels: ["Entrada", "Procesamiento", "Soldadura", "Ensamblaje", "Inspección", "Expedición"],
      bottleneckBold: "Restricción identificada:", bottleneck: "Soldadura al 31% está limitando toda la línea. Corregir este único punto libera el throughput de todo el sistema.",
    },
    financialCompass: {
      tag: "Metodología Pont Consultoria", titleFull: "LA BRÚJULA FINANCIERA",
      subtitle: "Una metodología que conecta la Contabilidad de Ganancias de la Teoría de Restricciones con {bold1} e {bold2} — el eslabón perdido entre el piso de producción y el control financiero.",
      bold1: "Ingeniería de Producto", bold2: "Ingeniería de Proceso",
      flow: ["Piso de Producción", "Brújula Financiera", "Ingeniería", "Control Financiero"],
      cards: [
        { title: "Rentabilidad Real del Producto", desc: "Qué productos generan el mayor beneficio real a través de la restricción — no solo el margen contable." },
        { title: "Mix Óptimo de Productos", desc: "El mix ideal para maximizar el throughput total dadas las restricciones de capacidad actuales." },
        { title: "Estrategia de Precios y Ventas", desc: "Orienta la fijación de precios y las prioridades de ventas basándose en la economía real de la restricción." },
      ],
    },
    automation: {
      tag: "Nuestra Filosofía de Optimización", title1: "NO AUTOMATICE", title1Accent: "DESPERDICIOS.", title2: "AUTOMATICE", title2Accent: "PROCESOS ESBELTOS.",
      steps: [
        { title: "Mapear & Exponer", desc: "El Flujo de Valor de Shingo revela cada pérdida y flujo roto en su proceso actual" },
        { title: "Simplificar Primero", desc: "Teoría de Restricciones + Lean eliminan desperdicios, sincronizan el flujo y optimizan al máximo" },
        { title: "Solo Entonces Automatizar", desc: "Ahora automatizamos — un proceso limpio, esbelto y optimizado — multiplicando la eficiencia, nunca bloqueando desperdicios" },
      ],
      quote: "Pocas empresas en el mundo aplican esta secuencia. La mayoría automatiza primero — e incorpora permanentemente sus ineficiencias en máquinas costosas.",
      quoteBold: "Nosotros automatizamos procesos esbeltos. Nunca desperdicios.",
    },
    industries: {
      tag: "A Quién Servimos", title: "INDUSTRIAS", titleAccent: "OBJETIVO",
      subtitle: "Profunda experiencia en manufactura y sectores industriales con métodos comprobados que se traducen entre verticales.",
      items: [
        { title: "Metal Mecánico", desc: "Mecanizado, torneado, fresado y operaciones de conformación metálica en serie." },
        { title: "Automotriz", desc: "Líneas de ensamblaje, plantas de estampado, proveedores tier — mejora rápida de throughput." },
        { title: "Aeroespacial", desc: "Fabricación de alta precisión y optimización de inspección para entornos AS9100." },
        { title: "Equipos Industriales", desc: "Constructores de máquinas personalizadas, OEMs y ensamblaje industrial — diseñado para el flujo." },
        { title: "Productos de Construcción", desc: "Acero estructural, edificación modular y optimización de manufactura prefabricada." },
        { title: "Fabricación de Electrónica", desc: "Ensamblaje de PCB, integración electromecánica y optimización guiada por visión." },
        { title: "Implementos Agrícolas", desc: "Cosechadoras, sembradoras, pulverizadores e implementos de suelo — flujo continuo y calidad para el agronegocio." },
        { title: "Implementos Viales", desc: "Remolques, semirremolques y carrocerías para transporte — líneas de ensamblaje optimizadas y lead time reducido." },
        { title: "Industria Alimentaria", desc: "Procesamiento, envasado y conservación de alimentos — eficiencia operacional con rigor en calidad e inocuidad alimentaria." },
      ],
    },
    whyChoose: {
      tag: "Nuestros Diferenciales", title: "POR QUÉ ELEGIR", titleAccent: "PONT",
      items: [
        { title: "Experiencia Técnica y de Negocios", desc: "Una combinación rara de consultoría estratégica y optimización industrial práctica. No solo asesoramos — implementamos." },
        { title: "Simplificar Antes de Optimizar", desc: "Nunca optimizamos desperdicios. Primero eliminamos desperdicios con el Flujo de Valor de Shingo y la Teoría de Restricciones, luego optimizamos procesos esbeltos." },
        { title: "TOC + Sistema Toyota Comprobados", desc: "Dos de los métodos operativos más poderosos combinados — entregando resultados medibles en 90 días o menos." },
        { title: "La Brújula Financiera", desc: "Nuestra metodología conecta el piso de producción con la ingeniería de producto, ingeniería de proceso y control financiero." },
        { title: "Agnósticos en Tecnología", desc: "Recomendamos lo que es correcto para su situación — robótica, optimización, sistemas industriales — no lo que nos pagan por vender." },
        { title: "Práctica Hands-On", desc: "Entendemos que si la teoría difiere de la práctica, entonces la teoría está equivocada. Las cosas necesitan funcionar en la fábrica — no solo en el papel." },
      ],
      quote: '"Todo sistema tiene una restricción. Toda restricción es una oportunidad. Existimos para convertir su mayor limitación en su mayor ventaja competitiva."',
      quoteAuthor: "Pont Consultoria — Creencia Central",
    },
    contact: {
      tag: "Póngase en Contacto", title: "HABLEMOS SOBRE SU", titleAccent: "DESAFÍO",
      subtitle: "Cuéntenos sobre su operación y nos pondremos en contacto en 24 horas. Sin compromiso — solo una conversación.",
      fields: { name: { label: "Nombre", placeholder: "Su nombre completo" }, email: { label: "E-mail", placeholder: "su@email.com" }, company: { label: "Empresa", placeholder: "Nombre de la empresa" }, message: { label: "Mensaje", placeholder: "Describa su operación y el principal desafío que enfrenta..." } },
      button: "Enviar Mensaje", successTitle: "¡Mensaje Enviado!", successSubtitle: "Nos pondremos en contacto en 24 horas.",
    },
    footer: { solutionsTitle: "Soluciones en\nIngeniería de Producto", ctaText: "Haga clic aquí y aprenda cómo transformar sus proyectos realizados manualmente en un configurador de productos", copyright: `© ${year} Pont Consultoria. Todos los derechos reservados.`, links: ["Servicios", "Contacto"] },
  },

  de: {
    nav: { services: "Leistungen", stpLean: "STP & Lean", toc: "Engpasstheorie", industries: "Industrien", contact: "Kontakt", talkToUs: "Sprechen Sie mit uns" },
    hero: {
      tagline: "PONT CONSULTORIA — BRASILIEN",
      h1: ["TRANSFORMIEREN.", "OPTIMIEREN."],
      h1Accent: "BESCHLEUNIGEN.",
      subtitle: "Wir transformieren Ihre Industrie mithilfe der Engpasstheorie und des Toyota-Produktionssystems.",
      metrics: [{ value: "30%", label: "Durchschnittlicher OEE-Gewinn an Engpassanlagen" }, { value: "60%", label: "Verschwendungsreduzierung" }, { value: "90 Tage", label: "ROI" }],
    },
    services: {
      tag: "Was Wir Tun", title: "UNSERE", titleAccent: "LEISTUNGEN",
      subtitle: "Von der strategischen Unternehmensberatung bis zur praxisnahen Industrieoptimierung — End-to-End-Lösungen, die dauerhaften Wettbewerbsvorteil schaffen.",
      items: [
        { title: "Unternehmensumkehr", desc: "Schnelle Diagnose und Transformation leistungsschwacher Betriebe. Wir identifizieren die zentralen Engpässe und erstellen einen klaren Fahrplan für außergewöhnliche Ergebnisse.", tags: ["Turnaround", "GuV-Auswirkung", "Änderungsmanagement"] },
        { title: "Engpasstheorie", desc: "Mit Goldratts Engpasstheorie-Framework identifizieren wir versteckte Engpässe und wenden die Fünf Fokussierungsschritte für maximalen Durchsatz mit minimalem Investitionsaufwand an.", tags: ["Engpasstheorie", "Trommel-Puffer-Seil", "Kritische Kette"] },
        { title: "Produktionssysteme", desc: "Lean- und flussbasiertes Produktionsdesign, maßgeschneidert für Ihre Branche. Wir optimieren Layout, Materialfluss, Planung und Personalplanung.", tags: ["Schlanke Fertigung", "Flussdesign", "Kaizen"] },
      ],
    },
    vsm: {
      tag: "Toyota-Produktionssystem", title: "SHINGO-WERTSTROM &", titleAccent: "LEAN-IMPLEMENTIERUNG",
      p1: "Wir führen eine tiefgehende Analyse Ihrer Fabrik mit dem Shingo-Wertstrom durch, dem zentralen Werkzeug des von Shigeo Shingo entwickelten Toyota-Produktionssystems — und machen jeden Verlust, jede Verschwendung und jede Ineffizienz im gesamten Produktionsfluss sichtbar.",
      p2: "Anhand des VSM wenden wir die Pareto-Analyse an, um die größten Verluste zu priorisieren und die Energie genau dort zu konzentrieren, wo sie die schnellsten und bedeutendsten Ergebnisse liefert.",
      diagnosisLabel: "Unsere Diagnose zeigt:",
      diagnosisItems: ["Produktionssynchronisationsfehler — Schritte außer Takt", "Wartezeiten — wartende Bediener, Maschinen und Materialien", "Ineffizientes Layout — unnötige Bewegung und lange Transportwege", "Überproduktion & übermäßiger WIP — echte Probleme verbergen", "Nacharbeit & Fehler — Qualitätsmängel, die die Durchlaufzeit zerstören"],
      cards: [
        { title: "Ist-Zustand VSM", desc: "Wir kartieren den gesamten Wertstrom so wie er heute existiert — jeden Schritt, jede Wartezeit, jede Übergabe — vom Rohmaterial bis zum versandten Produkt. Jede Verschwendung wird sichtbar." },
        { title: "Pareto-Verlustanalyse", desc: "Wir quantifizieren jeden Verlust in Zeit, Kosten und Kapazität und ordnen nach Auswirkung. Die 20% größten Probleme verursachen 80% des Schadens — wir gehen direkt zum Kern." },
        { title: "Schnellverbesserungsereignisse (Kaizen)", desc: "Fokussierte 3–5-tägige Workshops, die die Verluste mit höchster Priorität angreifen. Sofortige, messbare Ergebnisse — ohne monatelange Planung vor der Aktion." },
        { title: "Flussdesign und Synchronisierung", desc: "Wir gestalten den Produktionsfluss neu, um Wartezeiten zu eliminieren und jeden Schritt auf die Kundentaktzeit zu synchronisieren — gleichmäßig, kontinuierlich und verschwendungsfrei." },
        { title: "Layout-Optimierung", desc: "Physisches Fabrik-Layout neu gestaltet für minimale Bewegung, logischen Fluss und visuelle Steuerung." },
        { title: "Soll-Zustand VSM", desc: "Wir zeichnen den idealen Zukunftszustand — einen konkreten, ausführbaren Blueprint mit drastisch reduzierter Durchlaufzeit und maximalem Wertfluss." },
      ],
      statLabel: "Typische Durchlaufzeitreduzierung pro Initiative",
    },
    toc: {
      tag: "Engpasstheorie", title: "DER ANSATZ DER", titleAccent: "ENGPASSTHEORIE",
      steps: [
        { title: "Den Engpass identifizieren", desc: "Wir kartieren Ihren gesamten Betrieb, um den einzigen Engpass zu finden, der den Systemdurchsatz begrenzt — das schwächste Glied in der Kette." },
        { title: "Den Engpass ausnutzen", desc: "Bevor wir Ressourcen hinzufügen, extrahieren wir maximale Leistung aus dem Engpass ohne zusätzliche Investitionen." },
        { title: "Alles andere unterordnen", desc: "Alle anderen Prozesse richten sich auf die Unterstützung des Engpasses aus. Wir hören auf, Nicht-Engpässe zu optimieren, die falsche Effizienz erzeugen." },
        { title: "Den Engpass erhöhen", desc: "Wenn nötig, investieren wir präzise — Optimierung, Kapazität oder Kompetenz — um den Engpass dauerhaft zu beseitigen." },
        { title: "Wiederholen & Beschleunigen", desc: "Engpässe können sich ändern, wenn wir nicht die Zügel unseres Unternehmens in der Hand behalten. Wir installieren eine Kultur, um den Engpass stabil zu halten, damit das Unternehmen mit mehr Stabilität arbeitet." },
      ],
      chartTitle: "Durchsatzanalyse", chartSubtitle: "FINDEN SIE DEN", chartSubtitleAccent: "ENGPASS",
      throughputLabels: ["Eingang", "Verarbeitung", "Schweißen", "Montage", "Inspektion", "Versand"],
      bottleneckBold: "Engpass identifiziert:", bottleneck: "Schweißen bei 31% begrenzt die gesamte Linie. Die Behebung dieses Punktes gibt den Durchsatz des gesamten Systems frei.",
    },
    financialCompass: {
      tag: "Pont Consultoria Methodik", titleFull: "DER FINANZIELLE KOMPASS",
      subtitle: "Eine Methodik, die die Throughput-Buchhaltung der Engpasstheorie mit {bold1} und {bold2} verbindet — das fehlende Glied zwischen Shopfloor und Finanzkontrolle.",
      bold1: "Produktentwicklung", bold2: "Prozessentwicklung",
      flow: ["Shopfloor", "Finanzieller Kompass", "Technik", "Finanzkontrolle"],
      cards: [
        { title: "Echte Produktrentabilität", desc: "Welche Produkte generieren den höchsten realen Gewinn durch den Engpass — nicht nur die buchhalterische Marge." },
        { title: "Optimaler Produktmix", desc: "Der ideale Mix zur Maximierung des Gesamtdurchsatzes bei aktuellen Kapazitätsengpässen." },
        { title: "Preis- und Vertriebsstrategie", desc: "Leitet Preisgestaltung und Vertriebsprioritäten basierend auf der realen Wirtschaftlichkeit des Engpasses." },
      ],
    },
    automation: {
      tag: "Unsere Optimierungsphilosophie", title1: "AUTOMATISIEREN SIE KEINE", title1Accent: "VERSCHWENDUNG.", title2: "AUTOMATISIEREN SIE", title2Accent: "SCHLANKE PROZESSE.",
      steps: [
        { title: "Kartieren & Aufdecken", desc: "Der Shingo-Wertstrom enthüllt jeden Verlust und jeden unterbrochenen Fluss in Ihrem aktuellen Prozess" },
        { title: "Zuerst Vereinfachen", desc: "Engpasstheorie + Lean eliminieren Verschwendung, synchronisieren den Fluss und optimieren auf Maximum" },
        { title: "Erst Dann Automatisieren", desc: "Jetzt automatisieren wir — einen sauberen, schlanken und optimierten Prozess — die Effizienz multiplizieren, nie Verschwendung einschließen" },
      ],
      quote: "Wenige Unternehmen weltweit wenden diese Reihenfolge an. Die meisten automatisieren zuerst — und verankern dauerhaft ihre Ineffizienzen in teuren Maschinen.",
      quoteBold: "Wir automatisieren schlanke Prozesse. Niemals Verschwendung.",
    },
    industries: {
      tag: "Wen Wir Betreuen", title: "ZIEL", titleAccent: "INDUSTRIEN",
      subtitle: "Tiefgehende Expertise in Fertigung und Industriesektoren mit bewährten Methoden, die branchenübergreifend funktionieren.",
      items: [
        { title: "Metallmechanik", desc: "Zerspanungs-, Dreh-, Fräs- und Umformungsoperationen in Serie." },
        { title: "Automobil", desc: "Montagelinien, Stanzwerke, Tier-Lieferanten — schnelle Durchsatzverbesserung." },
        { title: "Luft- und Raumfahrt", desc: "Hochpräzisionsfertigung und Inspektionsoptimierung für AS9100-Umgebungen." },
        { title: "Industrielle Ausrüstung", desc: "Sondermaschinen-Hersteller, OEMs und Industriemontage — für Fluss konzipiert." },
        { title: "Bauprodukte", desc: "Baustahl, modulares Bauen und Optimierung der Vorfertigung." },
        { title: "Elektronikfertigung", desc: "Leiterplattenmontage, elektromechanische Integration und sensorgeführte Optimierung." },
        { title: "Landwirtschaftliche Geräte", desc: "Erntemaschinen, Sämaschinen, Sprühgeräte und Bodenbearbeitungsgeräte — kontinuierlicher Fluss und Qualität für die Agrarindustrie." },
        { title: "Straßenfahrzeugaufbauten", desc: "Anhänger, Sattelauflieger und Transportaufbauten — optimierte Montagelinien und reduzierte Durchlaufzeit." },
        { title: "Lebensmittelindustrie", desc: "Lebensmittelverarbeitung, Verpackung und Konservierung — operative Effizienz mit strengen Qualitäts- und Lebensmittelsicherheitsstandards." },
      ],
    },
    whyChoose: {
      tag: "Unsere Differenzierungsmerkmale", title: "WARUM", titleAccent: "PONT WÄHLEN",
      items: [
        { title: "Technische und Geschäftsexpertise", desc: "Eine seltene Kombination aus strategischer Beratung und praxisnaher Industrieoptimierung. Wir beraten nicht nur — wir implementieren." },
        { title: "Vereinfachen Vor dem Optimieren", desc: "Wir optimieren niemals Verschwendung. Erst eliminieren wir Verschwendung mit Shingo-Wertstrom und Engpasstheorie, dann optimieren wir schlanke Prozesse." },
        { title: "Bewährte TOC + Toyota-System", desc: "Zwei der wirkungsvollsten betrieblichen Methoden kombiniert — messbare Ergebnisse in 90 Tagen oder weniger." },
        { title: "Der Finanzielle Kompass", desc: "Unsere Methodik verbindet den Shopfloor mit Produktentwicklung, Prozessentwicklung und Finanzkontrolle." },
        { title: "Technologieneutral", desc: "Wir empfehlen, was für Ihre Situation richtig ist — Robotik, Optimierung, Industriesysteme — nicht was wir verkaufen sollen." },
        { title: "Praxisnahe Umsetzung", desc: "Wir verstehen: Wenn Theorie von der Praxis abweicht, ist die Theorie falsch. Die Dinge müssen in der Fabrikhalle funktionieren — nicht nur auf dem Papier." },
      ],
      quote: '"Jedes System hat einen Engpass. Jeder Engpass ist eine Chance. Wir existieren, um Ihre größte Einschränkung in Ihren größten Wettbewerbsvorteil zu verwandeln."',
      quoteAuthor: "Pont Consultoria — Grundüberzeugung",
    },
    contact: {
      tag: "Kontakt aufnehmen", title: "SPRECHEN WIR ÜBER IHRE", titleAccent: "HERAUSFORDERUNG",
      subtitle: "Erzählen Sie uns von Ihrer Operation und wir melden uns innerhalb von 24 Stunden. Keine Verpflichtung — nur ein Gespräch.",
      fields: { name: { label: "Name", placeholder: "Ihr vollständiger Name" }, email: { label: "E-Mail", placeholder: "ihre@email.com" }, company: { label: "Unternehmen", placeholder: "Unternehmensname" }, message: { label: "Nachricht", placeholder: "Beschreiben Sie Ihren Betrieb und die Hauptherausforderung, der Sie gegenüberstehen..." } },
      button: "Nachricht senden", successTitle: "Nachricht gesendet!", successSubtitle: "Wir melden uns innerhalb von 24 Stunden.",
    },
    footer: { solutionsTitle: "Lösungen in der\nProduktentwicklung", ctaText: "Klicken Sie hier und erfahren Sie, wie Sie Ihre manuell erstellten Projekte in einen Produktkonfigurator verwandeln", copyright: `© ${year} Pont Consultoria. Alle Rechte vorbehalten.`, links: ["Leistungen", "Kontakt"] },
  },
};
