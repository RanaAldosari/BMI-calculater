document.getElementById("submit-btn").addEventListener("click",function(){
    let weight=document.getElementById("weight-input").value
   let height= document.getElementById("height-input").value
    
    var bmi=weight/(height*height)
    document.getElementById("show").innerHTML=bmi;

    if(bmi<18){
        document.getElementById("bmi-category").innerHTML="Skinny"
    }else if(bmi>=18&&bmi<24.9){
document.getElementById("bmi-category").innerHTML="Normal"
    }else if(bmi<29.9){
        document.getElementById("bmi-category").innerHTML="Overweight"
            }else if(bmi<34.9){
                document.getElementById("bmi-category").innerHTML="First class obesity"
                    }else if(bmi<39.9){
                        document.getElementById("bmi-category").innerHTML="Second class obesity"
                            }else{
                                document.getElementById("bmi-category").innerHTML="Dangerous obesity"       
                            }
}) 