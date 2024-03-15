let menuBars=document.querySelector("[menu-bars]")
let navBarActive=document.querySelector("[navbar]")

menuBars.addEventListener("click",()=>{
    navBarActive.classList.toggle("active")
 
  
})