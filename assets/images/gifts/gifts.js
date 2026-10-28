
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.gift-menu-toggle');
  const navigation = document.getElementById('gift-navigation');

  // MOBILE NAVIGATION
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = navigation.classList.toggle('is-open');

      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute(
        'aria-label',
        open ? 'Close navigation menu' : 'Open navigation menu'
      );
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // GIFT COLLECTION TABS
  const tabs = [...document.querySelectorAll('[data-gift-tab]')];
  const panels = [...document.querySelectorAll('[data-gift-panel]')];

  function activate(category, changeUrl = false) {
    if (!tabs.some((tab) => tab.dataset.giftTab === category)) {
      return;
    }

    tabs.forEach((tab) => {
      const selected = tab.dataset.giftTab === category;

      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.giftPanel !== category;
    });

    if (changeUrl) {
      history.replaceState(null, '', '#' + category + '-details');
    }
  }

  // SYNCHRONIZE TABS WITH URL
  function syncHash() {
    const hash = window.location.hash.slice(1);

    if (hash.startsWith('family')) {
      activate('family');
    } else if (hash.startsWith('corporate')) {
      activate('corporate');
    } else if (hash.startsWith('custom')) {
      activate('custom');
    }
  }

  // TAB CLICK AND KEYBOARD SUPPORT
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      activate(tab.dataset.giftTab, true);
    });

    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
        return;
      }

      event.preventDefault();

      const next = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? tabs.length - 1
          : (
              index +
              (event.key === 'ArrowRight' ? 1 : -1) +
              tabs.length
            ) % tabs.length;

      tabs[next].focus();
      activate(tabs[next].dataset.giftTab, true);
    });
  });

  // LINKS FROM GIFT CARDS TO DETAILS
  document.querySelectorAll('a[href$="-details"]').forEach((link) => {
    link.addEventListener('click', () => {
      const category = link
        .getAttribute('href')
        .slice(1)
        .replace('-details', '');

      activate(category);
    });
  });

  window.addEventListener('hashchange', syncHash);
  syncHash();

  // AUTOMATIC COPYRIGHT YEAR
  const year = document.getElementById('gift-year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
