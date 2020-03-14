var frame = document.getElementsByClassName("frame");
var  button2 = document.getElementById("button2")
var  button3 = document.getElementById("button3")
var button = document.getElementById("button");
var  page2 = document.getElementsByClassName("page2");
var counter =0;
var  uper = 0;

 button.addEventListener('click', start);
 function start(){
    
   if(counter==0){
        frame[0].classList.add("hidden");
        counter=1;
    }
    else{
        frame[0].classList.remove("hidden");
        counter=0;
    }
}

button2.addEventListener("mouseover",myMove);
  function myMove() {
    if(uper==0){
      var pos =100;
      uper=1;
      var id = setInterval(frame, 10);
      function frame() {
        if (pos == 0) {
          clearInterval(id);
         
        } else {
          pos--; 
         
          page2[0].style.top= pos + "vh"; 
        
         
          
        }
      }
      }
    }

button3.addEventListener("mouseover",up);
    function up() {
      if(uper=1){
        var set =0;
        uper=0;
        var id = setInterval(fram, 10);
        
        function fram() {
          if (set == 100) {
            clearInterval(id);
           
          } else {
            set++; 
           
            page2[0].style.top= set + "vh"; 
          
           
            
          }
        }
        }
      }