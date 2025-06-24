document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Skill filter
function filterSkills(category) {
  const skills = document.querySelectorAll('#skills-list li');
  skills.forEach(skill => {
    if (category === 'All' || skill.dataset.category === category) {
      skill.style.display = 'list-item';
    } else {
      skill.style.display = 'none';
    }
  });
}