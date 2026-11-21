const pages = 'https://cmasudd.github.io/';
const github = 'https://github.com/cmasudd/';
const query = document.getElementById('query');
const category = document.getElementById('category');
const results = document.getElementById('projects');
const count = document.getElementById('count');
const normalize = value => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();


function element(tag, content, className) {
  const node = document.createElement(tag);
  node.textContent = content;
  if (className) node.className = className;
  return node;
}

function link(label, url, title, className) {
  const node = element('a', label, className);
  node.href = url;
  node.setAttribute('aria-label', label + ' · ' + title);
  return node;
}

function render(projects) {
  const terms = normalize(query.value.trim()).split(/\s+/);
  const visible = projects.filter(project =>
    (!category.value || project.theme === category.value) &&
    terms.every(term => normalize([project.title, project.repo, project.theme, project.description].join(' ')).includes(term))
  );
  count.textContent = visible.length === 1 ? '1 proyecto' : visible.length + ' proyectos';
  results.replaceChildren();
  if (!visible.length) {
    results.append(element('p', 'No hay proyectos que coincidan con tu búsqueda.'));
    return;
  }
  for (const { title, repo, theme, description, preview: thumbnail, url } of visible) {
    const article = element('article', '', 'card');
    const website = url || pages + repo + '/';
    if (thumbnail) {
      const preview = link('Abrir vista del sitio', website, title, 'preview');
      preview.textContent = '';
      const image = element('img', '');
      image.src = thumbnail;
      image.alt = '';
      image.width = 720;
      image.height = 480;
      image.loading = 'lazy';
      image.addEventListener('error', () => preview.remove());
      preview.append(image);
      article.append(preview);
    }
    const details = element('div', '', 'card-details');
    const actions = element('div', '', 'actions');
    actions.append(
      link('Visitar sitio', website, title, 'visit'),
      link('Ver repositorio', github + repo, title)
    );
    details.append(element('p', theme, 'theme'), element('h3', title), element('p', description), actions);
    article.append(details);
    results.append(article);
  }
}
async function loadCatalog() {
  try {
    const response = await fetch('proyectos.json');
    if (!response.ok) throw new Error('No se pudo leer el catálogo');
    const projects = await response.json();
    for (const theme of [...new Set(projects.map(project => project.theme))].sort()) {
      category.add(new Option(theme, theme));
    }
    query.addEventListener('input', () => render(projects));
    category.addEventListener('change', () => render(projects));
    render(projects);
  } catch {
    count.textContent = 'El catálogo no está disponible en este momento.';
  }
}

loadCatalog();
