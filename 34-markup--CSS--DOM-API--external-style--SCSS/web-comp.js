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

    const importCSS = (path) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", path);
      // this.shadowRoot.appendChild(link);
      this.appendChild(link);
    };
    importCSS('./css/web-comp.css'); // NOTE: I think this path is relative to the file the custom element <web-comp> is actually used in!

    this.appendChild(div);
    // this.append(style, div);
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);