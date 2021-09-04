const toggleBtn = document.querySelector(".form-control");
const dropDown = document.querySelector(".dropdown-menu");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click",function(){
    dropDown.classList.toggle("show");
});
toggleBtn?.addEventListener("click" , function(){
    closeBtn.classList.toggle("show");
})

closeBtn.addEventListener("click", function () {
    dropDown.classList.remove("show");

  });
  closeBtn.addEventListener("click", function () {
    closeBtn.classList.remove("show");
  });



