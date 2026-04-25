// contact.js - Contact form validation

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const fields = ['contactName', 'contactEmail', 'contactMessage'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => validateField(el));
    }
  });
  function validateField(el) {
    let valid = true;
    if (!el.value.trim()) valid = false;
    if (el.type === 'email') valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value);
    if (valid) {
      el.classList.add('valid');
      el.classList.remove('invalid');
    } else {
      el.classList.add('invalid');
      el.classList.remove('valid');
    }
    return valid;
  }
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let allValid = true;
      fields.forEach(id => {
        const el = document.getElementById(id);
        if (!validateField(el)) allValid = false;
      });
      if (allValid) {
        const msg = document.getElementById('contact-success');
        msg.textContent = 'Message sent successfully!';
        msg.classList.add('active');
        form.reset();
        fields.forEach(id => {
          const el = document.getElementById(id);
          el.classList.remove('valid', 'invalid');
        });
      } else {
        const msg = document.getElementById('contact-success');
        msg.textContent = '';
        msg.classList.remove('active');
      }
    });
  }
});
