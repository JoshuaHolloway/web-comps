import template from './template.js';

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();

    // Encapsulate CSS:
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template.innerHTML;
  }

  connectedCallback() {
    // this.innerHTML = template.innerHTML;
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);