import * as component from './component/indexPadre.js';
//import * as data from '';

class appContainer  extends HTMLElement{
  Cards = [];
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    dataCards.forEach(element => {
      const card = this.ownerDocument.createElement('card-profile');
      card.setAttribute('name', element.name);
      this.Cards. push(card);

    });
  }

  connectedCallback(){
    this. render();
  }

  render(){
    this.shadowRoot.innerHTML=`

    `
    this.Cards.forEach((card))=>{

      this.shadowRoot.appendChild(card);
    }
  }
}

customElements.define('app-container', appContainer);



