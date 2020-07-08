
function validateuser(form)
{
 var username=getElementbyId('username/Email').value;

 if (username == "")
 {
   alert("Enter your username/email");
 }
 else
 {
   document.write("OTP sent to your mail");
 }


}
