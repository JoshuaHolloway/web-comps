import template from './template.js';

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const content = template.content;
    const cloned = content.cloneNode(true);
    this.append(cloned);
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);