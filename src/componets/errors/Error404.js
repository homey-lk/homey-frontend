import Base from "./../Base.js";
import CSS from "./Error404.css.js";

export default class Error404 extends Base {
  css = CSS;

  content = `
    <div class="container">
        <div>
            404 | Page  not found.
        </div>
        <span>Go back to <a href="/">home 🔙</a></span>
    </div>
`;
  constructor() {
    super();
    this.mount();
  } //End of the constructor

  connectedCallback() {}
} //End of Class

const elementName = "err-404";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Error404)
  : null;
