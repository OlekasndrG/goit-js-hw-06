const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const elementsGallery = document.querySelector('.gallery');
images.forEach(item => {
  const { alt, url } = item;
  return elementsGallery.insertAdjacentHTML(
    'afterbegin',
    `<li> <img alt = ${alt}  src = ${url} class ="gallery__item"> </li>`
  );
});

// const elementsGallery = document.querySelector('.gallery');
// const galleryItem = images
//   .map(
//     item =>
//       `<li> <img alt = ${item.alt}  src = ${item.url} class ="gallery__item"> </li>`
//   )
//   .join('');
// elementsGallery.insertAdjacentHTML('beforeend', galleryItem);

// const gallery = images.map(item => {
//   const liEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.alt = item.alt;
//   imageEl.src = item.url;

//   imageEl.classList.add('gallery__item');
//   liEl.append(imageEl);
//   return liEl;
// });
// elementsGallery.append(...gallery);

// elementsGallery.prepend(list);
// console.log(list);
