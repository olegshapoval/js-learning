export default class PhonesCatalog {
    constructor({ element, phones }) {
        this._element = element;

        this._probs = {
          phones: phones
        };

        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <ul class="phones">
        ${this._probs.phones.map(phone => `
        <li class="thumbnail">
          <a href="#!/phones/${phone.id}" class="thumb">
            <img alt="${phone.name}" src="${phone.imageUrl}">
          </a>

          <div class="phones__btn-buy-wrapper">
            <a class="btn btn-success">
              Add
            </a>
          </div>

          <a href="#!/phones/${phone.id}">${phone.name}</a>
          <p>${phone.snippet}</p>
        </li> 
        `).join('') } 
        </ul>
        `;
    }
}