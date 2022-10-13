import Component from "../component.js";

export default class ShoppingCurt extends Component{
    constructor({ element }) {
        super({ element });

        this._state = {
            items: [],
        };

        this._render();
    }

    add(phoneId) {
        super._setState({
            items: [...this._state.items,phoneId],
        });    
    }

    _updateView() {
        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <div>
            <p>Shopping Cart</p>
            <ul>
                ${ this._state.items.map( item => `
                <li>
                    <span>${item}</span>
                    <button>x</button>
                </li>
                `).join('') }
            </ul>
        </div>
        `;
    }
}