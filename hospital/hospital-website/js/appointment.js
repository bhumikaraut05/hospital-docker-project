// appointment.js - Appointment form validation and localStorage

document.addEventListener('DOMContentLoaded', () => {
  // Populate doctor dropdown
  const doctorList = [
    'Dr. Aditi Sharma',
    'Dr. Rahul Mehra',
    'Dr. Priya Singh',
    'Dr. Karan Patel',
    'Dr. Neha Verma',
    'Dr. Aman Gupta',
    'Dr. Sunita Rao',
    'Dr. Vikram Sethi'
  ];
  const doctorSelect = document.getElementById('doctor');
  if (doctorSelect) {
    doctorList.forEach(doc => {
      const opt = document.createElement('option');
      opt.value = doc;
      opt.textContent = doc;
      doctorSelect.appendChild(opt);
    });
  }

  // Real-time validation
  const form = document.getElementById('appointment-form');
  const fields = ['patientName', 'email', 'phone', 'doctor', 'department', 'date', 'time', 'message'];
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
    if (el.id === 'date') {
      const today = new Date();
      const valDate = new Date(el.value);
      valid = valDate > today;
    }
    if (valid) {
      el.classList.add('valid');
      el.classList.remove('invalid');
    } else {
      el.classList.add('invalid');
      el.classList.remove('valid');
    }
    return valid;
  }
  // Form submit
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let allValid = true;
      fields.forEach(id => {
        const el = document.getElementById(id);
        if (!validateField(el)) allValid = false;
      });
      if (allValid) {
        // Save to localStorage
        const data = {};
        fields.forEach(id => {
          data[id] = document.getElementById(id).value;
        });
        localStorage.setItem('lastAppointment', JSON.stringify(data));
        // Show success message
        const msg = document.getElementById('appointment-success');
        msg.textContent = 'Appointment booked successfully!';
        msg.classList.add('active');
        form.reset();
        fields.forEach(id => {
          const el = document.getElementById(id);
          el.classList.remove('valid', 'invalid');
        });
      } else {
        const msg = document.getElementById('appointment-success');
        msg.textContent = '';
        msg.classList.remove('active');
      }
    });
  }
});
