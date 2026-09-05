// Verified against the live SSRN listing (fetched during site build).
// Do not add a "peer-reviewed" label — SSRN shows this as a preprint.

export const publications = [
  {
    title:
      "Quantum and Classical Machine Learning for Predicting Platinum Chemotherapy Response Using COSMIC Mutational Signatures",
    authors: "Aarav Shandilya",
    affiliations: [
      "University of Oxford, Computing Laboratory",
      "Arizona State University, W.P. Carey School of Business",
    ],
    abstract:
      "Platinum-based chemotherapy shows variable patient response due to genomic differences. This study examines whether COSMIC Single Base Substitution mutational signatures from TCGA whole-exome data can predict platinum chemotherapy response using classical and quantum machine learning. Mutation data from breast, lung, and ovarian cancer cohorts were processed into patient-level signature profiles, used as input features for Logistic Regression, Random Forest, XGBoost, and a Quantum Support Vector Classifier. The framework employs stratified cross-validation with identical preprocessing across all models to evaluate performance differences reflecting algorithmic behavior rather than data-handling inconsistencies.",
    status: "Preprint",
    postedDate: "September 2, 2026",
    doi: "10.2139/ssrn.7335979",
    ssrnUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7335979",
    keywords: ["Quantum Computing", "Cancer", "Genomics", "Tumors", "Machine Learning"],
    bibtex: `@misc{shandilya2026platinum,
  title        = {Quantum and Classical Machine Learning for Predicting Platinum Chemotherapy Response Using COSMIC Mutational Signatures},
  author       = {Shandilya, Aarav},
  year         = {2026},
  month        = {9},
  note         = {SSRN Preprint},
  doi          = {10.2139/ssrn.7335979},
  url          = {https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7335979}
}`,
  },
];
