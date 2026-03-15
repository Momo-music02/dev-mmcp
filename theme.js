// Mode adaptatif clair/sombre sur toutes les pages
(function() {
  function setThemeAuto() {
    const user = localStorage.getItem('theme');
    if (user === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else if (user === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      // Adaptatif selon l'appareil
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      }
    }
  }
  setThemeAuto();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeAuto);
})();
