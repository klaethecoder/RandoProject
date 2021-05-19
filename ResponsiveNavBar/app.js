const hamburgerBtn = document.getElementById('hamburgerBtn')
const navBar = document.getElementById('navBar')


hamburgerBtn.addEventListener('click', ()=> {
    console.log(navBar.classList.value)
    navBar.classList.value != 'open' ? hamburgerBtn.innerHTML =  "&#10005;" :  hamburgerBtn.innerHTML ="&#9776"
    navBar.classList.toggle('open')
})
