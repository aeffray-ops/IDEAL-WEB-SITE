(function() {
  'use strict';
  var bandeau = document.getElementById('bandeau-evenement');
  if (!bandeau) return;

  var closeBtn = bandeau.querySelector('.bandeau-close');
  var reouvrirBtn = bandeau.querySelector('.bandeau-reouvrir');

  /* Ne plus masquer définitivement : on minimise uniquement. */
  try { localStorage.removeItem('bandeauFerme'); } catch (e) {}

  function setMinimized(mini) {
    if (mini) {
      bandeau.classList.add('bandeau-minimized');
      try { localStorage.setItem('bandeauMinimized', 'true'); } catch (e) {}
    } else {
      bandeau.classList.remove('bandeau-minimized');
      try { localStorage.setItem('bandeauMinimized', 'false'); } catch (e) {}
    }
  }

  function isMinimized() {
    return bandeau.classList.contains('bandeau-minimized');
  }

  /* État initial : réductible si précédemment minimisé */
  if (localStorage.getItem('bandeauMinimized') === 'true') {
    setMinimized(true);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      setMinimized(true);
    });
  }

  if (reouvrirBtn) {
    reouvrirBtn.addEventListener('click', function() {
      setMinimized(false);
    });
  }
})();
