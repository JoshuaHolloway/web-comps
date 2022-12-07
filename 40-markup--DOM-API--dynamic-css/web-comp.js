const innerHTML = `
  <div class="custom-element">Custom Element</div>
`;

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  // --------------------------------------------
  
  constructor() {
    super();
  }

  // --------------------------------------------

  connectedCallback() {
    const div = document.createElement('div');
    div.innerText = 'Custom Element';
    div.classList.add('custom-element');
    this.appendChild(div);
  }

  // --------------------------------------------
  
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributes changed');
    updateStyle(this);
  }
  
  // --------------------------------------------
  
  static get observedAttributes() { return ['bg', 'length']; }
  
  // --------------------------------------------

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);

// ==============================================

  // Attributes -> CSS:
function updateStyle(elem) {

  const bg = elem.getAttribute("bg");
  const style = document.createElement('style');

  style.textContent = `
    .custom-element {
      background-color: ${bg};
    }
  `;
  // elem.shadowRoot.appendChild(style);
  elem.appendChild(style);
}
