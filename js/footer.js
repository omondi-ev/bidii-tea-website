/* Bidii Tea: shared footer across all pages. */
(() => {
  'use strict';
  const pages = [
    ['Home', 'index.html'],
    ['About Us', 'about.html'],
    ['Our Products', 'products.html'],
    ['Gift Collections', 'gifts.html'],
    ['Services', 'services.html'],
    ['Our Team', 'team.html'],
    ['Tea Journal', 'journal.html'],
    ['Contact Us', 'contact.html']
  ];
  const products = ['CTC Black Tea', 'PF1 · BP1 · PD · D1', 'Orthodox Tea', 'Specialty Tea', 'Bulk Tea Sourcing'];
  // Add the official Bidii Tea profile URLs when available. Leave blank until confirmed.
  const socialProfiles = {
    Facebook: '',
    Instagram: '',
    LinkedIn: ''
  };
  const productHref = 'products.html';
  const mapsHref = 'https://www.google.com/maps/search/?api=1&query=Red+Heron+Centre%2C+Kitengela%2C+Kenya';
  const footer = document.createElement('footer');
  footer.className = 'bidii-footer';
  footer.id = 'bidii-site-footer';
  footer.setAttribute('aria-label', 'Bidii Tea site footer');
  const el = (tag, className, text) => {
    const n = document.createElement(tag);
    if (className) n.className = className;
    if (text !== undefined) n.textContent = text;
    return n;
  };
  const link = (text, href, newTab = false) => {
    const a = el('a', '', text);
    a.href = href;
    if (newTab) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  };
  function column(title, items) {
    const wrap = el('div');
    wrap.append(el('h2', '', title));
    const ul = el('ul');
    items.forEach(([name, href]) => { const li = el('li'); li.append(link(name, href)); ul.append(li); });
    wrap.append(ul);
    return wrap;
  }
  function render() {
    if (document.getElementById('bidii-site-footer')) return;
    const top = el('div', 'bf-container bf-top');
    top.append(
      el('p', 'bf-brand', 'Bidii Tea'),
      el('p', 'bf-tagline', 'Rooted in Kenya. Connected to the World.'),
      el('p', 'bf-summary', 'Quality Kenyan CTC, orthodox and specialty teas, sourced through trusted factory relationships across Kenya and East Africa.')
    );
    const grid = el('div', 'bf-container bf-grid');
    grid.append(column('Quick Links', pages), column('Our Tea', products.map(p => [p, productHref])));
    const contacts = el('div');
    contacts.append(el('h2', '', 'Get in Touch'));
    const contactItems = el('div', 'bf-contact');
    contactItems.append(
      link('Red Heron Centre, Kitengela, Kenya', mapsHref, true),
      link('+254 722 900 950', 'tel:+254722900950'),
      link('moiro@bidiitea.com', 'mailto:moiro@bidiitea.com'),
      el('address', '', 'P.O. Box 3063 – 00200, Nairobi, Kenya')
    );
    contacts.append(contactItems);
    grid.append(contacts);
    const social = el('div', 'bf-social-column');
    social.append(el('h2', '', 'Stay Connected'));
    social.append(el('p', 'bf-social-description', 'Follow our journey and discover the richness of Kenyan tea.'));
    const icons = {
      Facebook: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/>',
      Instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2"/>',
      LinkedIn: '<path d="M5.5 8.7a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM4 10h3v10H4V10Zm5 0h2.9v1.4c.4-.8 1.4-1.6 3.1-1.6 3.3 0 3.9 2 3.9 4.6V20h-3v-5c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V20H9V10Z"/>'
    };
    const socialRow = el('div', 'bf-social-icons');
    Object.entries(socialProfiles).forEach(([name, url]) => {
      const item = url ? link('', url, true) : el('span', 'bf-social-pending');
      item.classList.add('bf-social-icon');
      item.setAttribute('aria-label', url ? `Bidii Tea on ${name}` : `${name} link coming soon`);
      item.title = url ? `Visit our ${name}` : `${name} — coming soon`;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('aria-hidden', 'true');
      svg.innerHTML = icons[name];
      item.append(svg);
      socialRow.append(item);
    });
    social.append(socialRow);
    grid.append(social);
    const bottom = el('div', 'bf-bottom');
    const bottomInner = el('div', 'bf-container bf-bottom-inner');
    bottomInner.append(el('span', '', `© ${new Date().getFullYear()} Bidii Tea. A brand of Bidii Trends Engineering Ltd. All rights reserved.`));
    const credit = el('span', 'bf-credit', 'Designed & Developed by ');
    credit.append(el('strong', '', 'Gilvasoft Technologies Ltd'));
    bottomInner.append(credit);
    bottom.append(bottomInner);
    footer.append(top, grid, bottom);
    document.body.append(footer);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, {once:true});
  else render();
})();
