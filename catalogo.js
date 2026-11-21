const pages = 'https://cmasudd.github.io/';
const github = 'https://github.com/cmasudd/';
const projects = [
  ['Aire Aysén', 'aireAysen', 'Calidad del aire', 'Portal de material particulado en Coyhaique, Región de Aysén.'],
  ['El Aire que Respiramos', 'aireaconcagua', 'Calidad del aire', 'Información sobre el aire en el Valle de Aconcagua.'],
  ['Estación HiriPro', 'HIRI232', 'Calidad del aire', 'Visualización de mediciones de material particulado de la estación HiriPro.'],
  ['AUCA Cochrane', 'auca-cochrane', 'Monitoreo ambiental', 'Plataforma de monitoreo ambiental y datos horarios de sensores en Cochrane.'],
  ['Calidad y nivel de agua', 'calidadAgua', 'Agua', 'Visualización y descarga de mediciones de sensores de calidad y nivel de agua.'],
  ['Voluntarios por el Agua', 'voluntariosxagua', 'Agua', 'Iniciativa Voluntarios por el Agua en el Cajón del Maipo.'],
  ['Agua y minerales críticos', 'giz', 'Agua', 'Presentación sobre agua, minerales críticos y seguridad de suministro para GIZ 2026.'],
  ['Analizador de sección de cables', 'analizadorDeseccionCables', 'Herramientas', 'Herramienta web para analizar la sección de cables. Repositorio derivado de otro proyecto.'],
];
const query = document.getElementById('query');
const category = document.getElementById('category');
const results = document.getElementById('projects');
const count = document.getElementById('count');
const normalize = value => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
for (const theme of [...new Set(projects.map(project => project[2]))].sort()) {
  category.add(new Option(theme, theme));
}

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

function render() {
  const terms = normalize(query.value.trim()).split(/\s+/);
  const visible = projects.filter(project =>
    (!category.value || project[2] === category.value) &&
    terms.every(term => normalize(project.join(' ')).includes(term))
  );
  count.textContent = visible.length === 1 ? '1 proyecto' : visible.length + ' proyectos';
  results.replaceChildren();
  if (!visible.length) {
    results.append(element('p', 'No hay proyectos que coincidan con tu búsqueda.'));
    return;
  }
  for (const [title, repo, theme, description] of visible) {
    const article = element('article', '', 'card');
    const actions = element('div', '', 'actions');
    actions.append(
      link('Visitar sitio', pages + repo + '/', title, 'visit'),
      link('Ver repositorio', github + repo, title)
    );
    article.append(element('p', theme, 'theme'), element('h3', title), element('p', description), actions);
    results.append(article);
  }
}
query.addEventListener('input', render);
category.addEventListener('change', render);
render();
