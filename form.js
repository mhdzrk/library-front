function validation(){
    var user = document.getElementById('user').value.trim();
    var email = document.getElementById('email').value.trim();
    var pass = document.getElementById('pass').value.trim();
    var conpass = document.getElementById('conpass').value.trim();
    var phone = document.getElementById('phone').value.trim();
    
    if (user == ""){
        document.getElementById('username').innerHTML="please fill username";
        return false;
    }
    else{
        document.getElementById('username').innerHTML="";
    }
    if (user.length <=2){
        document.getElementById('username').innerHTML="username is too short";
        return false;

    }
    else{
        document.getElementById('username').innerHTML="";
    }
    if (email == ""){
        document.getElementById('emails').innerHTML="please fill email";
        return false;
    }
    else{
        document.getElementById('emails').innerHTML="";
    }
    if (email.indexOf('@') <= 0){
        document.getElementById('emails').innerHTML="invalid email";
        return false;
    } 
    else{
        document.getElementById('emails').innerHTML="";
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('emails').innerHTML="invalid email"
        return false;
    }
    else{
        document.getElementById('emails').innerHTML="";
    }
    var regex1 =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ ;
    if (regex1.test(email)){
        document.getElementById('emails').innerhtml="";
    }
    else{
        document.getElementById('emails').innerhtml="invalid email";
        return false;
    }
    if (pass == ""){
        document.getElementById('passs').innerHTML="please fill password";
        return false;
    }
    else{
        document.getElementById('passs').innerHTML="";
    }
    if (pass.length <=7){
        document.getElementById('passs').innerHTML="password is too short";
        return false;
    }
    else{
        document.getElementById('passs').innerHTML="";
    }
    if (conpass == ""){
        document.getElementById('conpasss').innerHTML="please fill confirm password";
        return false;
    }
    else{
        document.getElementById('conpasss').innerHTML="";
    }
    if (pass != conpass){
        document.getElementById('conpasss').innerHTML="password is not matching";
        return false;
    }
    else{
        document.getElementById('conpasss').innerHTML="";
    }
    if (phone == ""){
        document.getElementById('phones').innerHTML="please fill phone number";
        return false;
    }
    else{
        document.getElementById('phones').innerHTML="";
    }
    
    if (phone.length !==10){
        document.getElementById('phones').innerHTML="invalid phone number";
        return false;
    }
    else{
        document.getElementById('phones').innerHTML="";
    }
    if (isNaN(phone)){
        document.getElementById('phones').innerHTML="invalid phone number";
        return false;
    }
    else{
        document.getElementById('phones').innerHTML="";
        return true;
    }
   
    
}
    
    

function validation1(){
    var user = document.getElementById('user').value.trim();
    var pass = document.getElementById('pass').value.trim();
  
    if (user == ""){
        document.getElementById('username').innerHTML="please fill username";
        return false;
    }
    else{
        document.getElementById('username').innerHTML="";

    }
    if (user.length <=2){
        document.getElementById('username').innerHTML="username is too short";
        return false;

    }
    else{
        document.getElementById('username').innerHTML="";

    }
    if (pass == ""){
        document.getElementById('passs').innerHTML="please fill password";
        return false;
    }
    else{
        document.getElementById('passs').innerHTML="";

    }
    if (pass.length <=7){
        document.getElementById('passs').innerHTML="password is too short";
        return false;
    }
    else{
        document.getElementById('passs').innerHTML="";
        return true;

    }



}
   
