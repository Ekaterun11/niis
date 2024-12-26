'use strict'
document.addEventListener('DOMContentLoaded', function () {
    var sidebarItems = document.querySelectorAll('.sidebar li');

    sidebarItems.forEach(function (item) {
         item.addEventListener('click', function(){
          //remove from other sidebars
             sidebarItems.forEach(function (otherItem){
               if (otherItem !== item) {
                 otherItem.classList.remove('active');
              }
          });
          item.classList.toggle('active');
          //handle the navigation
            var targetPage = item.getAttribute('data-target');
               if(targetPage) {
                 window.location.href = targetPage;
             }
       });
  });

var yearItems = document.querySelectorAll('.year-item');

yearItems.forEach(function(item){
   var expandButton = item.querySelector('.expand-button');
     expandButton.addEventListener('click', function(){
        item.classList.toggle('expanded');
         expandButton.classList.toggle('expanded');
     })
});
});