'use strict';

// ===== Modal =====

const overlay      = document.getElementById('modal-overlay');
const brandItems   = document.querySelectorAll('.brand_item');
const closeButtons = document.querySelectorAll('.modal_close');

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('is-active');
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
}

function closeAllModals() {
    document.querySelectorAll('.modal.is-active').forEach(function(m) {
        m.classList.remove('is-active');
    });
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
}

brandItems.forEach(function(item) {
    item.addEventListener('click', function() {
        openModal(item.getAttribute('data-modal'));
    });
});

closeButtons.forEach(function(btn) {
    btn.addEventListener('click', closeAllModals);
});

overlay.addEventListener('click', closeAllModals);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeAllModals();
});

// ===== Scroll to Top =====

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('is-visible');
    } else {
        scrollTopBtn.classList.remove('is-visible');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
