class FoodItem extends HTMLElement {
    set food(food) {
        this._food = food;
        this.render()
    }

    render() {
        this.innerHTML = `
        <style>
        
        img {
            width: 100%;
            border-radius: 15px;
            display: block;
        }
        
        a {
            color: inherit;
        }
        
        
        /* 
        
        Eye view
        
        https://i.postimg.cc/9MtT4GZY/view.png' border='0' alt='view */
        
        
        /*
        =========================
        Font Styling
        =========================
        */
        
        h1 {
            font: var(--var-heading);
            color: var(--var-lightest);
            padding: 1.2em 0;
        }
        
        h2 {
            font: var(--var-small-heading);
            color: var(--var-lightest);
            /* padding on .coin-base */
        }
        
        p {
            font: var(--var-para);
            color: var(--var-soft-blue);
        }
        
        
        
        /* 
        =====================
        Classes
        =====================
        */
        
        
        /* LAYOUT */
        
        .card-container {
            width: 100%;
            max-width: 500px;
            margin: 2em auto;
            background-color: var(--var-card-dark);
            border-radius: 15px;
            margin-bottom: 1rem;
            padding: 2rem;
            background-color: white;
        }
        
        div.flex-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        div.coin-base,
        .time-left,
        .card-attribute {
            display: flex;
            align-items: center;
            padding: 1em 0;
        }
        
        .card-attribute {
            padding-bottom: 1.5em;
            border-top: 2px solid var(--var-line-dark);
        }
        
        a.hero-image-container {
            position: relative;
            display: block;
        }
        
        
        /* Details */
        
        img.eye {
            position: absolute;
            width: 100%;
            max-width: 2em;
            top: 44%;
            left: 43%;
        }
        
        @media (min-width:400px) {
            img.eye {
                max-width: 3em;
            }
        }
        
        .hero-image-container::after {
            content: '';
            background-image: url("https://i.postimg.cc/9MtT4GZY/view.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 5rem;
            background-color: hsla(178, 100%, 50%, 0.3);
            width: 8o0%;
            height: 800%;
            border-radius: 1rem;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            z-index: 2;
            opacity: 0;
            transition: opacity 0.3s ease-out;
        }
        
        .hero-image-container:hover::after {
            opacity: 1;
        }
        
        .small-image {
            width: 1.2em;
            margin-right: .5em;
        }
        
        .small-avatar {
            width: 2em;
            border-radius: 200px;
            outline: 2px solid white;
            margin-right: 1.4em;
        }
        
        div.attribution {
            margin: 0 auto;
            width: 100%;
            font: var(--var-para);
            text-align: center;
            padding: 1.5em 0 4em 0;
            color: var(--var-line-dark);
        }
        
        .attribution a {
            color: var(--var-soft-blue);
        }
        
        @media (min-width:600px) {
            body {
                font-size: 18px;
            }
        }
        </style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        
        <div class="card-container">
        <a href="/" class="hero-image-container">
            <img class="hero-image" src="${this._food.pictureId}" alt="Spinning glass cube" />
        </a>
        <main class="main-content">
            <h1>Name Cafe : ${this._food.name}</h1>
            <p>${this._food.description}</p>
            <div class="flex-row">
                <div class="coin-base">
                    <h2><FontAwesomeIcon icon="fa-solid fa-star" size="sm" style={{color: "#ffdd00",}} />Rating : ${this._food.rating}</h2>
                </div>
                 <div class="time-left">  
                     <p>Kota : ${this._food.city}</p>
                </div>
            </div>
        </main>
    </div>
    </div>`
    }

}
customElements.define("food-item", FoodItem);