// Smaller / applied projects, separate from the three flagship research
// narratives in research.js. status: active | completed | prototype

export const projects = [
  {
    slug: "malware-cnn",
    title: "Malware Family Detection via Deep-Learning CNNs",
    oneLiner:
      "Converting binary executables into images and classifying malware families with a CNN, using Grad-CAM for interpretability.",
    contribution: "Lead Researcher, in collaboration with Grand Canyon University.",
    methods: ["Convolutional Neural Networks", "Grad-CAM", "Binary-to-image conversion"],
    affiliation: "Grand Canyon University",
    status: "active",
    statusLabel: "Active",
    dateRange: "December 2025 – Present",
    result: "Awarded Best at Fair and Best in Category.",
    tags: ["Machine Learning", "Cybersecurity", "Computer Vision"],
  },
  {
    slug: "fibrin-microgravity",
    title: "Fibrin Clot Architecture in Microgravity",
    oneLiner:
      "A Student Spaceflight Experiments Program study on whether microgravity weakens fibrin clot formation.",
    contribution:
      "Co-Principal Investigator; developed the full experimental protocol, materials plan, and analysis framework. Led a team of 5.",
    methods: ["Experimental design", "ISS Type 3 FME protocol development"],
    affiliation: "Student Spaceflight Experiments Program (SSEP)",
    status: "active",
    statusLabel: "Active",
    dateRange: "August 2025 – Present",
    result: "Top 3 nationally; national finalist.",
    tags: ["Biomedical", "Spaceflight", "Experimental Design"],
  },
  {
    slug: "black-hole-simulation",
    title: "Relativistic Black Hole Structure Reconstruction",
    oneLiner:
      "2D/3D simulations of accretion disks and event horizons built from NASA Hubble and Harvard research data.",
    contribution: "Individual project.",
    methods: ["Python", "Scientific computing", "Data validation"],
    affiliation: null,
    status: "completed",
    statusLabel: "Completed",
    dateRange: "June 2025 – August 2025",
    result: null,
    tags: ["Astrophysics", "Scientific Computing", "Simulation"],
  },
  {
    slug: "project-echo",
    title: "Project ECHO — ECG Image-to-Signal Extraction",
    oneLiner:
      "A Java pipeline that extracts 2D ECG waveforms from images and performs heuristic rhythm classification.",
    contribution: "Built the image preprocessing, QRS-detection, and rhythm-classification pipeline. Worked with another high schooler.",
    methods: ["Image preprocessing", "Peak detection", "Signal processing"],
    affiliation: null,
    status: "completed",
    statusLabel: "Completed",
    dateRange: "October 2025 – November 2025",
    result: null,
    tags: ["Signal Processing", "Biomedical", "Java"],
    links: { code: "https://github.com/aaravshandilya/CSA_EKG" },
  },
  {
    slug: "captivity-tech",
    title: "Technology Interventions for Animals in Captivity",
    oneLiner:
      "An analysis of welfare problems facing animals held in institutions like zoos, and where technology could help.",
    contribution: "Team project with 3 other high schoolers.",
    methods: ["Literature review", "Applied analysis"],
    affiliation: null,
    status: "completed",
    statusLabel: "Completed",
    dateRange: "November 2025 – February 2026",
    result: null,
    tags: ["Applied Research", "Animal Welfare"],
  },
];
