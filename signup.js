function validMail(){
  var m=document.getElementById("mail").value;
  if(m===""){
    document.getElementById("alert1").innerHTML="";
    document.getElementById("mail").style.border="none";
  }
  else if(((m.includes("@")) && (m.includes("."))) == false)
  {
    document.getElementById("alert1").innerHTML="Enter valid mail ID";
    document.getElementById("mail").style.border="2px solid red";
  }
  else if(m===""){
    document.getElementById("alert1").innerHTML="";
    document.getElementById("mail").style.border="none";
  }
  else {
    document.getElementById("alert1").innerHTML="";
    document.getElementById("mail").style.border="none";
  }
}

function passCheck(){
  var p=document.getElementById("pass").value;
  var p1=document.getElementById("pass1").value;
  if(p1==="")
  {
    document.getElementById("pass1").style.border="none";
    document.getElementById("passmatch").innerHTML="";
  }
  else if(p!=p1){
    document.getElementById("pass1").style.border="2px solid red";
    document.getElementById("passmatch").innerHTML="Password doesn't match";
  }
  else{
    document.getElementById("pass1").style.border="none";
    document.getElementById("passmatch").innerHTML="";
  }

}
function validMailType(){
  var l=document.getElementById("mail").value;
  if(l.includes("@") && l.includes(".")){
    document.getElementById("alert1").innerHTML="";
    document.getElementById("mail").style.border="none";
  }
}
