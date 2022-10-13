export default class Component {
    constructor({ element }) {
      this._element = element;
      this._state = {};
      this._props = {};
    }
  
    hide() {
      this._element.hidden = true;    
    }
  
    show() {
      this._element.hidden = false;    
    }

    on(eventName, elementName, callBack) {
        this._element.addEventListener(eventName, (event) => {
          const delegateTarget = event.target.closest(`[data-element="${elementName}"]`);
  
          if (!delegateTarget) return;
  
          event.delegateTarget = delegateTarget;
          
          callBack(event);
        })  
    }

    _setState (partial) {
        this._state = {
            ...this._state,
            ...partial,
        };
        
        this._updateView();
    }

    _setProps (partial) {
        this._props = {
            ...this._props,
            ...partial,
        };

        this._updateView();
    }

    
  };