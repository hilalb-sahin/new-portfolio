infoBtn = document.querySelectorAll('.info');
targetDiv = document.querySelectorAll('.projectDetail');





      for(let i =0 ; i<targetDiv.length ; i++)
      { 
        
        infoBtn[i].addEventListener("click", function() {
          if(targetDiv[i].style.display == 'block'){
            targetDiv[i].style.display = 'none';
          }
          else{
            targetDiv[i].style.display = 'block';

            }
          }
          );
          
        }

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }