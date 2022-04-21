/**
 * Definition of categories, subcategories and special categories:
 * {category: [subCategory: specialCategory, ...], ...}
 */
export const categories = {
  Theory: {
    "High-Energy Physics": {
      "Quantum Chromodynamics": { questions: [] },
      "Quantum Electrodynamics": { questions: [] },
      "...": { questions: [] },
      questions: [],
    },
    Astrophysics: {
      "Neutron Stars": { questions: [] },
      "...": { questions: [] },
      questions: [],
    },
    Cosmology: { Inflation: { questions: [] }, "...": { questions: [] } },
    "Condensed Matter": {
      Superconductivity: { questions: [] },
      "...": { questions: [] },
      questions: [],
    },
    "Classical Mechanics": { "Lagrangian Mechanics": { questions: [] }, questions: [] },
    "...": { "...": { questions: [] } },
  },
  Experiment: {
    Thermodynamics: { "": { questions: [] }, questions: [] },
    "Classical Mechanics": { "": { questions: [] }, questions: [] },
    "Quantum Mechanics": { "": { questions: [] }, questions: [] },
    "...": { "": { questions: [] }, questions: [] },
  },
  Mathematics: {
    Geometry: { "": { questions: [] }, questions: [] },
    Stochastic: { "": { questions: [] }, questions: [] },
    "Linear Algebra": { "": { questions: [] }, questions: [] },
    "...": { "": { questions: [] }, questions: [] },
  },
  Philosophy: {
    Ontology: { "": { questions: [] }, questions: [] },
    Epistemeology: { "": { questions: [] }, questions: [] },
    "...": { "": { questions: [] }, questions: [] },
  },
  Fun: {
    "Brain Teaser": { "": { questions: [] }, questions: [] },
    "What if?": { "": { questions: [] }, questions: [] },
    "...": { "": { questions: [] }, questions: [] },
  },
  Other: {
    Biophysics: { "": { questions: [] }, questions: [] },
    "Computational Physics": { "": { questions: [] }, questions: [] },
    "...": { "": { questions: [] }, questions: [] },
  },
}

export default categories
