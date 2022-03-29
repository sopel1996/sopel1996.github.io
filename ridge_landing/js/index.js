document.addEventListener("DOMContentLoaded", function () {
  // Аналог $(document).ready(function(){

    let popups = document.querySelectorAll('.popup');
    let parts = document.querySelectorAll('.part');

    console.log(popups, parts);


   console.log(parts[0].dataset.popupid);

   parts.forEach(el=> {
       el.addEventListener('mouseenter', ()=>{
           document.querySelector(`#popup_${el.dataset.popupid}`).style.display= 'block';
       })
       el.addEventListener('mouseout', ()=>{
           document.querySelector(`#popup_${el.dataset.popupid}`).style.display= 'none';
       })
   })

});
