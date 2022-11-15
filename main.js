/* ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES 

Video by Brad Traversy
JavaScript Crash Course For Beginners
https://youtu.be/hdI2bqOjy3c?t=4228 

SELECTION:
Single element
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));

Multiple elements
console.log(document.querySelectorAll('.item));
console.log(document.getElementByClassName('item'));
console.log(document.getElementByClassName('li'));

const items = document.querySelectorAll("item");

items.forEach((item) => console.log(item));
Start at 1:10:29

MANIPULATION:

const ul = document.querySelector('items');

ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

 */

const btn = document.querySelector(".btn");
