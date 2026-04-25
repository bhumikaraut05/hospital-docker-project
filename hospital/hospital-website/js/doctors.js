// doctors.js - Doctor grid and filter

const doctors = [
  { name: 'Dr. Aditi Sharma', specialization: 'Cardiology', department: 'Cardiology', photo: 'images/doctor1.png' },
  { name: 'Dr. Rahul Mehra', specialization: 'Neurology', department: 'Neurology', photo: 'images/doctor2.png' },
  { name: 'Dr. Priya Singh', specialization: 'Orthopedics', department: 'Orthopedics', photo: 'images/doctor3.png' },
  { name: 'Dr. Karan Patel', specialization: 'Pediatrics', department: 'Pediatrics', photo: 'images/doctor4.png' },
  { name: 'Dr. Neha Verma', specialization: 'Cardiology', department: 'Cardiology', photo: 'images/doctor5.png' },
  { name: 'Dr. Aman Gupta', specialization: 'Neurology', department: 'Neurology', photo: 'images/doctor6.png' },
  { name: 'Dr. Sunita Rao', specialization: 'Orthopedics', department: 'Orthopedics', photo: 'images/doctor7.png' },
  { name: 'Dr. Vikram Sethi', specialization: 'Pediatrics', department: 'Pediatrics', photo: 'images/doctor8.png' }
];

function renderDoctors(dept) {
  const grid = document.getElementById('doctors-grid');
  grid.innerHTML = '';
  let filtered = dept === 'All' ? doctors : doctors.filter(d => d.department === dept);
  filtered.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'doctor-card fade-in';
    card.innerHTML = `
      <img src="${doc.photo}" alt="${doc.name}" class="doctor-photo" />
      <div class="doctor-name">${doc.name}</div>
      <div class="doctor-specialization">${doc.specialization}</div>
      <button class="book-btn" onclick="window.location.href='appointment.html'">Book</button>
    `;
    grid.appendChild(card);
  });
  // Re-apply fade-in animation
  setTimeout(() => {
    document.querySelectorAll('.doctor-card.fade-in').forEach(el => el.classList.add('visible'));
  }, 100);
}
document.addEventListener('DOMContentLoaded', () => {
  renderDoctors('All');
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDoctors(btn.dataset.dept);
    });
  });
});
