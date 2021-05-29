
export const slider = () => {

  const slides = document.querySelectorAll('.slider-content__certificate');
  let widthSlide = document.querySelector('.slider-content__certificate').offsetWidth;
  let widthSlider = document.querySelector('.slider-content').offsetWidth;
  let slider = [];

  for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
  }
  
  let step = 0;
  let diffLeft = widthSlide + (widthSlider - 3*widthSlide) / 2;
  function draw(offset, isAddLeft){
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slider-content__certificate');
    img.style.left = offset * diffLeft + 'px';
  
    !isAddLeft 
      ? document.querySelector('.slider-content').appendChild(img)
      : document.querySelector('.slider-content__certificate').before(img);
    if (step === slider.length - 1){
      step = 0;
    } else {
      step++
    }
  }

  window.addEventListener('resize', () => {
    document.querySelector('.slider-content').innerHTML = `
      <img src="http://127.0.0.1:5500/images/cert2.png" class="slider-content__certificate"></img>
    `;
    step = 0;
    widthSlide = document.querySelector('.slider-content__certificate').offsetWidth;
    widthSlider = document.querySelector('.slider-content').offsetWidth;
    diffLeft = widthSlide + (widthSlider - 3*widthSlide) / 2;
    draw(-1);draw(0);draw(1);draw(2);draw(3);
  })

  function left(){
    document.querySelector('.left-arrow').removeEventListener('click', left);
    let slides2 = document.querySelectorAll('.slider-content__certificate');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++){
      slides2[i].style.left = offset2 * diffLeft - 2*diffLeft + 'px';
      offset2++;
    }
    setTimeout(() => {
      slides2[0].remove();
      draw(3, false);
      document.querySelector('.left-arrow').addEventListener('click', left);
    }, 1200);
  }
  
  function right(){
    document.querySelector('.right-arrow').removeEventListener('click', right);
    let slides2 = document.querySelectorAll('.slider-content__certificate');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++){
      slides2[i].style.left=  offset2 * diffLeft + 'px';
      offset2++;
    }
    setTimeout(() => {
  
      slides2[slides2.length - 1].remove();
      draw(-1, true);
      document.querySelector('.right-arrow').addEventListener('click', right);
    }, 1200);
  }
  

  draw(-1);draw(0);draw(1);draw(2);draw(3);
  document.querySelector('.left-arrow').addEventListener('click', left);
  document.querySelector('.right-arrow').addEventListener('click', right);
}
