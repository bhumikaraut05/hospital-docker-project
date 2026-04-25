// main.js - Shared JS for all pages
// Handles: Navbar active, dark/light mode, fade-in animation, last appointment display

document.addEventListener('DOMContentLoaded', () => {
  // Navbar active link highlight
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Dark/Light mode toggle
  const modeToggle = document.getElementById('mode-toggle');
  function setMode(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    modeToggle.innerHTML = mode === 'dark' ? '🌙' : '☀️';
    modeToggle.title = mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }
  let theme = localStorage.getItem('theme') || 'light';
  setMode(theme);
  modeToggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    setMode(theme);
  });

  // Intersection Observer for fade-in
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeEls.forEach(el => observer.observe(el));

  // Show last appointment on home page
  const lastAppDiv = document.getElementById('last-appointment');
  if (lastAppDiv) {
    const lastApp = localStorage.getItem('lastAppointment');
    if (lastApp) {
      const data = JSON.parse(lastApp);
      lastAppDiv.innerHTML = `<div class="last-app-box"><strong>Last Appointment:</strong><br>
        ${data.patientName} with Dr. ${data.doctor} (${data.department})<br>
        On ${data.date} at ${data.time}
      </div>`;
      lastAppDiv.classList.add('visible');
    }
  }
});
