// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelector('ul#categories');
const numberOfCategories = categories.childElementCount;
console.log(`Number of categories: ${numberOfCategories}`);
const allCategories = categories.querySelectorAll('li.item');

allCategories.forEach(h2 =>
  console.log(`Category: ${h2.firstElementChild.textContent} 
Elements: ${h2.lastElementChild.children.length}`)
);

// for (const item of allCategories) {
//   console.log(`Category: ${item.firstElementChild.textContent}
// Elements: ${item.lastElementChild.children.length}`);
// }
