// Default CSS
document.head.insertAdjacentHTML("beforeend", `<style>
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
    
    .spinner-grow-single-submit {
        height: 1rem;
        width: 1rem;
        animation: 0.75s linear infinite spinner-grow-single-submit;
        background-color: currentColor;
        opacity: 0;
        border-radius: 50%;
    }
      
    @keyframes spinner-border-single-submit {
        to {
            transform: rotate(360deg);
        }
    }
    
    @keyframes spinner-grow-single-submit {
        0% {
            transform: scale(0);
        }
        50% {
            opacity: 1;
            transform: none;
        }
    }
</style>`)

// Initialize Single Submit.
const singleSubmitBtns = document.querySelectorAll('[data-ss-type="single-submit-button"]');
const singleSubmitForms = document.querySelectorAll('[data-ss-type="single-submit-form"]');

// Add event listeners to buttons.
singleSubmitBtns.forEach(function (singleSubmitBtn) {
    let submitLoadingText = singleSubmitBtn.dataset.ssLoadingText ?? singleSubmitBtn.innerHTML;
    let indicator = singleSubmitBtn.dataset.ssIndicator ?? 'spinner-border-single-submit';
    singleSubmitBtn.addEventListener('click', function () {
        singleSubmitEvent(singleSubmitBtn, submitLoadingText, indicator)
    });
});

// Add event listeners to forms.
singleSubmitForms.forEach(function (singleSubmitForm) {
    let submitBtn = singleSubmitForm.querySelector('button[type="submit"]');
    let submitLoadingText = singleSubmitForm.dataset.ssLoadingText ?? submitBtn.innerHTML;
    let indicator = singleSubmitForm.dataset.ssIndicator ?? 'spinner-border-single-submit';

    if (submitBtn) {
        singleSubmitForm.addEventListener('submit', function () {
            singleSubmitEvent(submitBtn, submitLoadingText, indicator);
        });
    }
});

// Replace the button innerHTML.
function singleSubmitEvent(target, loadingText, indicator) {
    target.innerHTML = `
            <span class="spinner-container-single-submit">
                ${loadingText !== '' ? `<span>${loadingText}</span>` : ''}
                <span class="${indicator}" role="status"></span>
            </span>
        `;
    target.disabled = true;
}