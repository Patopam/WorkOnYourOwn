class CustomCard extends HTMLElement {

constructor(){
    super();
    this.attachShadow({mode : 'open'});
}
static get observedAttributes(){
    return['name','gender','wizard','image','dateOfBirth'];
}
connectedCallback(){
    this.render();
}
attributeChangedCallback(propName,oldValue,newValue){
    this[propName] = newValue;
    this.render();
}
render(){
    this.shadowRoot.innerHTML = `
    <link rel="name" href="./src/components/card/style.css">

    <h1>Nombre:${this.name}</h1>
    <P>Genero:${this.gender}</P>
    <P>Es mago?:${this.wizard}</P>
    <P>Fecha de nacimiento:${this.dateOfBirth}</P>
    <img src="${this.image}"></img>

    `;

}

}
customElements.define('custom-card', CustomCard);
export default CustomCard;