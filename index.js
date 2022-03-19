const defUrl = 'https://api.unsplash.com/search/photos?query=elephant&orientation=landscape&client_id=eMANHLiFgmvoJshDmrAg3s5KwoJapmqvr_E3E-W-8wo';
const url = 'https://api.unsplash.com/search/photos';
const clientId = 'eMANHLiFgmvoJshDmrAg3s5KwoJapmqvr_E3E-W-8wo';

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  data.results.map(item => creatNewImage(item.urls.small));
}
getData(defUrl);


galleryContainer = document.querySelector('.gallery-container');

function creatNewImage(imageUrl) {
  //alert(imageUrl);
  //const img = `<img class="gallery-img" src="`+ imageUrl +`" + alt="image">`;
  const img = `<div class="gallery-img" style = "background-image: url(` + imageUrl +`);">`;
  galleryContainer.insertAdjacentHTML('beforeend', img)
}


function deleteImage() {
  let allGallery = document.getElementById('all-gallery');
  let imageDel = document.getElementsByClassName('gallery-img');
  let Kolvo = imageDel.length; 
  for (let i = 0; Kolvo > i; i++) {
    allGallery.removeChild(imageDel.item(0));
  }
};


let inputClick = document.getElementById('input');
input.addEventListener('change', () => { deleteImage(); 
getData(url + '?query=' + input.value+ '&orientation=landscape' +'&client_id=' + clientId);});




console.log(
  "Оценка по пунктам: 65 (10+10+10+25+10)\
  Вёрстка +10 \
    на странице есть несколько фото и строка поиска +5 \
    в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5 \
  При загрузке приложения на странице отображаются полученные от API изображения +10 \
  Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10 \
  Поиск +30 \
    при открытии приложения курсор находится в поле ввода +5 \
    есть placeholder +5 \
    автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5 \
    поисковый запрос можно отправить нажатием клавиши Enter +5 \
    после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5 \
    - в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5 \
  Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10 \
  высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо"
);
