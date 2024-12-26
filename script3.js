'use strict'
document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

   function showSlide(index){
      slides.forEach(function(slide, i){
          slide.classList.remove('active');
             if(i === index){
                slide.classList.add('active');
              }
        });
       currentSlide = index;
   }

   document.querySelector('.prev').addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
           showSlide(currentSlide);
     });

    document.querySelector('.next').addEventListener('click', function () {
       currentSlide = (currentSlide + 1) % slides.length;
       showSlide(currentSlide);
   });
   //Show the first slide on page load.
    showSlide(0);
});