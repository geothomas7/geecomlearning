document.addEventListener('DOMContentLoaded', function () {
  var forms = document.querySelectorAll('.newsletter-form, .footer-newsletter-form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            form.style.display = 'none';
            var success = form.parentElement.querySelector('.newsletter-success, .footer-newsletter-success');
            if (success) success.style.display = 'block';
          } else {
            btn.textContent = originalText;
            btn.disabled = false;
            alert('Something went wrong. Please try again or email us directly.');
          }
        })
        .catch(function () {
          btn.textContent = originalText;
          btn.disabled = false;
          alert('Something went wrong. Please try again or email us directly.');
        });
    });
  });
});
