//getting the input element
const telephoneNumber =document.getElementById("caller-input");

//getting the image element so we can change src during validation
const getNetworkContainer =document.querySelector("image-holder");

//getting paragraph that contains the image
const para = document.querySelector("#identifier");

//getting the image
const image = document.querySelector(".network-logo");

//getting the error element
const error = document.querySelector("#error");

//regular expresion for phone validation
var regex = /^\+?(234|0)(8|7|9)(0|1)\d{8}$/;

  //variable to check phone number prefix
  let numberPrefix;

//function for number check
function validateNum(){

  if(regex.test(telephoneNumber.value)) {
    if (telephoneNumber.value.length===11) {
      numberPrefix =telephoneNumber.value.toString().substr(0,4);
      if( (numberPrefix =='0803') ||
            (numberPrefix =='0703') || 
            (numberPrefix =='0903') || 
            (numberPrefix =='0806') || 
            (numberPrefix =='0706') || 
            (numberPrefix=='0813') || 
            (numberPrefix =='0810') || 
            (numberPrefix =='0814') || 
            (numberPrefix =='0816')
        ){
          para.style.display= "block";
          image.src ="/mtn.png";
          error.style.display ="none";
         
        }else if((numberPrefix=='0805')||
            (numberPrefix =='0705') || 
            (numberPrefix =='0905') || 
            (numberPrefix =='0807') || 
            (numberPrefix =='0815') || 
            (numberPrefix =='0811') || 
            (numberPrefix =='0905') 
        ){
            para.style.display= "block";
            image.src ="/glo.png";
            error.style.display ="none";
        }else if( (numberPrefix =='0809')||
            (numberPrefix =='0909') || 
            (numberPrefix =='0817') || 
            (numberPrefix =='0818') 
        ){
            para.style.display= "block";
            image.src ="/9mobile-official-logo.png";
            error.style.display ="none";
        }else if( (numberPrefix =='0802') ||
            (numberPrefix =='0902') || 
            (numberPrefix =='0701') || 
            (numberPrefix =='0808') || 
            (numberPrefix =='0708') || 
            (numberPrefix =='0812') 
        ){
          para.style.display= "block";
          image.src ="/airtel.png";
          error.style.display ="none";
    }
    }
    
    else if(telephoneNumber.value.length===13){
      thirteenNum();
    
  }
  else if(telephoneNumber.value.length===14){
    fourteenNum();
  
}else if(telephoneNumber.value.length ===0){
  error.textContent ="Please input a Nigerian telephone number";
  error.style.display ="block";
  error.style.color = "red";
  para.style.display= "none";
}
}else{
  error.textContent ="Please input a telephone number";
  error.style.display ="block";
  error.style.color = "red";
  para.style.display= "none";
}
                 }

      function thirteenNum() {
        numberPrefix =telephoneNumber.value.toString().substr(3,3);
        if( (numberPrefix =='803') ||
            (numberPrefix =='703') || 
            (numberPrefix =='903') || 
            (numberPrefix =='806') || 
            (numberPrefix =='706') || 
            (numberPrefix=='813') || 
            (numberPrefix =='810') || 
            (numberPrefix =='814') || 
            (numberPrefix =='816')
        ){
          para.style.display= "block";
          image.src ="/mtn.png";
          error.style.display ="none";
         
        }else if((numberPrefix=='805')||
            (numberPrefix =='705') || 
            (numberPrefix =='905') || 
            (numberPrefix =='807') || 
            (numberPrefix =='815') || 
            (numberPrefix =='811') || 
            (numberPrefix =='905') 
        ){
            para.style.display= "block";
            image.src ="/glo.png";
            error.style.display ="none";
        }else if( (numberPrefix =='809')||
            (numberPrefix =='909') || 
            (numberPrefix =='817') || 
            (numberPrefix =='818') 
        ){
            para.style.display= "block";
            image.src ="/9mobile-official-logo.png";
            error.style.display ="none";
        }else if( (numberPrefix =='802') ||
            (numberPrefix =='902') || 
            (numberPrefix =='701') || 
            (numberPrefix =='808') || 
            (numberPrefix =='708') || 
            (numberPrefix =='812') 
        ){
          para.style.display= "block";
          image.src ="/airtel.png";
          error.style.display ="none";
    }
      }  
      
      

      function fourteenNum() {
        numberPrefix =telephoneNumber.value.toString().substr(4,3);
        if( (numberPrefix =='803') ||
            (numberPrefix =='703') || 
            (numberPrefix =='903') || 
            (numberPrefix =='806') || 
            (numberPrefix =='706') || 
            (numberPrefix=='813') || 
            (numberPrefix =='810') || 
            (numberPrefix =='814') || 
            (numberPrefix =='816')
        ){
          para.style.display= "block";
          image.src ="/mtn.png";
          error.style.display ="none";
          
        }else if((numberPrefix=='805')||
            (numberPrefix =='705') || 
            (numberPrefix =='905') || 
            (numberPrefix =='807') || 
            (numberPrefix =='815') || 
            (numberPrefix =='811') || 
            (numberPrefix =='905') 
        ){
            para.style.display= "block";
            image.src ="/glo.png";
            error.style.display ="none";
        }else if( (numberPrefix =='809')||
            (numberPrefix =='909') || 
            (numberPrefix =='817') || 
            (numberPrefix =='818') 
        ){
            para.style.display= "block";
            image.src ="/9mobile-official-logo.png";
            error.style.display ="none";
        }else if( (numberPrefix =='802') ||
            (numberPrefix =='902') || 
            (numberPrefix =='701') || 
            (numberPrefix =='808') || 
            (numberPrefix =='708') || 
            (numberPrefix =='812') 
        ){
          para.style.display= "block";
          image.src ="/airtel.png";
          error.style.display ="none";
    }
      } 

telephoneNumber.addEventListener("input",validateNum);

//function to submit form if input is validated true

const form = document.querySelector("#form");


  form.addEventListener("submit",(e)=>{
   if(regex.test(telephoneNumber.value)=== false){
    e.preventDefault();
   }
  })
