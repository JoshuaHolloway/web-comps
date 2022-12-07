import template from './template.js';

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();

    // Activate Template - Step 1: Clone its contents
    // (deep) clone template (deep = clone node, attributes, descendants)
    const content = template.content;
    const cloned = content.cloneNode(true);

    // Activate Template - Step 2: Append it to the (shadow) DOM
    // Encapsulate CSS:
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cloned)
  }

  connectedCallback() {
    // const content = template.content;
    // const cloned = content.cloneNode(true);
    // this.append(cloned);
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);