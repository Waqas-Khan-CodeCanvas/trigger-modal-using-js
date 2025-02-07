const openModalbtnElement = document.querySelector(".openmodal");
const modalElement = document.querySelector(".modalbody");


openModalbtnElement.addEventListener("click",()=>{
    modalElement.classList.remove("d-none")
})
modalElement.addEventListener("click",()=>{
    modalElement.classList.add("d-none")
})