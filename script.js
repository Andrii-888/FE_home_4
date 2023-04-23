// 1) Написать скрипт, который выводит списки с товарами в интерфейс
// (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара.
//  А так же в самом конце выводится итоговая сумма и количество всех товаров.
// let prod = [
//   {
//     title: "BMW",

//     price: "40000",

//     count: "15",
//   },

//   {
//     title: "Toyota",

//     price: "20000",

//     count: "13",
//   },

//   {
//     title: "Ford",

//     price: "30000",

//     count: "20",
//   },

//   {
//     title: "Chevrolet",

//     price: "60000",

//     count: "9",
//   },

//   {
//     title: "Volkswagen",

//     price: "30000",

//     count: "13",
//   },
// ];

// let list = "";
// for (key in prod) {
//   // перебирание ключей
//   list += prod[key].title + "<br>";
//   list += prod[key].price + "<br>";
//   list += prod[key].count + "<br>";
// }
// document.getElementById("out").innerHTML = list;

// let result = 0;
// for (let i = 0; i < prod.length; i++) {
//   result += Number(prod[i].price); // поставить Number чтобы перевести строковые элемента в числовое      // += найдите сумму всех чисел B прайсe
// }
// const elem = document.getElementById("out");
// elem.innerHTML = list;
// elem.append("итогоvaiy сумма " + result);

// elem.innerHTML = elem.innerHTML +  '<br>' + result;    // второй вариант

// 2)Напишите скрипт, который выводит в интерфейс следующую таблицу
// (html должен быть пустым, все элементы создаются строго с помощью скриптов):
// let elem = document.querySelector("#elem");

// createTable(elem, 4, 3);

// function createTable(parent, cols, rows) {
//   let table = document.createElement("table"); // Вариант как сделать пустую таблицу
//   for (let i = 0; i < rows; i++) {
//     let tr = document.createElement("tr");
//     // В строки мы создаем колонки
//     for (let j = 0; j < cols; j++) {
//       let td = document.createElement("td");
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
//   parent.appendChild(table);
// }
/////////////////////////////////////////////////////////////////////////////////////////////
// let tab = {
//   "No.": [["1"], ["2"], ["3"], ["4"]],

//   "Full Name": [
//     ["Bill Gates"],
//     ["Steve Jobs"],
//     ["Larry Page"],
//     ["Mark Zuckeberg"],
//   ],

//   Positoin: [
//     ["Founder Microsoft"],
//     ["Founder Apple"],
//     ["Founder Google"],
//     ["Founder Facebook"],
//   ],

//   Salary: [["$1000"], ["$1200"], ["$1100"], ["$1300"]],
// };

// document.querySelector("#elem").innerHTML = `<table class="million"></table>`;
// for (key in tab) {
//   let row = document.createElement("tr");
//   row.innerHTML = `<td rowspan='4'>${key}</td>`;
//   document.querySelector(".million").appendChild(row);
//   for (let i = 0; i < tab[key].length; i++) {
//     let row = document.createElement("tr");
//     row.innerHTML = `
//    <td>${tab[key][i][0]}</td>
//    <td>${tab[key][i][1]}</td>
//    <td>${tab[key][i][2]}</td>
//    <td>${tab[key][i][3]}</td>
//    `;
//     document.querySelector("td").appendChild(row);
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////
// 3)Дан массив из объектов, в котором хранятся породы собак и их возраст.
// Напишите цикл, который создаст для каждого объекта параграфы
// (Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.
// [
//     {
//       breed: "golden retriever",
//       age: 7,
//     },
//     {
//       breed: "labrador retriever",
//       age: 4,
//     },
//     {
//       breed: "french bulldog",
//       age: 12,
//     },
//     {
//       breed: "beagle",
//       age: 6,
//     },
//     {
//       breed: "german shepherd dog",
//       age: 2,
//     },
//     {
//       breed: "poodle",
//       age: 3,
//     },
//     {
//       breed: "bulldog",
//       age: 4,
//     },
// ];
///////////////////////////////////////////////////////////////////////////
// 4)Создайте список с названиями фильмов и годов их выпуска из массива объектов.
//  Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.

const arrayMyCollecshionFilms = [
  { name: "Titanik", year: 1993 },
  { name: "Robin", year: 2013 },
  { name: "Glock", year: 2006 },
  { name: "Faer and water", year: 2015 },
  { name: "Discavery", year: 2014 },
];
console.log(arrayMyCollecshionFilms);
