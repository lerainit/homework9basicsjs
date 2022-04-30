## Создание нового HTML -тега
</hr>

-document.createElement(Tag):

```js

let title = document.createElement('div') 
//создает новый html элемент 'div'

title.classList.add('title');
// присвоение класса элементу

title.innerHTML = 'This is our first news.'

//Присоение элементу содержимого

console.log(title)

// <div class = "title">This is our first title</div>

document.body.append(title);

// добавление элемента на страницу

```
## Первый параметр element.insertAdjacentHtml


специальное слово, указывающее, куда по отношению к elem производить вставку. 


### Значение должно быть одним из следующих:

- "beforebegin" – вставить html непосредственно перед elem,
- "afterbegin" – вставить html в начало elem,
- "beforeend" – вставить html в конец elem,
- "afterend" – вставить html непосредственно после elem.

```js
<div id="about"></div>
<script>
  about.insertAdjacentHTML('beforebegin', '<h1>Welcome to our dental clinik</h1>');
  about.insertAdjacentHTML('afterbegin', '<p>We provide all necessary procedures for the health of your teeth ahnd oral cavity</p>');
</script>

// Результат в html:
// <h1>Welcome to our dental clinik</h1>
//<div id ="about"><p>We provide all necessary procedures for the health of //your teeth ahnd oral cavity</p></div>


```

## Как удалить элемент из DOM-дерева:

</hr>

Element.remove() - мы можем удалить любой элемент из DOM-дерева

```js

<h1>Welcome to our dental clinik</h1>
<div id ="about"><p>We provide all necessary procedures for the health of //your teeth ahnd oral cavity</p></div>

<script>

const paragraph = document.querySelector("p");

paragraph.remove();


</script>

// Результат в  html:
// <h1>Welcome to our dental clinik</h1>
//<div id ="about"></div>

```
