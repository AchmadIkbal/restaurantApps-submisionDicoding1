import Helper from "./helper"
import ApiRestaurant from "../../api/api-restaurant"



const inputSearch = document.querySelector("input#search-item");
const btnSearch = document.querySelector("button#btn-search")
const enterElement = document.querySelector("#text-enter");

inputSearch.addEventListener("keyup", async(e) => {
    enterElement.innerHTML = `<p><i class="fa fa-exclamation-triangle"></i> Please enter or click button search</p>`
    if (e.keyCode === 13) {
        e.preventDefault();
        if (inputSearch.value === "") {
            return
        } else {
            const dtSearch = await Helper.filterSearch(inputSearch.value)
            if (dtSearch.length === 0) {
                Helper.openModal(inputSearch.value);
            } else {
                Helper.removeElement();
                const dtElement = document.querySelector('#body-content');
                const foodElement = document.createElement("food-list");
                foodElement.foods = dtSearch;
                dtElement.appendChild(foodElement)
            }
        }
    }
})

btnSearch.addEventListener("click", async _ => {
    if (inputSearch.value === "") {
        return
    } else {
        const dtSearch = await Helper.filterSearch(inputSearch.value);
        if (dtSearch.length === 0) {
            Helper.openModal(inputSearch.value);
        } else {
            const dtElement = document.querySelector('#body-content');
            Helper.removeElement();
            const foodElement = document.createElement("food-list");
            foodElement.foods = dtSearch;
            dtElement.appendChild(foodElement)
        }
    }
})

document.addEventListener('DOMContentLoaded', async(event) => {
    const response = await ApiRestaurant.getAll();
    const { restaurants } = response
    const dtElement = document.querySelector('#body-content');
    const foodElement = document.createElement("food-list");
    foodElement.foods = restaurants;
    dtElement.appendChild(foodElement)
});
// import '../../component/food-list.js';
// import '../..//component/search-bar.js';
// import ApiRestaurant from '../../api/api-restaurant.js';

// const main = () => {
//     const searchElement = document.querySelector('search-bar');
//     const clubListElement = document.querySelector('food-list');

//     const onButtonSearchClicked = async() => {
//         try {
//             const result = await DataSource.searchClub(searchElement.value);
//             renderResult(result);
//         } catch (message) {
//             fallbackResult(message);
//         }
//     };

//     const renderResult = results => {
//         clubListElement.clubs = results;
//     };

//     const fallbackResult = message => {
//         clubListElement.renderError(message);
//     };

//     searchElement.clickEvent = onButtonSearchClicked;
// };

// export default main;