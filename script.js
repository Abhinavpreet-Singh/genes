const navbar = document.querySelector('nav');

const dismissible = document.querySelector('.fa-minus');
const dismissibleContainer = document.querySelector(".questions-subcontainer p");

dismissible.onclick = () => {
    if (dismissibleContainer.style.display === "block") {
        dismissibleContainer.style.display = "none";
        document.querySelector(".questions-subcontainer").style.height = "60px";
    }
    else {
        dismissibleContainer.style.display = "block";
        document.querySelector(".questions-subcontainer").style.height = "150px";


    }
}




toggleQuestion = (icon, contents) => {
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector(icon).addEventListener('click', function() {
            let content = document.querySelector(contents);
            if (content.style.display === 'flex') {
                content.style.display = 'none';
            } else {
                content.style.display = 'flex';
                content.style.alignItems = 'center';

            }
        });
    });
}

toggleQuestion('.icon-1', '.content-1');
toggleQuestion('.icon-2', '.content-2');
toggleQuestion('.icon-3', '.content-3');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navbar.style.backgroundColor = "#002648";
  }
  else if (window.scrollY < 300) {
    navbar.style.backgroundColor = "transparent";
  }
});