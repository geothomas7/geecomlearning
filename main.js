/* Mobile nav toggle */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* Contact form mailto submission */
const form = document.getElementById('inquiry-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const body = [
      'Training type: ' + (data.get('trainingType') || ''),
      'Audience size: ' + (data.get('audienceSize') || ''),
      'Timeline: ' + (data.get('timeline') || ''),
      'LMS required: ' + (data.get('lms') || ''),
      'Interested in: ' + (data.get('interest') || ''),
      'Notes: ' + (data.get('notes') || '')
    ].join('\n');

    var subject = encodeURIComponent('Project Inquiry');
    var encodedBody = encodeURIComponent(body);
    window.location.href = 'mailto:hello@geecomlearning.com?subject=' + subject + '&body=' + encodedBody;
  });
}

/* Scroll reveal animation */
var reveals = document.querySelectorAll('.reveal');
if (reveals.length && 'IntersectionObserver' in window) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(function (el) { observer.observe(el); });
}

/* Back to top button */
var backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      backToTop.classList.add('is-visible');
    } else {
      backToTop.classList.remove('is-visible');
    }
  });
}
