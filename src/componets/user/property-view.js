import Base from './../Base.js'

export default class PropertyView extends Base {

    css = `
    .container {
        position: relative;
        display: inline-block;
        width: 300px;
        height: 420px;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
        margin: 2em;
    }
   
    .slide {
        position: absolute;
        padding: 0;
    }

    .slider {
        position: absolute;
        margin: 0em;
        top: 25%;
        font-size: 5em;
        background-color: transparent;
        border: none;
        z-index: 5;
        outline: none;
        cursor: pointer;
    }
   
    .slider-previous {
        left: 0.1em;
    }
           
    .slider-next {
        right: 0.1em;
    }
   
    .img img {
        margin:0;
        height: 200px;
        width: 100%;
        z-index: 4;
        display: none;
    }

    .details {
        transform: translateY(179px);
        background-color: rgba(200, 200, 200, 0.8);
        padding-bottom: 30px;
    }

    .title {
        padding: 0.1em;
    }

    span {
        margin: auto;
    }

    .star {
        padding: 1em;
        font-size: 1.2em;
        color: #ffffff;
        cursor: pointer;
        transition: 1s;
    }

    .star:hover {
        color: yellow;
    }

    .share {
        font-weight: bold;
        position: relative;
    }
    .share:before {
        content: ".";
        font-size: 2.2em;
        position: absolute;
        bottom: -1px;
        left: -4px;
    }
    .share:after {
        content: ":";
        font-size: 2em;
        position: absolute;
        bottom: -4px;
        right: -7px;
    }

    .price {
        padding-left: 1em;
        font-weight: bold;
    }

    .description {
        margin: 0.5em;
        height: 5em;
        text-align: justify;
    }

    button {
        font-weight: bold;
        font-size: 1.1em;
        border:none;
        border-radius: 2px;
        padding: 0.3em;
        display: inline;
        margin:0.1em;
        color: #eeeeee;
        cursor: pointer;
    }

    .comment {
        background-color: rgba(4, 47, 102, 0.8);
    }

    .reserve {
        background-color: rgba(223, 73, 40, 0.8);
    }

    .more {
        background-color: rgba(12, 164, 44, 0.8);
    }
    
    `
    content = `
        <div class="container">
           <div class="slide">
           <button class="slider slider-previous"><</button>
           <button class="slider slider-next">></button>
           
            <slot name="img" class="img"></slot>
            
           </div>
           <div class="details">
                <div>
                    <slot name="title" class="title"></slot>
                    <span class="star">&starf;</span>
                    <span class="share">&lt;</span>
                    <span class="price">Rs. 17, 000</button>
                </div>
                <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed urna eu lacus facilisis mollis. Sed consequat odio lorem, ac vulputate nisi imperdiet efficitur. Quisque non nunc eu sapien.
                </div>
                <div>
                    <button class="comment">Comment</button>
                    <button class="reserve">Reserve</button>
                    <button class="more">More >></button>
                </div>
           </div>
        </div>
    `

    constructor() {
        super()
        this.mount()
    }

    connectedCallback() {
        this.state.img = 1;

        const slideNext = ()=> {
                this.qsAll('img')[this.state.img].style.display = 'none'
                this.qsAll('img').length - 1 > this.state.img ? this.state.img++ : this.state.img = 0
                this.qsAll('img')[this.state.img].style.display = 'block'
        }

        const slidePrevious = ()=> {
            this.qsAll('img')[this.state.img].style.display = 'none'
            0 < this.state.img ? this.state.img-- : this.state.img = this.qsAll('img').length -1 
            this.qsAll('img')[this.state.img].style.display = 'block'
        }

        this._qs('.slider-previous').addEventListener('click', () => {slidePrevious()})
        this._qs('.slider-next').addEventListener('click', () => {slideNext()})
        this._qs('.slider-next').click();

        setInterval(() => slideNext(),5000)
        
    }

}

window.customElements.define('property-view', PropertyView)
