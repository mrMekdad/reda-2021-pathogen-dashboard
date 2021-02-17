// Red@ entrypoint for Pathogen Dashboard
const root = document.getElementById('app');
const state = { project: 'pathogen-dashboard', author: 'Red@', theme: 'bioinformatics', milestones: 3 };
if (root) root.textContent = JSON.stringify(state, null, 2);
