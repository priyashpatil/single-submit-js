class SingleSubmit {
    private options: SingleSubmitOptions;
    static init: (options?: SingleSubmitOptions) => SingleSubmit;

    constructor(options: SingleSubmitOptions = {}) {
        this.options = options;
        this.initialize();
    }

    private initialize(): void {
        this.injectStyles();
        this.setupEventListeners();
    }

    private injectStyles(): void {
        const style = document.createElement('style');

        // Customize CSS styles using options
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

    private setupEventListeners(): void {
        const singleSubmitForms = document.querySelectorAll<HTMLFormElement>('[data-ss-type="single-submit-form"]');

        // Add event listeners to forms.
        singleSubmitForms.forEach((singleSubmitForm) => {
            const submitBtn = singleSubmitForm.querySelector('button[type="submit"]') as HTMLButtonElement;
            const submitLoadingText = singleSubmitForm.dataset.ssLoadingText || (submitBtn?.innerHTML || '');
            const indicator = singleSubmitForm.dataset.ssIndicator || `${this.options.processIndicatorClass}`;

            if (submitBtn) {
                singleSubmitForm.addEventListener('submit', () => this.singleSubmitEvent(submitBtn, submitLoadingText, indicator));
            }
        });
    }

    private singleSubmitEvent(target: HTMLButtonElement, loadingText: string, indicator: string): void {
        target.innerHTML = `
            <span class="${this.options.containerClass}">
                ${loadingText !== '' ? `<span>${loadingText}</span>` : ''}
                <span class="${indicator}" role="status"></span>
            </span>
        `;
        target.disabled = true;
    }
}

interface SingleSubmitOptions {
    containerClass?: string;
    processIndicatorClass?: string;
}

// Define the init method as a static method within the class
SingleSubmit.init = function (options: SingleSubmitOptions = {}): SingleSubmit {
    return new SingleSubmit({
        containerClass: options.containerClass || 'spinner-container-single-submit',
        processIndicatorClass: options.processIndicatorClass || 'spinner-border-single-submit'
    });
}
// noinspection JSUnusedGlobalSymbols
export default SingleSubmit;
