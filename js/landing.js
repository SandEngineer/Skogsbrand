document.addEventListener('DOMContentLoaded', () => {
    // Använd querySelector för att hitta ditt h1-element och lägg till 'fade-in'-klassen
    const heading = document.querySelector('h1');
    heading.classList.add('fade-in');
    
    // Hitta dina knappar
    const buttons = document.querySelectorAll('.btn');
  
    // Lägg till 'button-appear'-klassen direkt så att de är förberedda för animation
    buttons.forEach(button => {
      button.classList.add('button-appear');
    });
  
    // Använd setTimeout för att lägga till 'animate-button'-klassen efter en fördröjning
    setTimeout(() => {
      buttons.forEach(button => {
        button.classList.add('animate-button');
      });
    }, 1200); // Fördröjningen på 1200ms (1.2 sekunder) innan knapparna börjar animera
  });



  //Fade:ar från landing till home
  document.addEventListener('DOMContentLoaded', () => {
    const navigateButtons = document.querySelectorAll('.navigateButton');
    
    navigateButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = 'home.html';
        }, 500); // Matchar längden på din fade-out-animation
      });
    });
  });
  

