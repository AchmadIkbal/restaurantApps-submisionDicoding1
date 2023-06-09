import ApiRestaurant from "../../api/api-restaurant"
class Helper {
    static async filterSearch(query) {
        const dt = await this.getData();
        return dt.filter((el) => {
            let restaurantName = el.name;
            return restaurantName.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }

    static async getData() {
        const response = await ApiRestaurant.getAll();
        const { restaurants } = response
        return restaurants

    }
    static removeElement() {
        document.querySelector("food-list").remove();
    }
    static openModal(param) {
        const modalElement = document.querySelector("#modal");
        modalElement.innerHTML = `<style>
        @import 'https://fonts.googleapis.com/css?family=Prompt:400,700';
        .modal {
            display: block;
            width: 319px;
            max-width: 100%;
            height: 266px;
            max-height: 100%;
            position: fixed;
            z-index: 100;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: white;
            box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
            border-radius: 10px;
        }
        
        .closed {
            display: none;
        }
        
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 50;
            background: rgba(0, 0, 0, 0.6);
        }
        
        .modal-guts {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            padding: 25px 0 0 0;
        }
        
        .modal .close-button {
            position: absolute;
            /* don't need to go crazy with z-index here, just sits over .modal-guts */
            z-index: 1;
            top: 10px;
            /* needs to look OK with or without scrollbar */
            right: 20px;
            border: 0;
            background: black;
            color: white;
            padding: 5px 10px;
            font-size: 1.3rem;
        }
        
        .open-button {
            border: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: lightgreen;
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 21px;
        }
        
        .img-center {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        
        .text-center {
            text-align: center;
        }
        
        p.title {
            color: #595959;
            font-size: 1.875em;
            font-weight: 600;
            text-align: center;
            text-transform: none;
        }
        
        p.content {
            color: #545454;
            font-size: 1.125em;
            font-weight: 400;
            line-height: normal;
        }
        
        button.confirm {
            width: 60px;
            height: 31px;
            border: 0;
            border-radius: .25em;
            background: initial;
            background-color: #3085d6;
            color: #fff;
            font-size: 1.0625em;
            border-left-color: rgb(48, 133, 214);
            border-right-color: rgb(48, 133, 214);
        }
        </style>

            <div class="modal" id="modal">
                <div class="modal-guts">
                    <img tabindex="0" class="img-center" src="assets/images/error-1.png" alt="caution" style=" max-width: 100%;
            height: 100px;">
                    <div class="text-center">
                        <p tabindex="0" class="title">Oops...</p>
                        <p tabindex="0" class="content">${param} not found</p>
                        <button tabindex="0" id="close-button" class="confirm">Ok</button>
                    </div>
                </div>
            </div>
            `;
        const modal = document.querySelector(".modal");
        modal.addEventListener("click", _ => {
            modal.classList.toggle("closed");
            modal.remove()
        })

    }
}
export default Helper