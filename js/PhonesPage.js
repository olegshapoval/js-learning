import PhonesCatalog from './components/PhonesCatalog.js';
import Filter from './components/Filter.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCurt from './components/ShoppingCurt.js';

export default class PhonesPage {
    constructor({ element }) {
        this._element = element;

        this._render();

        new PhonesCatalog({
            element: this._element.querySelector('PhonesCatalog'),
        });

        new PhoneViewer({
            element: this._element.querySelector('PhoneViewer'),
        });

        new Filter({
            element: this._element.querySelector('Filter'),
        });

        new ShoppingCurt({
            element: this._element.querySelector('ShoppingCurt'),
        });
    }

    _render() {
        this._element.innerHTML = `
        <div class="row">

            <!--Sidebar-->
            <div class="col-md-2">
                <section>
                <Filter />
                </section>

                <section>
                <ShoppingCurt />
                </section>
            </div>

            <!--Main content-->
            <div class="col-md-10">
                <section>
                <PhonesCatalog />
                </section>

                <PhoneViewer />
            </div>
        </div>
        `;
    }
}