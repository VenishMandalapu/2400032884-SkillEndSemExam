// Toggle sidebar on mobile
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Menu';
toggleBtn.classList.add('toggle-btn');
document.querySelector('.top-bar').appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Add active class styles in CSS for mobile toggle
// (This is handled in styles.css with media query)
