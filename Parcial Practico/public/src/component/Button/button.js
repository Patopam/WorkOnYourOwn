// <button></button>
class Button extends HTMLElement {

  constructor() {
		super();
		this.attachShadow({ mode: 'open' });
    this.onButtonClicked = this.onButtonClicked.bind(this)
	}

  static get observedAttributes (){
    return["message"]
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this[attrName]= newVal;
    this.mount();

  }

  connectedCallback() {
    this.mount();
  }

  mount(){
    this.render();
    this.addListeners();
  }

  addListeners(){
    this.shadowRoot.querySelector("button").addEventListener('click',this.onButtonClicked);
  }

  render(){
    this.shadowRoot.innerHTML= `
    <section>
    <p>${this.message}</p>
    <button class="popa">Dar Like</button>
  </section>
    `
  }

  onButtonClicked(){
    const currentValue = this.getAttribute("message");
    this.setAttribute("message","Gracias por dar like");
  }


}

customElements.define('button', Button);
export default Button; 