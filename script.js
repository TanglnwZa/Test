const container = document.getElementsByid('container');
const registerBtn = document.getElementsByid('register');
const loginBtn = document.getElementsByid('login');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});