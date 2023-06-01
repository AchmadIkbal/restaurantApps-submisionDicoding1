import "./food-item"
class FoodsList extends HTMLElement {
    set foods(foods) {
        this._foods = foods;
        this.render();
    }

    render() {
        for (let restaurant of this._foods) {
            const foodItemElement = document.createElement("food-item");
            foodItemElement.food = restaurant
            this.appendChild(foodItemElement)

        }
    }
}
customElements.define("food-list", FoodsList)