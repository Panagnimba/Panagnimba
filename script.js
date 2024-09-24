let closeMenuBtn = document.querySelector(".close-menu-btn")
let menu = document.querySelector(".menu")
// let menuIcon = document.querySelector(".menu-icon")
// menuIcon.addEventListener("click", (e) => {
//     menu.classList.add("show")
// })
// closeMenuBtn.addEventListener("click", (e) => {
//     menu.classList.remove("show")
// })
document.addEventListener("click", (e) => {
    let cible = e.target?.classList.contains("menu-icon") || e.target?.classList.contains("bx-menu")
    if (cible)
        menu.classList.add("show")
    else
        menu.classList.remove("show")

})