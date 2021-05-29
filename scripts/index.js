import {slider} from './slider.js'
import {popup} from './popup.js'
import './burger.js'

slider();
popup();

const lang = () => {
  const lang_list__ru = document.querySelector('.lang-list__ru');
  const lang_list__en = document.querySelector('.lang-list__en');

  const handleLang = () => {
    lang_list__ru.classList.toggle('lang-list_active');
    lang_list__en.classList.toggle('lang-list_active');
  }
  
  lang_list__ru.addEventListener('click', handleLang);
  lang_list__en.addEventListener('click', handleLang);
}

lang();