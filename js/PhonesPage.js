import PhonesCatalog from './components/PhonesCatalog.js';
import Filter from './components/Filter.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCurt from './components/ShoppingCurt.js';
import PhonesService from './PhonesService.js';

export default class PhonesPage {
    constructor({ element }) {
        this._element = element;

        this._render();

        new PhonesCatalog({
            element: this._element.querySelector('[data-component="PhonesCatalog"]'),
            phones: PhonesService.getAll()
        });

        new PhoneViewer({
            element: this._element.querySelector('[data-component="PhoneViewer"]'),
        });

        new Filter({
            element: this._element.querySelector('[data-component="Filter"]'),
        });

        new ShoppingCurt({
            element: this._element.querySelector('[data-component="ShoppingCurt"]'),
        });
    }

    _render() {
        this._element.innerHTML = `
        <div class="row">

            <!--Sidebar-->
            <div class="col-md-2">
                <section>
                    <div data-component="Filter"></div>
                </section>

                <section>
                    <div data-component="ShoppingCurt"></div>
                </section>
            </div>

            <!--Main content-->
            <div class="col-md-10">
                <div data-component="PhonesCatalog"></div>
                <div data-component="PhoneViewer" hidden></div>
            </div>
        </div>
        `;
    }
}