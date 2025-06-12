const bar=document.querySelector(".bar");
const menubar=document.querySelector(".navbar_menu .menubar");
bar.addEventListener("click",()=>{
    menubar.classList.toggle("show")
});