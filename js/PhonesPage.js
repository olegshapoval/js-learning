import PhonesCatalog from './components/PhonesCatalog.js';
import Filter from './components/Filter.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCurt from './components/ShoppingCurt.js';
import PhonesService from './PhonesService.js';
import Component from "./component.js";

export default class PhonesPage extends Component {
    constructor({ element }) {
        super({ element });

        this._state = {
            phones: PhonesService.getAll(),
            selectedPhone: null,
        };

        this._render();

    }

    _initCatalog() {
        this._catalog = new PhonesCatalog({
            element: this._element.querySelector('[data-component="PhonesCatalog"]'),
            phones: this._state.phones,

            onPhoneSelected: (phoneId) => {
                this._setState({ 
                    selectedPhone: PhonesService.getById(phoneId)
                 });
                
            },
            onAdd: (phoneId) => {
                this._cart.add(phoneId);        
            },
        });
    }

    _initViewer() {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="PhoneViewer"]'),
            
            onBack:() => {
                this._setState({ 
                    selectedPhone: null
                 });
            },
            onAdd: (phoneId) => {
                this._cart.add(phoneId);        
            },
        });
    }

    _initCart() {
        this._cart = new ShoppingCurt({
            element: this._element.querySelector('[data-component="ShoppingCurt"]'),
        });       
    }

    _initFilter() {
        this._filter =new Filter({
            element: this._element.querySelector('[data-component="Filter"]'),
        });    
    }

    _updateView() {

        this._viewer._setProps({ phone: this._state.selectedPhone });

        if (this._state.selectedPhone) {
            
            this._catalog.hide();
            this._viewer.show();
        } else {
            this._catalog.show();
            this._viewer.hide();
        };   
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

        this._initCatalog();       
        this._initFilter();
        this._initCart();
        this._initViewer();
    }
}