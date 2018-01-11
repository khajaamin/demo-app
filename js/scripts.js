// Function  definantion 
function submit()
{   
    var elementObj = document.getElementById("exampleInputFistName"); 
     

     if( elementObj.value == null || elementObj.value == "" )
     {
         alert("first name is blank!");
     } 
     else
     {

         for( var i = 0; i < 10 ; i++ )
         {
            console.log(elementObj.value);
         }
     }

}


var titleEnabled = true; 
/*
name : toggleTitle
type : function 
params: obj = object of html element 

*/
function toggleTitle(obj)
{   
    if(titleEnabled)
    {
        document.getElementById("signup_title").style.display = "none";         
        titleEnabled = false; 
        obj.value = "Show"; 
    }
    else
    {
        document.getElementById("signup_title").style.display = "block"; 
        titleEnabled = true;
        obj.value = "Hide";  
    }
}




function validate (obj)
{ 
    var messageObj = document.getElementById(obj.id+"_required"); 
    var lengthObj = document.getElementById(obj.id+"_minlength");

  
  console.log( $(obj.id+"_minlength")); 

    if(obj.value == null || obj.value == "")
    {
        messageObj.style.display = "block"; 
    }
    else
    {
        messageObj.style.display = "none"; 
    }


if(lengthObj)
{
    // Add other validation  here 
    if(obj.value.length < 3 )
    {
        lengthObj.style.display = "block"; 
    }
    else
    {
        lengthObj.style.display = "none"; 
    }


}
} 




var obj = {

}; 