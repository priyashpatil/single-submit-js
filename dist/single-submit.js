var SingleSubmit = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

  class SingleSubmit2 {
    constructor(options = {}) {
      __publicField(this, "options");
      this.options = options;
      this.initialize();
    }
    initialize() {
      this.injectStyles();
      this.setupEventListeners();
    }
    injectStyles() {
      const style = document.createElement("style");
      style.textContent = `
           .spinner-container-single-submit {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
           }
           .spinner-border-single-submit {
                height: 1rem;
                width: 1rem;
                border-radius: 50%;
                animation: 0.75s linear infinite spinner-border-single-submit;
                border: 0.2rem solid currentColor;
                border-right-color: transparent;
           }
           @keyframes spinner-border-single-submit {
                to {
                    transform: rotate(360deg);
                }
           }
           `;
      document.head.appendChild(style);
    }
    setupEventListeners() {
      const singleSubmitForms = document.querySelectorAll('[data-ss-type="single-submit-form"]');
      singleSubmitForms.forEach((singleSubmitForm) => {
        const submitBtn = singleSubmitForm.querySelector('button[type="submit"]');
        const submitLoadingText = singleSubmitForm.dataset.ssLoadingText || ((submitBtn == null ? void 0 : submitBtn.innerHTML) || "");
        const indicator = singleSubmitForm.dataset.ssIndicator || `${this.options.processIndicatorClass}`;
        if (submitBtn) {
          singleSubmitForm.addEventListener("submit", () => this.singleSubmitEvent(submitBtn, submitLoadingText, indicator));
        }
      });
    }
    singleSubmitEvent(target, loadingText, indicator) {
      target.innerHTML = `
            <span class="${this.options.containerClass}">
                ${loadingText !== "" ? `<span>${loadingText}</span>` : ""}
                <span class="${indicator}" role="status"></span>
            </span>
        `;
      target.disabled = true;
    }
  }
  __publicField(SingleSubmit2, "init");
  SingleSubmit2.init = function(options = {}) {
    return new SingleSubmit2({
      containerClass: options.containerClass || "spinner-container-single-submit",
      processIndicatorClass: options.processIndicatorClass || "spinner-border-single-submit"
    });
  };
  return SingleSubmit2;
}();
//# sourceMappingURL=single-submit.js.map
