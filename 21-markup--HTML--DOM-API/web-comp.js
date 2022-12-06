// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const div = document.createElement('div');
    div.innerText = 'Custom Element';
    this.appendChild(div);
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);