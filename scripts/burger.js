  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  nav.addEventListener('click', (e)=>{
    if (e.target.classList.value) {
      burger.classList.remove('active');
      nav.classList.remove('active');
  }
  });