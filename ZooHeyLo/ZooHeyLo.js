document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.querySelector(".hamburguer");
    const navMenu = document.querySelector(".nav-menu");
    const animais1 = document.querySelector(".animais1")
    const animais2 = document.querySelector(".animais2")
    const animais3 = document.querySelector(".animais3")
    const animais4 = document.querySelector(".animais4")
  
    hamburguer.addEventListener("click", () => {
      hamburguer.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    animais1.addEventListener("click", () => {
      hamburguer.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    animais2.addEventListener("click", () => {
      hamburguer.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    animais3.addEventListener("click", () => {
      hamburguer.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    animais4.addEventListener("click", () => {
      hamburguer.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  });
  