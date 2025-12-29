/**
 * Data Loader Module
 * Dynamically populates the portfolio HTML with data from constants.js
 */

import { cvData } from './constants.js';

/**
 * Populates the About/Hero section
 */
function populateAbout() {
  // Profile image
  const profileImg = document.querySelector('#about img');
  if (profileImg) {
    profileImg.src = cvData.profileImage;
    profileImg.alt = cvData.name;
  }

  // Name
  const nameElement = document.querySelector('#about h1');
  if (nameElement) {
    nameElement.textContent = cvData.name;
  }

  // Role
  const roleElement = document.querySelector('#about p.text-xl');
  if (roleElement) {
    roleElement.textContent = cvData.role;
  }

  // Specialties badges
  const specialtiesContainer = document.querySelector('#about .flex.flex-wrap.gap-2');
  if (specialtiesContainer) {
    specialtiesContainer.innerHTML = cvData.specialties.map(specialty => `
      <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium uppercase tracking-wide">${specialty}</span>
    `).join('');
  }

  // Contact email
  const emailLink = document.querySelector('#about a[href^="mailto:"]');
  if (emailLink) {
    emailLink.href = `mailto:${cvData.contact.email}`;
  }

  // GitHub link
  const githubLink = document.querySelector('#about a[href*="github"]');
  if (githubLink) {
    githubLink.href = `https://github.com/${cvData.contact.github}`;
  }

  // LinkedIn link
  const linkedinLink = document.querySelector('#about a[href*="linkedin"]');
  if (linkedinLink) {
    linkedinLink.href = `https://linkedin.com/in/${cvData.contact.linkedin}`;
  }
}

/**
 * Populates the Experience section
 */
