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
    importCSS('./web-comp.css');

    this.appendChild(div);
    // this.append(style, div);
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);