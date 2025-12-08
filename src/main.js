import { projects } from './data/projects.js';
import { renderProjects } from './ui/projectsRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Only render projects if the project-list element exists
  const projectList = document.getElementById('project-list');
  if (projectList) {
    renderProjects('project-list', projects);
  }

  // Theme toggle: make robust in case the element is missing
  const checkbox = document.getElementById('theme-toggle');
  if (!checkbox) return;

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    try { checkbox.checked = true; } catch (e) { /* ignore */ }
  }

  checkbox.addEventListener('change', () => {
    const theme = checkbox.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});