/**
 * Generates an ATS-friendly PDF CV using pdfmake
 * This script is loaded as a module and makes generateCV available globally
 */

// Import CV data from constants module
import { cvData } from './constants.js';

console.log('CV Generator module loading...');

function generateCV() {
  try {
    // Check if pdfMake is available
    if (typeof pdfMake === 'undefined') {
      console.error('pdfMake library not loaded');
      alert('PDF library not loaded. Please refresh the page.');
      return;
    }

    // Check if cvData is available
    if (!cvData) {
      console.error('CV data not available');
      alert('CV data not loaded. Please refresh the page.');
      return;
    }

    console.log('Generating CV...');

  // Define document content with ATS-friendly formatting
  const docDefinition = {
    // Page settings for standard letter size
    pageSize: 'LETTER',
    pageMargins: [40, 60, 40, 60],

    // Content structure
    content: [
      // Header section
      {
        text: cvData.name,
        style: 'name',
        alignment: 'center'
      },
      {
        text: cvData.role,
        style: 'role',
        alignment: 'center',
        margin: [0, 5, 0, 10]
      },

      // Contact information
      {
        columns: [
          { text: `Email: ${cvData.contact.email}`, style: 'contact' },
          { text: `Phone: ${cvData.contact.phone}`, style: 'contact', alignment: 'right' }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { text: `GitHub: github.com/${cvData.contact.github}`, style: 'contact' },
          { text: `LinkedIn: linkedin.com/in/${cvData.contact.linkedin}`, style: 'contact', alignment: 'right' }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        text: `Location: ${cvData.contact.location}`,
        style: 'contact',
        alignment: 'center',
        margin: [0, 0, 0, 15]
      },

      // Horizontal line separator
      {
        canvas: [
          {
            type: 'line',
            x1: 0, y1: 0,
            x2: 515, y2: 0,
            lineWidth: 1,
            lineColor: '#000000'
          }
        ],
        margin: [0, 0, 0, 15]
      },

      // Education section
      {
        text: 'EDUCATION',
        style: 'sectionHeader'
      },
      ...cvData.education.map(edu => [
        {
          columns: [
            { text: edu.degree, style: 'itemTitle', width: '*' },
            { text: edu.period, style: 'period', width: 'auto' }
          ],
          margin: [0, 5, 0, 2]
        },
        {
          text: `${edu.institution}, ${edu.location}`,
          style: 'itemSubtitle',
          margin: [0, 0, 0, 2]
        },
        {
          text: `GPA: ${edu.gpa}`,
          style: 'body',
          margin: [0, 0, 0, 2]
        },
        {
          text: `Thesis: ${edu.thesis}`,
          style: 'body',
          margin: [0, 0, 0, 10]
        }
      ]).flat(),

      // Experience section
      {
        text: 'PROFESSIONAL EXPERIENCE',
        style: 'sectionHeader'
      },
      ...cvData.experience.map(exp => [
        {
          columns: [
            { text: exp.role, style: 'itemTitle', width: '*' },
            { text: exp.period, style: 'period', width: 'auto' }
          ],
          margin: [0, 5, 0, 2]
        },
        {
          text: `${exp.company}, ${exp.location}`,
          style: 'itemSubtitle',
          margin: [0, 0, 0, 5]
        },
        {
          ul: exp.details,
          style: 'body',
          margin: [0, 0, 0, 10]
        }
      ]).flat(),

      // Skills section
      {
        text: 'TECHNICAL SKILLS',
        style: 'sectionHeader'
      },
      ...cvData.skills.map(skillCat => ({
        columns: [
          { text: `${skillCat.category}:`, style: 'skillCategory', width: 100 },
          { text: skillCat.skills.join(', '), style: 'body', width: '*' }
        ],
        margin: [0, 3, 0, 3]
      })),
      { text: '', margin: [0, 0, 0, 10] }, // Spacing after skills

      // Publications section
      {
        text: 'PUBLICATIONS',
        style: 'sectionHeader',
        pageBreak: 'before' // Start publications on new page
      },

      // Journal papers
      {
        text: 'Journal Papers',
        style: 'subsectionHeader',
        margin: [0, 5, 0, 5]
      },
      ...cvData.papers.filter(p => p.type === 'Journal').map(paper => ({
        text: [
          { text: paper.authors, style: 'paperAuthors' },
          { text: ` (${paper.year}). `, style: 'body' },
          { text: paper.title, style: 'paperTitle' },
          { text: `. ${paper.publication}`, style: 'body' },
          paper.status ? { text: ` [${paper.status}]`, style: 'paperStatus' } : ''
        ],
        margin: [0, 0, 0, 8]
      })),

      // Conference papers
      {
        text: 'Conference Papers',
        style: 'subsectionHeader',
        margin: [0, 10, 0, 5]
      },
      ...cvData.papers.filter(p => p.type === 'Conference').map(paper => ({
        text: [
          { text: paper.authors, style: 'paperAuthors' },
          { text: ` (${paper.year}). `, style: 'body' },
          { text: paper.title, style: 'paperTitle' },
          { text: `. ${paper.publication}`, style: 'body' }
        ],
        margin: [0, 0, 0, 8]
      })),

      // Awards section
      {
        text: 'AWARDS & HONORS',
        style: 'sectionHeader',
        pageBreak: 'before'
      },
      ...cvData.awards.map(award => ({
        columns: [
          {
            text: `${award.title} - ${award.issuer}, ${award.location}`,
            style: 'body',
            width: '*'
          },
          { text: award.year, style: 'period', width: 'auto' }
        ],
        margin: [0, 3, 0, 3]
      })),
      { text: '', margin: [0, 0, 0, 10] },

      // Certifications section
      {
        text: 'CERTIFICATIONS',
        style: 'sectionHeader'
      },
      ...cvData.certifications.map(cert => ({
        columns: [
          {
            text: `${cert.name} - ${cert.issuer}`,
            style: 'body',
            width: '*'
          },
          { text: cert.year, style: 'period', width: 'auto' }
        ],
        margin: [0, 3, 0, 3]
      }))
    ],

    // ATS-friendly styles
    styles: {
      name: {
        fontSize: 18,
        bold: true,
        color: '#000000'
      },
      role: {
        fontSize: 12,
        color: '#333333'
      },
      contact: {
        fontSize: 9,
        color: '#333333'
      },
      sectionHeader: {
        fontSize: 12,
        bold: true,
        color: '#000000',
        margin: [0, 10, 0, 5]
      },
      subsectionHeader: {
        fontSize: 11,
        bold: true,
        color: '#000000'
      },
      itemTitle: {
        fontSize: 11,
        bold: true,
        color: '#000000'
      },
      itemSubtitle: {
        fontSize: 10,
        italics: true,
        color: '#333333'
      },
      period: {
        fontSize: 10,
        color: '#333333'
      },
      body: {
        fontSize: 10,
        color: '#000000',
        lineHeight: 1.3
      },
      skillCategory: {
        fontSize: 10,
        bold: true,
        color: '#000000'
      },
      paperAuthors: {
        fontSize: 9,
        color: '#000000'
      },
      paperTitle: {
        fontSize: 9,
        italics: true,
        color: '#000000'
      },
      paperStatus: {
        fontSize: 9,
        color: '#666666'
      }
    },

    // Default style
    defaultStyle: {
      font: 'Roboto',
      fontSize: 10
    }
  };

  // Generate and download PDF
  pdfMake.createPdf(docDefinition).download(`${cvData.name.replace(/\s+/g, '_')}_CV.pdf`);

  console.log('CV generated successfully');
  } catch (error) {
    console.error('Error generating CV:', error);
    alert('Error generating CV. Please check the console for details.');
  }
}

// Initialize CV download button
function initCVGenerator() {
  const cvButton = document.querySelector('button[onclick*="generateCV"]');
  if (cvButton) {
    console.log('CV download button found, attaching event listener');
    // Remove inline onclick
    cvButton.removeAttribute('onclick');
    // Add proper event listener
    cvButton.addEventListener('click', generateCV);
  } else {
    console.warn('CV download button not found');
  }
}

// Wait for DOM before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCVGenerator);
} else {
  initCVGenerator();
}

// Also make function globally available as fallback
window.generateCV = generateCV;
console.log('CV Generator ready. window.generateCV is', typeof window.generateCV);
