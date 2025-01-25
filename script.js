

document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon-1');
    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            const paragraph = this.parentElement.nextElementSibling;
            if (paragraph.style.display === 'block') {
                paragraph.style.display = 'none';
                this.classList.remove('fa-minus');
                this.classList.add('fa-caret-down');
            } else {
                paragraph.style.display = 'block';
                this.classList.remove('fa-caret-down');
                this.classList.add('fa-minus');
            }
        });
    });
});



const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navbar.style.backgroundColor = "#002648";
  }
  else if (window.scrollY < 300) {
    navbar.style.backgroundColor = "transparent";
  }
});