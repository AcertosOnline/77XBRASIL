/* Toggle Cotacoes Section */
function toggleCotacoes() {
    const text = document.querySelector('.cotacoes-text');
    const title = document.querySelector('#expandable-title');
    text.classList.toggle('active');
    title.textContent = text.classList.contains('active') ? 'Ocultar cotações' : 'Mostrar cotações';
}

/* Scroll and Load Animations for Section Elements */
function handleSectionVisibility(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    const fadeElements = section.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

function setupSectionAnimations() {
    const sections = ['cotacoes', 'bonus', 'beneficios', 'responsabilidade'];
    sections.forEach(sectionId => {
        document.addEventListener('scroll', () => handleSectionVisibility(sectionId));
        window.addEventListener('load', () => handleSectionVisibility(sectionId));
    });
}

/* URL Parameter and LocalStorage Handling */
function getUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    return {
        whatsapp: params.get('whatsapp') || null,
        promoterCode: params.get('promoter') || null
    };
}

function saveToLocalStorage(whatsapp, promoterCode) {
    localStorage.setItem('whatsappNumber', whatsapp);
    localStorage.setItem('promoterCode', promoterCode);
}

function getFromLocalStorage() {
    return {
        whatsapp: localStorage.getItem('whatsappNumber'),
        promoterCode: localStorage.getItem('promoterCode')
    };
}

function getDefaultValues() {
    return {
        whatsapp: '5583993708505',
        promoterCode: 'XIx8p5TQ'
    };
}

function clearUrlParameters() {
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
}

function updateLinks() {
    const whatsappLink = document.getElementById('whatsapp-link');
    const registerButton = document.getElementById('register-button');
    const params = getUrlParameters();
    const storedValues = getFromLocalStorage();
    const defaultValues = getDefaultValues();

    let finalWhatsapp = defaultValues.whatsapp;
    let finalPromoterCode = defaultValues.promoterCode;

    if (params.whatsapp && params.promoterCode) {
        finalWhatsapp = params.whatsapp;
        finalPromoterCode = params.promoterCode;
        saveToLocalStorage(finalWhatsapp, finalPromoterCode);
        clearUrlParameters();
    } else if (storedValues.whatsapp && storedValues.promoterCode) {
        finalWhatsapp = storedValues.whatsapp;
        finalPromoterCode = storedValues.promoterCode;
    } else {
        saveToLocalStorage(defaultValues.whatsapp, defaultValues.promoterCode);
    }

    const defaultMessage = encodeURIComponent('Olá, preciso de ajuda!');
    whatsappLink.href = `https://wa.me/${finalWhatsapp}?text=${defaultMessage}`;
    registerButton.onclick = function() {
        window.location.href = `https://app.77xbrasil.com.br/pr/${finalPromoterCode}`;
    };
}

/* Initialize on Page Load */
document.addEventListener('DOMContentLoaded', () => {
    updateLinks();
    setupSectionAnimations();
});
