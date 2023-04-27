var tombolMenu = $(".tombol-menu");
var menu = $(".menu-bar ul");

function klikMenu(){
   tombolMenu.click(function(){
      menu.toggle();
   });
   menu.click(function(){
      menu.toggle();
   });
}

$(document).ready(function() {
   var width = $(window).width();
   if(width < 991) {
      klikMenu();
      }
})

$(window).resize(function(){
   var width = $(window).width();
   if(width > 989){
      menu.css("display","block");
   } else {
      menu.css("display","none");
   }
   klikMenu();
});   
