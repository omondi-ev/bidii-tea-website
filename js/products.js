
document.addEventListener('DOMContentLoaded', () => {
  const tabs = [...document.querySelectorAll('[data-tab]')];

  const setActive = () => {
    const hash = location.hash.slice(1);
    const section = ['pf1', 'bp1', 'pd', 'd1', 'ctc'].includes(hash)
      ? 'ctc'
      : hash;

    tabs.forEach((tab) => {
      const active = tab.dataset.tab === section;
      tab.classList.toggle('active', active);

      if (active) {
        tab.setAttribute('aria-current', 'location');
      } else {
        tab.removeAttribute('aria-current');
      }
    });
  };

  window.addEventListener('hashchange', setActive);
  setActive();

  const select = document.getElementById('tea-grade');
  if (select) {
    const param = new URLSearchParams(location.search).get('product');
    const productExists = param && [...select.options].some(
      (option) => option.value === param
    );

    if (productExists) {
      select.value = param;
      const notice = document.getElementById('form-notice');

      if (notice) {
        notice.textContent =
          'Selected product: ' + select.selectedOptions[0].text +
          '. Please complete the details below. Email delivery requires the recipient to activate FormSubmit.';
      }
    }
  }
});
