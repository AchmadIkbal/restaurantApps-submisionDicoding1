import 'regenerator-runtime'; /* for async await transpile */
import '../src/styles/main.css';
import '../src/styles/js/main.js';
import './component/food-list.js';


const menu = document.querySelector('#menu');
const page = document.querySelector('.page');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

page.addEventListener('click', function() {
    drawer.classList.remove('open');
});

main.addEventListener('click', function() {
    drawer.classList.remove('open');
});