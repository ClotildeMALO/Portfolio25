/**
 * Gère les thèmes 
 */
class ThemeManager {
    constructor() {
        this.root = document.documentElement;
        this.themeToggle = document.querySelector('.themeBox'); 
        this.icons = document.querySelectorAll('footer img, .footer-logos img');
        this.init();
        this.bindEvents();
    }

    init() {
        const theme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        this.setTheme(theme);

        if (this.themeToggle) {
            this.themeToggle.checked = (theme === 'dark');
        }
    }

    bindEvents() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('change', () => this.toggleTheme());
        }
    }

    setTheme(theme) {
        this.root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateIcons(theme);
    }

    toggleTheme() {
        const newTheme = this.themeToggle.checked ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateIcons(theme) {
        const oppositeTheme = theme === 'dark' ? 'Light' : 'Dark';
        this.icons.forEach(icon => {
            const baseName = icon.getAttribute('data-theme-img');
            icon.src = `ressources/${baseName}_${oppositeTheme}.png`;
        });
    }
}
document.addEventListener('DOMContentLoaded', () => new ThemeManager());