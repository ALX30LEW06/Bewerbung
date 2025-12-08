function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderProjects(targetId, projects) {
  const list = document.getElementById(targetId);
  if (!list) return;
  list.innerHTML = '';
  projects.forEach(p => {
    const li = document.createElement('li');
    if (p.url) {
      const a = document.createElement('a');
      // Use relative URLs directly - they work as-is from index.html
      a.href = p.url;
      a.className = 'project-link';
      a.innerHTML = `<b>${escapeHtml(p.title)}</b>`;
      // Debug log to help diagnose navigation
      console.debug('Project link created:', { title: p.title, url: p.url });
      li.appendChild(a);
      li.insertAdjacentHTML('beforeend', `: ${escapeHtml(p.desc)}`);
    } else {
      li.innerHTML = `<b>${escapeHtml(p.title)}</b>: ${escapeHtml(p.desc)}`;
    }
    list.appendChild(li);
  });
}
