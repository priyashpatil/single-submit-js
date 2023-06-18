const i = document.querySelectorAll(".btn-single-submit"), a = document.querySelectorAll(".form-single-submit");
i.forEach(function(n) {
  let e = n.dataset.loadingText ?? "Processing...";
  n.addEventListener("click", function() {
    s(n, e);
  });
});
a.forEach(function(n) {
  let e = n.querySelector('button[type="submit"]'), t = n.dataset.loadingText ?? "Processing...";
  e && n.addEventListener("submit", function() {
    s(e, t);
  });
});
function s(n, e) {
  n.innerHTML = `
            <span class="d-inline-flex align-items-center gap-2">
                <span class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">${e}</span>
                </span>
                <span>${e}</span>
            </span>
        `, n.disabled = !0;
}
