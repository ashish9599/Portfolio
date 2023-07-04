var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);
var interval;

for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
      event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
      console.log(targetSectionId);
        var targetSection =document.getElementById(targetSectionId);
        console.log(targetSection);
        // var targetSectioncoordinates=targetSection.getBoundingClientRect();
        //  interval=setInterval(scrollVertically,20,targetSection);
    interval=setInterval(function(){
      scrollVertically(targetSection);
    },20);
   
      });
}
function scrollVertically(targetSection){
  var targetSectioncoordinates=targetSection.getBoundingClientRect();
if(targetSectioncoordinates.top<=0){
       clearInterval(interval);
      return;
      }
     window.scrollBy(0,50);
}

// skill-progrss

var progrssBars=document.querySelectorAll('.skill-progress>div');
var skillContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkscroll);
var animationDone=false;


function initializeBars(){
  for(let bar of progrssBars){
    bar.style.width=0+'%';
  }
}

function fillbars(){
  
}


function checkscroll(){
var coordinate=skillContainer.getBoundingClientRect();
if(!animationDone&& coordinate.top<window.innerHeight){
animationDone=true;
  // fillbars();
}

}
