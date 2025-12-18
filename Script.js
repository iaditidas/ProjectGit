Script.js
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('mouseenter', () => {
      profile.style.backgroundColor = '#f0f0f0';
    });
    profile.addEventListener('mouseleave', () => {
      profile.style.backgroundColor = 'white';
    });
  });