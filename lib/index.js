const singleSubmitBtns = document.querySelectorAll('.btn-single-submit');
const singleSubmitForms = document.querySelectorAll('.form-single-submit');

singleSubmitBtns.forEach(function (singleSubmitBtn) {
    let submitLoadingText = singleSubmitBtn.dataset.loadingText ?? 'Processing...';
    singleSubmitBtn.addEventListener('click', function () {
        singleSubmitEvent(singleSubmitBtn, submitLoadingText)
    });
});

singleSubmitForms.forEach(function (singleSubmitForm) {
    let submitBtn = singleSubmitForm.querySelector('button[type="submit"]');
    let submitLoadingText = singleSubmitForm.dataset.loadingText ?? 'Processing...';

    if (submitBtn) {
        singleSubmitForm.addEventListener('submit', function () {
            singleSubmitEvent(submitBtn, submitLoadingText);
        });
    }
});

function singleSubmitEvent(target, loadingText) {
    target.innerHTML = `
            <span class="d-inline-flex align-items-center gap-2">
                <span class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">${loadingText}</span>
                </span>
                <span>${loadingText}</span>
            </span>
        `;
    target.disabled = true;
}