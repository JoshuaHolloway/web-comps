// 32-markup--CSS--template-2--cloneNode
// 33-markup--CSS--template-2--cloneNode--external-styles
// 34-markup--CSS--template-2--cloneNode--external-styles--SASS
// 35-markup--CSS--template-3--cloneNode--import-template--external-styles--SASS
// 36: add shadow DOM

// 40: Passing in CSS via attributes

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const div = document.createElement('div');
    div.innerText = 'Custom Element';
    div.classList.add('custom-element');

    const style = document.createElement('style');
    style.textContent = `
      .custom-element { background: lightgreen; }
    `;

    // this.appendChild(div);
    this.append(style, div);
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);