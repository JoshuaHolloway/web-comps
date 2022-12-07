const template = document.createElement('template');
template.innerHTML = `
  <div id="web-comp">Custom Element</div>
`;

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    // https://stackoverflow.com/a/65006883
    const content = template.content;
    const cloned = content.cloneNode(true);
    this.append(cloned);
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);