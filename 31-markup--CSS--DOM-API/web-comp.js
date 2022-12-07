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