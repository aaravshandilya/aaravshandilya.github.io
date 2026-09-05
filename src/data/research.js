// Flagship research narratives. Every claim here is traceable to the résumé
// or the SSRN listing fetched during content research — see README.
// status: "active" | "completed" | "reproduction" | "prototype" | "conceptual"

export const research = [
  {
    slug: "supply-chain-qubo",
    title: "Quantum Optimization for Supply-Chain Systems",
    oneLiner:
      "Modeling supply-chain routing decisions as binary optimization problems and benchmarking classical solvers against quantum-inspired annealing.",
    contribution:
      "Led implementation, analysis, and evaluation of optimization strategies; developed CPLEX and quantum annealing models for Traveling Salesman Problem instances; created and curated benchmark datasets; co-authored the majority of the accompanying paper.",
    description: `This project reformulates supply-chain routing decisions — starting with the Traveling Salesman Problem as a tractable proxy for larger routing and logistics questions — as Quadratic and Higher-Order Unconstrained Binary Optimization (QUBO / HUBO) problems. The goal is to understand where classical exact solvers (CPLEX), and quantum-inspired annealing methods, each hold an advantage as problem size and constraint complexity grow.

Work has included building CPLEX baselines, formulating quantum annealing models, and curating datasets for benchmarking solution quality and computational efficiency across approaches. The research was conducted through the Arizona State University SCENE mentorship program, in collaboration with Dell Technologies and ASU faculty and researchers.`,
    affiliation: "Arizona State University · Dell Technologies",
    affiliationNote:
      "Research conducted through the ASU SCENE mentorship program; Dell Technologies researchers and professors collaborated on methodology and review.",
    status: "active",
    statusLabel: "Active research",
    dateRange: "June 2025 – Present",
    methods: ["QUBO / HUBO formulation", "CPLEX", "Quantum-inspired annealing", "Benchmark dataset design"],
    tags: ["Optimization", "Quantum-Inspired Computing", "Operations Research"],
    keyResult: null,
    links: {
      code: "https://github.com/aaravshandilya/HUBO_SCENE",
    },
    visualNote:
      "conceptual supply-chain network diagram (original, non-data)",
  },
  {
    slug: "platinum-qml",
    title: "Quantum & Classical Machine Learning for Chemotherapy Response",
    oneLiner:
      "Comparing classical and quantum machine-learning models on whether COSMIC mutational signatures can predict platinum chemotherapy response.",
    contribution:
      "Primary author. Designed the feature-extraction pipeline from TCGA mutation data, implemented and evaluated the classical and quantum models, and wrote the paper.",
    description: `This study asks whether COSMIC Single Base Substitution (SBS) mutational signatures, derived from TCGA whole-exome sequencing data across breast, lung, and ovarian cancer cohorts, can predict a patient's response to platinum-based chemotherapy — and whether a quantum machine-learning model behaves differently from classical ones on this task.

Patient-level mutational signature profiles were used as input features for four models: Logistic Regression, Random Forest, XGBoost, and a Quantum Support Vector Classifier built on a quantum kernel. All models were evaluated with stratified cross-validation and identical preprocessing, so that performance differences reflect algorithmic behavior rather than inconsistent data handling. The study's aim is comparative — it does not claim quantum advantage over classical methods.`,
    affiliation: "University of Oxford · Arizona State University",
    affiliationNote:
      "Author affiliations listed on the SSRN posting: University of Oxford, Computing Laboratory, and Arizona State University, W.P. Carey School of Business.",
    status: "completed",
    statusLabel: "Preprint posted",
    dateRange: "Posted September 2026",
    methods: [
      "Logistic Regression",
      "Random Forest",
      "XGBoost",
      "Quantum Support Vector Classification",
      "Quantum kernels",
      "Stratified cross-validation",
    ],
    tags: ["Quantum Machine Learning", "Computational Biology", "Genomics", "Oncology"],
    keyResult: null,
    links: {
      paper: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7335979",
    },
    isPublication: true,
    visualNote: "research pipeline diagram (original, non-data)",
  },
  {
    slug: "pangenome-hubo",
    title: "Pangenome Graph Optimization Pipeline",
    oneLiner:
      "Formulating pangenome graph structures as higher-order optimization problems that fit within near-term quantum hardware constraints.",
    contribution:
      "Formulated and implemented higher-order optimization models representing pangenome graph structures, focused on reducing variable footprints to fit quantum hardware constraints.",
    description: `Pangenome graphs represent genetic variation across many individuals' genomes at once, rather than aligning everything to a single reference — which makes problems like sequence assembly and read mapping across the graph combinatorially harder. This project investigates applying quantum optimization methods to these NP-hard bioinformatics problems, specifically pangenome sequence assembly.

The core technical challenge is representation: pangenome graph structures need to be encoded as higher-order binary optimization (HUBO) models compactly enough to fit the variable budgets of current quantum and quantum-inspired hardware, then quadratized where needed for solvers that only accept quadratic terms. The work aims to bridge theoretical quantum algorithms with practical genomic workflows to improve the scalability of graph traversal and sequence alignment. Conducted as part of a research lead / intern role at the University of Oxford.`,
    affiliation: "University of Oxford",
    affiliationNote: "Research Lead & Intern position, University of Oxford.",
    status: "active",
    statusLabel: "Active research",
    dateRange: "April 2026 – Present",
    methods: ["HUBO formulation", "Quadratization", "Simulated annealing", "Pangenome graph construction"],
    tags: ["Quantum Optimization", "Computational Biology", "Genomics"],
    keyResult: null,
    links: {
      code: "https://github.com/aaravshandilya/PangenomeHUBOPipeline",
    },
    visualNote: "pangenome graph / workflow diagram (original, non-data)",
  },
];
