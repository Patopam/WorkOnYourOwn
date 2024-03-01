import * as components from './components/indexpadre.js';
import { dataCards } from './components/data/dataCards.js';
class AppContainer extends HTMLElement{
    cards = [];
    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        dataCards.forEach((Element) => {
            const card = this.ownerDocument.createElement('custom-card');
            card.setAttribute('name', Element.name);
            card.setAttribute('gender', Element.gender);
            card.setAttribute('wizard', Element.wizard);
            card.setAttribute('image', Element.image);
            card.setAttribute('dateOfBirth', Element.dateOfBirth);
            this.cards.push(card);
        });
    }

    conneconnectedCallback() {
		this.render();
	}

	render(){

        this.shadowRoot.innerHTML = ``
        this.cards.forEach((mycard) =>{
            this.shadowRoot.appendChild(mycard)
        });
    } 

}
customElements.define('app-container', AppContainer);
