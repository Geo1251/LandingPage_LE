// Navigation bar

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const scrollIndicator = document.querySelector('.scroll-indicator'); 
    const navLinks = document.querySelectorAll('.navigation__link'); 
  
    function updateScrollIndicator() {
      let scrollPosition = window.scrollY; 
      const windowHeight = window.innerHeight; 
  
      let activeLink = null;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop; 
        const sectionHeight = section.offsetHeight; 
  
        
        if (scrollPosition + windowHeight / 2 >= sectionTop && scrollPosition + windowHeight / 2 < sectionTop + sectionHeight) {
          if (index > 1) { 
            activeLink = navLinks[index]; 
          }
        }
      });
  
      if (activeLink) {
        const activeLinkPosition = activeLink.getBoundingClientRect(); 
        const offsetTop = -72;
        scrollIndicator.style.top = `${activeLinkPosition.top + window.scrollY - document.querySelector('.navigation__container').offsetTop + offsetTop}px`;
      }
    }
    window.addEventListener('scroll', updateScrollIndicator);
});
  
// Cards animation

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentCard = 0;

    function startAnimation() {
        if (currentCard < cards.length) {
            cards[currentCard].style.animation = 'shake 3s';
            cards[currentCard].addEventListener('animationend', () => {
                cards[currentCard].style.animation = '';
                currentCard++;
                if (currentCard >= cards.length) {
                    currentCard = 0; 
                }
                startAnimation();
            }, { once: true });
        }
    }

    startAnimation();

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            cards.forEach(c => c.style.animationPlayState = 'paused');
        });
        card.addEventListener('mouseout', () => {
            cards.forEach(c => c.style.animationPlayState = 'running');
        });
    });
});