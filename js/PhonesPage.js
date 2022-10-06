import PhonesCatalog from './components/PhonesCatalog.js';
import Filter from './components/Filter.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCurt from './components/ShoppingCurt.js';
import PhonesService from './PhonesService.js';

export default class PhonesPage {
    constructor({ element }) {
        this._element = element;

        this._state = {
            phones: PhonesService.getAll(),
            selectedPhone: null,
        };

        this._render();

        this._initCatalog();       
        this._initFilter();
        this._initCart();
        this._initViewer();
   
    }

    _initCatalog() {
        this._catalog = new PhonesCatalog({
            element: this._element.querySelector('[data-component="PhonesCatalog"]'),
            phones: this._state.phones,

            onPhoneSelected: (phoneId) => {
                const selectedPhone = PhonesService.getById(phoneId);

                this._catalog.hide();
                this._viewer.show(selectedPhone);
            }
        });
    }

    _initViewer() {
        this._viewer =new PhoneViewer({
            element: this._element.querySelector('[data-component="PhoneViewer"]'),
        });
    }

    _initCart() {
        this._cart =new ShoppingCurt({
            element: this._element.querySelector('[data-component="ShoppingCurt"]'),
        });       
    }

    _initFilter() {
        this._filter =new Filter({
            element: this._element.querySelector('[data-component="Filter"]'),
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
                <div data-component="PhoneViewer" hidden ></div>
                <div data-component="PhonesCatalog"></div>              
            </div>
        </div>
        `;
    }
}