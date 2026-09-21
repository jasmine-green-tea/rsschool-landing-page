const root = document.documentElement;
const toggle = document.querySelector('.theme-switch');

if (toggle) {
  const isDark = root.dataset.theme === 'dark';
  toggle.setAttribute('aria-pressed', String(isDark));

  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    toggle.setAttribute('aria-pressed', String(next === 'dark'));
  });
}
