const innerHTML = `
  <style>
    .wc-btn {
      background: lightgreen;
      display: inline-block;
      padding: 1rem;
      cursor: pointer;
    }
  </style>
  <div class="wc-btn">Custom Element</div>
`;

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();

    // Encapsulate CSS:
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = innerHTML;
  }

  connectedCallback() {
    // this.innerHTML = innerHTML;
  }

}

// Step 2: Register
window.customElements.define('web-comp', CustomElement);