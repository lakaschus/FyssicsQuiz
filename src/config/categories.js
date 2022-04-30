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
      '...': { questions: [] },
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
    }
  },
  Experiment: {
    Thermodynamics: { '': { questions: [] }, questions: [] },
    'Classical Mechanics': { '': { questions: [] }, questions: [] },
    'Quantum Mechanics': { '': { questions: [] }, questions: [] },
    '...': { '': { questions: [] }, questions: [] }
  },
  Mathematics: {
    Geometry: { '': { questions: [] }, questions: [] },
    Stochastic: { '': { questions: [] }, questions: [] },
    'Linear Algebra': { '': { questions: [] }, questions: [] },
    '...': { '': { questions: [] }, questions: [] }
  },
  Philosophy: {
    Ontology: { '': { questions: [] }, questions: [] },
    Epistemeology: { '': { questions: [] }, questions: [] },
    '...': { '': { questions: [] }, questions: [] }
  },
  Fun: {
    'Brain Teaser': { '': { questions: [] }, questions: [] },
    'What if?': { '': { questions: [] }, questions: [] },
    '...': { '': { questions: [] }, questions: [] }
  },
  Other: {
    Biophysics: { '': { questions: [] }, questions: [] },
    'Computational Physics': { '': { questions: [] }, questions: [] },
    '...': { '': { questions: [] }, questions: [] }
  }
}

export default categories
