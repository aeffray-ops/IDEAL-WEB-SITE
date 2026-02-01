// FERMER LE BANDEAU
document.addEventListener('DOMContentLoaded', function() {
  const btnClose = document.querySelector('.btn-close-bandeau, .bandeau-close');
  const bandeau = document.getElementById('bandeau-evenement') || document.querySelector('.bandeau-evenement, .bandeau-evenements');
  const header = document.querySelector('.header-principal');

  if (btnClose && bandeau) {
    btnClose.addEventListener('click', function() {
      bandeau.style.transition = 'all 0.3s ease';
      bandeau.style.transform = 'translateY(-100%)';
      bandeau.style.opacity = '0';

      setTimeout(function() {
        bandeau.style.display = 'none';
        document.body.classList.add('bandeau-ferme');
        if (header) header.style.marginTop = '0';
      }, 300);
    });
  }
});
