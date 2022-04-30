"use strict"

const citiesSimple = ['kyiv', 'kharkiv', 'dnipro', 'vinnytsa', 'lviv', 'rivne'];


/* Первый вариант решения для простых массивов*/

function createList(array) {

  let newArray = array.map(item => `<li>${item}</li>`);

  return newArray.join(' ');

}

function insertList(position,str, elem = document.body ) {

    if (elem === document.body) {

    return elem.insertAdjacentHTML(position, str);

  }

  let elem1 = document.createElement(elem);

  document.body.append(elem1);

  return elem1.insertAdjacentHTML(position, str);

}

insertList('afterbegin',createList(citiesSimple),'ul');

/*---------------------------------------------------------------------------------------------------------------------------------------------------*/

/* Второй вариант решения для простых массивов */


function listCreate(array,elem = document.body) {

  let newArray = array.map(item => `<li>${item}</li>`);

  if (elem === document.body) {

    return newArray.join(' ');
  
  }

  let newList = newArray.join(' ');

  return `<${elem}>${newList}</${elem}>`


}

function listInsert(position, str) {

  return document.body.insertAdjacentHTML(position, str);

}

listInsert('beforeend', listCreate(citiesSimple,'ul'));

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* Задание повышенной сложности */

/* Вариант для массивов с вложенными масивами--------*/

const cities = ["Rivne", ["Kharkiv", "lviv"], "Kiev", ["Borispol", "Irpin"], "Odessa", ["Lviv","Cherihiv","Uzhhorod"], "Dnieper"];


function transformArray(array, elchild, elem = document.body) {


  let newArr = array.map(item => Array.isArray(item) ? `<${elchild}>${transformArray(item, elchild, elem)}</${elchild}>` : `<${elchild}>${item}</${elchild}>`);


  if (elem === document.body) {return newArr.join(' ')}


  let newStr = newArr.join(' ');


  return `<${elem}>${newStr}</${elem}>`;

}

const insertTransformedArray = (position, str) => document.body.insertAdjacentHTML(position, str)

insertTransformedArray('afterbegin', transformArray(cities, 'li','ul'));

// Функция для очищения страницы через промежуток времени:

const removeHtml = (el,time) => {

let htmlElem = document.querySelectorAll(el)

setTimeout( () => htmlElem.forEach (item => item.remove()),time)

}

removeHtml('ul',3000)
   



