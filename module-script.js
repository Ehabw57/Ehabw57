import { skillCategories, projects, tags, translations } from './data.js';

// Get current language
function getCurrentLang() {
  return document.documentElement.getAttribute('lang') || 'en';
}

// Get translation
function t(key) {
  const lang = getCurrentLang();
  const keys = key.split('.');
  let value = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

function createSkillList(items){
  return items.map(skillName=>`<li>${skillName}</li>`).join('');
}

function createProjectTags(projectTags){
  return projectTags.map(tagName=>{
    const tag = tags.find(t => t.name === tagName);
    if(tag){
      return `<li style="background: ${tag.background}; color: ${tag.color}; border: none;">${tagName}</li>`;
    }
    return `<li>${tagName}</li>`;
  }).join('');
}

function renderSkills(){
  const container = document.getElementById('skillsContainer');
  if(!container) return;
  const sections = [
    { key:'frontend', titleKey:'skills.categories.frontend' },
    { key:'backend', titleKey:'skills.categories.backend' },
    { key:'database', titleKey:'skills.categories.database' },
    { key:'tools', titleKey:'skills.categories.tools' },
  ];
  container.innerHTML = sections.map(({key,titleKey})=>`
    <article class="skill-card">
    <h3>${t(titleKey)}</h3>
    <ul class="pill-list">${createSkillList(skillCategories[key] || [])}</ul>
    </article>
    `).join('');
}

function renderProjects(){
  const grid = document.getElementById('projects');
  if(!grid) return;
  const lang = getCurrentLang();
  const projectItems = translations[lang].projects.items;
  
  grid.innerHTML = projects.map((p, index) => `
    <article class="card">
    <div style="background-image: url('${p.image}');" class="card-media"></div>
    <div class="card-body">
    <h3>${projectItems[index]?.title || p.title}</h3>
    <p>${projectItems[index]?.description || p.description}</p>
    <ul class="tag-list">${createProjectTags(p.tags || [])}</ul>
    </div>
    <div class="card-actions">
    ${p.live ? `<a class="button small primary" href="${p.live}" target="_blank"><i class="fa-solid fa-up-right-from-square"></i>${t('projects.buttons.live')}</a>` : ''}
    ${p.github ? `<a class="button small" href="${p.github}" target="_blank"><i class="fab fa-github"></i> ${t('projects.buttons.github')}</a>` : ''}
    ${p.demo ? `<a class="button small" href="${p.demo}" target="_blank"><i class="fa-solid fa-circle-play"></i>${t('projects.buttons.demo')}</a>` : ''}
    </div>
    </article>
    `).join('');
}

// Export render functions so they can be called when language changes
window.renderSkills = renderSkills;
window.renderProjects = renderProjects;

renderSkills();
renderProjects();


