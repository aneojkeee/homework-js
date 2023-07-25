const image = document.getElementById("cookie");
const cliker = document.getElementById("clicker__counter");
counter = 0;
image.addEventListener('click', function(){
  counter ++;
  cliker.textContent = + counter; 
})

window.onload = function(){
var i = 0;
 var image = document.getElementById("cookie");
  image.onclick = function(){
   if (i==0){
   this.style.width= '300px';
   i = 1;
   }else if(i==1){
    this.style.width= '200px';
    i = 0;
    }
  }
};