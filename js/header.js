/* ========================================
   MENU MOBILE
======================================== */
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menuToggle');
  var headerNav = document.querySelector('.header-nav');

  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', function() {
      headerNav.classList.toggle('active');
      this.classList.toggle('active');
    });

    var navLinks = document.querySelectorAll('.header-nav .nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        headerNav.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  /* ========================================
     HIGHLIGHT LIEN ACTIF
  ======================================== */
  var path = window.location.pathname || '';
  var currentPage = path.split('/').pop() || 'index.html';
  if (!currentPage) currentPage = 'index.html';

  var links = document.querySelectorAll('.header-nav .nav-link');
  links.forEach(function(link) {
    var href = link.getAttribute('href') || '';
    var linkPage = href.split('#')[0];
    if (linkPage !== currentPage) return;
    if (currentPage === 'index.html' && href.indexOf('#') > -1) return;
    link.classList.add('active');
  });

  /* Défilement fluide pour les ancres */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
