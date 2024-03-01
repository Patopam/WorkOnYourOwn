// <card></card>
class Card extends HTMLElement {
	static get observeAttribute() {
		return 'name', 'nickname', 'age';
	}
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this[attrName] = newVal;
		this.render;
	}

	render() {
		this.shadowRoot.innerHTML = `
  <section>
  <link rel="stylesheet" href="src/component/Cards/card.css">
  <h1>${this.name}</h1>
  <h1>${this.nickname}</h1>
  <h1>${this.age}</h1>

</section>
  `;
	}
}

customElements.define('card-profile', Card);
export default Card;
