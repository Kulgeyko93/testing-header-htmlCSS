export const popup = () => {
  const consultation__btn = document.querySelector('.consultation__btn');
  const cost__btn = document.querySelector('.cost__btn');
  const popup = document.querySelector('.popup');
  const slider_content = document.querySelector('.slider-content');

  popup.style.transition = 'all 1s';
  
  slider_content.addEventListener('click', (e) => {
    if (e.target.classList.value === 'slider-content__certificate') {
      popup.style.visibility = 'visible';
      popup.style.opacity = '1';
    }
  })

  consultation__btn.addEventListener('click', (e) => {
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
  });

  cost__btn.addEventListener('click', (e) => {
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
  });

  popup.addEventListener('click', (e) => {
    if (e.target.classList.value === 'popup__body') {
      popup.style.visibility = 'hidden';
      popup.style.opacity = '0';
    }
  })
}