function populateExperience() {
  const experienceContainer = document.querySelector('#experience .space-y-12');
  if (!experienceContainer) return;

  experienceContainer.innerHTML = cvData.experience.map(exp => `
    <div class="relative pl-8 md:pl-12">
      <div class="timeline-dot"></div>
      <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">${exp.role}</h3>
        <span class="text-sm font-medium text-primary-500 dark:text-primary-400 whitespace-nowrap mt-1 sm:mt-0 px-3 py-1 bg-primary-50 dark:bg-slate-800 rounded-full">${exp.period}</span>
      </div>
      <div class="mb-4">
        <p class="text-gray-700 dark:text-gray-300 font-semibold text-lg">${exp.company}</p>
        <p class="text-gray-500 dark:text-gray-400 text-sm">${exp.location}</p>
      </div>
      <ul class="space-y-2">
        ${exp.details.map(detail => `
          <li class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base flex items-start gap-2">
            <span class="text-primary-400 mt-1.5 text-xs">●</span>${detail}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/**
 * Populates the Education section
 */
function populateEducation() {
  // Find the education container (left column)
  const educationContainer = document.querySelector('#education .space-y-6');
  if (!educationContainer) return;

  educationContainer.innerHTML = cvData.education.map(edu => `
    <div class="pl-4 border-l-2 border-primary-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 cursor-pointer hover:pl-6">
      <h3 class="font-bold text-gray-900 dark:text-white text-lg">${edu.institution}</h3>
      <p class="text-primary-600 dark:text-primary-400 font-medium text-sm mb-1">${edu.degree}</p>
      <div class="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span>${edu.period}</span>
        <span>${edu.location}</span>
      </div>
      <div class="bg-white dark:bg-slate-800 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-slate-700">
        <p><span class="font-semibold text-gray-900 dark:text-gray-100">GPA:</span> ${edu.gpa}</p>
        <p class="mt-1"><span class="font-semibold text-gray-900 dark:text-gray-100">Thesis:</span> ${edu.thesis}</p>
      </div>
    </div>
  `).join('');

  // Populate Awards (right column) - find by searching for the awards section
  const awardsSection = Array.from(document.querySelectorAll('#education h2')).find(h2 => h2.textContent === 'Awards');
  if (awardsSection) {
    const awardsContainer = awardsSection.parentElement.nextElementSibling;
    if (awardsContainer) {
      awardsContainer.innerHTML = cvData.awards.map(award => `
        <div class="bg-transparent border border-gray-200 dark:border-slate-700 p-4 rounded-xl flex items-center justify-between hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md transition-all duration-300 cursor-pointer">
          <div>
            <h4 class="font-bold text-gray-900 dark:text-white">${award.title}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">${award.issuer} • ${award.location}</p>
          </div>
          <span class="text-primary-600 dark:text-primary-400 font-bold bg-white dark:bg-slate-700 px-3 py-1 rounded-full shadow-sm text-sm">${award.year}</span>
        </div>
      `).join('');
    }
  }
}

/**
 * Populates the Skills section
 */
function populateSkills() {
  const skillsContainer = document.querySelector('#skills .grid.gap-6');
  if (!skillsContainer) return;

  // Build skills HTML matching the structure
  const skillsHTML = cvData.skills.map(skillCat => `
    <div>
      <h3 class="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">${skillCat.category}</h3>
      <div class="flex flex-wrap gap-2">
        ${skillCat.skills.map(skill => `
          <span class="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-700 dark:hover:text-primary-400 hover:border-primary-100 dark:hover:border-primary-900/50 transition-colors cursor-default">${skill}</span>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Add certifications
  const certificationsHTML = `
    <div>
      <h3 class="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Certifications</h3>
      <div class="space-y-3">
        ${cvData.certifications.map(cert => `
          <a href="${cert.certificateUrl}" target="_blank" rel="noopener noreferrer"
             class="bg-transparent border border-gray-200 dark:border-slate-700 p-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md transition-all duration-300 flex items-center justify-between group no-underline">
            <div>
              <h4 class="font-bold text-gray-900 dark:text-white text-sm group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">${cert.name}</h4>
              <p class="text-xs text-gray-600 dark:text-gray-400">${cert.issuer}</p>
            </div>
            <span class="text-primary-600 dark:text-primary-400 font-bold bg-white dark:bg-slate-700 px-3 py-1 rounded-full shadow-sm text-xs">${cert.year}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;

  skillsContainer.innerHTML = skillsHTML + certificationsHTML;
}

/**
 * Populates the Publications section
 */
function populatePublications() {
  const publicationsContainer = document.querySelector('#papers-list');
  if (!publicationsContainer) return;

  publicationsContainer.innerHTML = cvData.papers.map(paper => {
    const isFeatured = paper.featured ? 'data-featured="true"' : '';

    // Highlight user's name in authors with the exact styling from HTML
    const highlightedAuthors = paper.authors.replace(
      /Ansori,?\s*M\.?\s*R\.?\s*R\.?/gi,
      '<span class="font-bold text-gray-900 dark:text-gray-200 underline decoration-primary-300 decoration-2 underline-offset-2">Ansori, M.R.R.</span>'
    );

    // Badge colors based on type
    const badgeClass = paper.type === 'Journal'
      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-900/50'
      : 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-900/50';

    // Status badge for submitted papers
    const statusBadge = paper.status ? `<span class="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-0.5 rounded-full font-medium">${paper.status}</span>` : '';

    return `
      <div class="paper-item bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group"
           data-category="${paper.type}" ${isFeatured}>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeClass}">${paper.type}</span>
          <span class="text-sm text-gray-500 dark:text-gray-400 font-mono">${paper.year}</span>
          ${statusBadge}
        </div>
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">${paper.title}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3 italic">${highlightedAuthors}</p>
        <p class="text-gray-500 dark:text-gray-500 text-sm border-t border-gray-100 dark:border-slate-700 pt-2 mt-2">${paper.publication}</p>
      </div>
    `;
  }).join('');
}

/**
 * Applies filter to papers
 */
function applyFilter(filter, filterButtons) {
  const paperItems = document.querySelectorAll('.paper-item');

  // Update active button styling
  filterButtons.forEach(btn => {
    const isActive = btn.getAttribute('data-filter') === filter;
    if (isActive) {
      btn.classList.add('bg-primary-600', 'text-white', 'shadow-md');
      btn.classList.remove('text-gray-600', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-slate-700');
    } else {
      btn.classList.remove('bg-primary-600', 'text-white', 'shadow-md');
      btn.classList.add('text-gray-600', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-slate-700');
    }
  });

  // Filter papers
  paperItems.forEach(paper => {
    const category = paper.getAttribute('data-category');
    const isFeatured = paper.getAttribute('data-featured') === 'true';

    let shouldShow = false;

    if (filter === 'All') {
      shouldShow = true;
    } else if (filter === 'Featured') {
      shouldShow = isFeatured;
    } else if (filter === 'Journal' || filter === 'Conference') {
      shouldShow = category === filter;
    }

    paper.style.display = shouldShow ? 'block' : 'none';
  });
}

/**
 * Sets up publication filter buttons
 */
function setupPublicationFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      applyFilter(filter, filterButtons);
    });
  });

  // Apply Featured filter by default on page load
  applyFilter('Featured', filterButtons);
}

/**
 * Initialize all sections
 */
function initializePortfolio() {
  populateAbout();
  populateExperience();
  populateEducation();
  populateSkills();
  populatePublications();
  setupPublicationFilters();

  // Reinitialize Lucide icons after populating content
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
  initializePortfolio();
}

export { initializePortfolio };
