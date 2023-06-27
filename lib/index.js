const singleSubmitBtns = document.querySelectorAll('.btn-single-submit');
const singleSubmitForms = document.querySelectorAll('.form-single-submit');

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
        z-index: 1;
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
</style>`)

// Initialize Single Submit
singleSubmitBtns.forEach(function (singleSubmitBtn) {
    let submitLoadingText = singleSubmitBtn.dataset.loadingText ?? singleSubmitBtn.innerHTML;
    singleSubmitBtn.addEventListener('click', function () {
        singleSubmitEvent(singleSubmitBtn, submitLoadingText)
    });
});

singleSubmitForms.forEach(function (singleSubmitForm) {
    let submitBtn = singleSubmitForm.querySelector('button[type="submit"]');
    let submitLoadingText = singleSubmitForm.dataset.loadingText ?? submitBtn.innerHTML;

    if (submitBtn) {
        singleSubmitForm.addEventListener('submit', function () {
            singleSubmitEvent(submitBtn, submitLoadingText);
        });
    }
});

// Replace the button innerHTML
function singleSubmitEvent(target, loadingText) {
    target.innerHTML = `
            <span class="spinner-container-single-submit">
                <span>${loadingText}</span>
                <span class="spinner-border-single-submit" role="status"></span>
            </span>
        `;
    target.disabled = true;
}