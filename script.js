document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Check system preference if no saved theme
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});

// Analytics tracking placeholder
function trackClick(linkName) {
    console.log(`Clicked: ${linkName}`);
    // If Google Analytics is configured:
    // if (typeof gtag === 'function') {
    //     gtag('event', 'click', {
    //         'event_category': 'outbound',
    //         'event_label': linkName,
    //         'transport_type': 'beacon'
    //     });
    // }
}
