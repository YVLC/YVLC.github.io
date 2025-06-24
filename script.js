// 1. Theme toggle (light/dark)
const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// 2. Filter skills by category
function filterSkills(category) {
  const skills = document.querySelectorAll('#skills-list li');
  skills.forEach(skill => {
    if (category === 'All' || skill.dataset.category === category) {
      skill.style.display = 'inline-block';
    } else {
      skill.style.display = 'none';
    }
  });
}

// 3. Typewriter effect
const typewriterEl = document.getElementById('typewriter');
const phrases = ["Computer Science Student", "Backend & Data Developer", "Open to Innovation & Growth"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loopType() {
  typewriterEl.innerHTML = currentPhrase.join('');
  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  } else if (isDeleting && j >= 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) isDeleting = true;
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loopType, isDeleting ? 50 : 100);
}
loopType();

// 4. Scroll animations (fade-in)
const faders = document.querySelectorAll('section');
const fadeIn = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0px)';
    }
  });
}, { threshold: 0.1 });

faders.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(40px)';
  sec.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  fadeIn.observe(sec);
});

// 5. Back to Top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});