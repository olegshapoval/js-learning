export default class PhonesCatalog {
    constructor({ element, phones }) {
        this._element = element;

        this._probs = {
          phones: phones
        };

        this._render();

        this._element.addEventListner('click', (event) => {
          const detailsLink = event.target.closest('[data-element="DatailsLink"]');

          if (!detailsLink) return;
          

        })
    }

    _render() {
        this._element.innerHTML = `
        <ul class="phones">
        ${this._probs.phones.map(phone => `
        <li class="thumbnail">
          <a 
            data-element="DatailsLink" 
            data-phone-id="${phone.id}"
            href="#!/phones/${phone.id}" 
            class="thumb">
            <img alt="${phone.name}" src="${phone.imageUrl}">
          </a>

          <div class="phones__btn-buy-wrapper">
            <a class="btn btn-success">
              Add
            </a>
          </div>

          <a 
            data-element="DatailsLink"
            data-phone-id="${phone.id}" 
            href="#!/phones/${phone.id}">
            ${phone.name}
          </a>
          <p>${phone.snippet}</p>
        </li> 
        `).join('') } 
        </ul>
        `;
    }
}