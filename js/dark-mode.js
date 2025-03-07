/**
 * Gère les thèmes 
 */
class ThemeManager {
    constructor() {
        this.root = document.documentElement;
        this.init();
        this.bindEvents();
    }

    init() {
        const theme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        this.setTheme(theme);
    }

    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('[themeButton]')
                .forEach(toggler => toggler.addEventListener('click', () => this.toggleTheme()));
        });
    }

    setTheme(theme) {
        this.root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

new ThemeManager();