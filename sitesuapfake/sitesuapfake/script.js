// Recriação visual estática para atividade acadêmica.
// Para trocar os destinos dos botões, substitua href="#" pelo link desejado no HTML.

const collapseBtn = document.querySelector('.sidebar-handle');
const sidebar = document.querySelector('.sidebar');
const page = document.querySelector('.page');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

function isMobile() {
    return window.matchMedia('(max-width: 760px)').matches;
}

function openMobileMenu() {
    if (!sidebar) return;
    sidebar.classList.add('mobile-open');
    document.body.classList.add('mobile-menu-open');
}

function closeMobileMenu() {
    if (!sidebar) return;
    sidebar.classList.remove('mobile-open');
    document.body.classList.remove('mobile-menu-open');
}

function toggleMobileMenu(event) {
    if (event) event.preventDefault();
    if (!sidebar) return;

    if (sidebar.classList.contains('mobile-open')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

if (collapseBtn && sidebar && page) {
    collapseBtn.addEventListener('click', () => {
        if (isMobile()) {
            toggleMobileMenu();
            return;
        }

        sidebar.classList.toggle('collapsed');
        page.classList.toggle('expanded');
    });
}

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Fecha o menu mobile ao clicar fora dele.
document.addEventListener('click', (event) => {
    if (!isMobile() || !sidebar || !sidebar.classList.contains('mobile-open')) return;
    const clickedInsideSidebar = sidebar.contains(event.target);
    const clickedMenuButton = mobileMenuToggle && mobileMenuToggle.contains(event.target);

    if (!clickedInsideSidebar && !clickedMenuButton) {
        closeMobileMenu();
    }
});

// Fecha com ESC.
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});

// Ao voltar para desktop, limpa o estado mobile.
window.addEventListener('resize', () => {
    if (!isMobile()) {
        closeMobileMenu();
    }
});
