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

EVENTS:
const btn = document.querySelector(".btn");

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target.className);
  //console.log(e.target.id);
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = #ccc;
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = <h1>Hello</h1>;
});
 */

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    //Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
