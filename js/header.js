/**
 * CTA "Inscription webinaire" - Animation marquee CONTINUE (sans pause)
 * Le texte défile en continu en boucle
 */
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.webinaire-marquee__track');
  if (!track || track.dataset.init === '1') return;
  track.dataset.init = '1';
  // Animation continue, pas de pause
});
