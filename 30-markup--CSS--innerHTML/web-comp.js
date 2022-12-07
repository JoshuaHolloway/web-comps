// 30-markup--CSS--innerHTML
// 31-markup--CSS--DOM-API
// 32-markup--CSS--template-2--cloneNode
// 33-markup--CSS--template-2--cloneNode--external-styles
// 34-markup--CSS--template-2--cloneNode--external-styles--SASS
// 35-markup--CSS--template-3--cloneNode--import-template--external-styles--SASS
// 36: add shadow DOM

// 40: Passing in CSS via attributes

const innerHTML = `
  <style>
    .custom-element {
      background: lightgreen;
    }
  </style>
  <div class="custom-element">Custom Element</div>
`;

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = innerHTML;
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);