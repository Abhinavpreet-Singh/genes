const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const infoText = document.querySelector('.info-text');

registerLink.onclick = () => {
    wrapper.classList.add('active');
    const myTimeout = setTimeout(none, 1000);
};

none = () => {
    infoText.style.display = 'none';
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
    const myTimeout = setTimeout(flex, 2000);

};

flex = () => {
    infoText.style.display = 'flex';
}