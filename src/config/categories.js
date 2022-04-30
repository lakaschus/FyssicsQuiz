/**
 * Definition of categories, subcategories and special categories:
 * {category: [subCategory: specialCategory, ...], ...}
 */
export const categories = {
  Theory: {
    'High-Energy Physics': {
      'Quantum Chromodynamics': { questions: [] },
      'Quantum Electrodynamics': { questions: [] },
      'Standard Model': { questions: [] },
      'Effective Field Theories': { questions: [] },
      'Quantum Gravity': { questions: [] },
      'Dark Matter': { questions: [] },
      questions: []
    },
    Astrophysics: {
      'High-Energy Astrophysics': { questions: [] },
      'Solar and Stellar Astrophysics': { questions: [] },
      Astrobiology: { questions: [] },
      questions: []
    },
    Cosmology: {
      Inflation: { questions: [] },
      'Big Bang': { questions: [] },
      'Dark Energy': { questions: [] },
      'Modified Gravity': { questions: [] },
      'Gravitational Waves': { questions: [] },
      questions: []
    },
    'Condensed Matter': {
      Superconductivity: { questions: [] },
      'Phase Transitions': { questions: [] },
      Emergence: { questions: [] },
      'Soft Matter': { questions: [] },
      questions: []
    },
    'Classical Mechanics': {
      'Lagrangian Mechanics': { questions: [] },
      'Hamiltonian Mechanics': { questions: [] },
      Kinematics: { questions: [] },
      Kinetics: { questions: [] },
      questions: []
    },
    'Classical Field Theory': {
      'Newtonian Gravitation': { questions: [] },
      Electromagnetism: { questions: [] },
      'Continuum mechanics': { questions: [] },
      questions: []
    },
    Relativity: {
      'Special Relativity': { questions: [] },
      'General Relativity': { questions: [] },
      questions: []
    },
    'Quantum Mechanics': {
      'Quantum Computing': { questions: [] },
      'Schrödinger equation': { questions: [] },
      'Interpretations of Quantum Mechanics': { questions: [] },
      questions: []
    },
    questions: []
  },
  Experiment: {
    Thermodynamics: { '': { questions: [] }, questions: [] },
    'Classical Mechanics': { '': { questions: [] }, questions: [] },
    'Quantum Mechanics': { '': { questions: [] }, questions: [] },
    questions: []
  },
  Mathematics: {
    'Real Analysis': { questions: [] },
    Geometry: { questions: [] },
    Stochastic: { questions: [] },
    'Number Theory': { questions: [] },
    'Linear Algebra': { questions: [] },
    'Complex Analysis': { questions: [] },
    questions: []
  },
  Philosophy: {
    Ontology: { questions: [] },
    Epistemology: { questions: [] },
    Logic: { questions: [] },
    'Philosophy of Science': { questions: [] },
    questions: []
  },
  'History Of Physics': {
    questions: []
  },
  Fun: {
    'Brain Teaser': { questions: [] },
    'What if?': { questions: [] },
    questions: []
  },
  Other: {
    'Computational Physics': { questions: [] },
    questions: []
  }
}

export default categories
