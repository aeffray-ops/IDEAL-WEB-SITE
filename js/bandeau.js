(function() {
  'use strict';
  var bandeau = document.getElementById('bandeau-evenement');
  var closeBtn = document.querySelector('.bandeau-close');
  if (!bandeau) return;

  if (localStorage.getItem('bandeauFerme') === 'true') {
    bandeau.style.display = 'none';
    return;
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      bandeau.classList.add('bandeau-closing');
      setTimeout(function() {
        bandeau.style.display = 'none';
        localStorage.setItem('bandeauFerme', 'true');
      }, 300);
    });
  }
})();
