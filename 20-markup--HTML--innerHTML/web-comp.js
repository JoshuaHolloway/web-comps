const innerHTML = `
  <div>Custom Element</div>
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