function notYet(){
  alert("Not yet available");
}
function btnChange(){
  document.getElementById("head-title").innerHTML="System Requirements"
  document.getElementById("paras").innerHTML="Requires a 64-bit processor and operating system.<br> OS: Windows 10 - 64-Bit.<br> Processor: Intel Core i3-6100 @ 3.7GHz or AMD Athlon X4 880K @4GHz.<br> Memory: 8 GB RAM.<br> Graphics: NVIDIA GTX 660 2GB or AMD Radeon HD 7850 2GB.<br> Storage: 50 GB available space.";
}
function btnChange1(){
  document.getElementById("head-title").innerHTML="Overview"
  document.getElementById("paras").innerHTML="FIFA 22 is an upcoming football simulation video game published by Electronic Arts as part of the FIFA series. It will be the 29th installment in the FIFA series, and will be released on 1 October 2021.<br>EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.<br>PRE-ORDER** FIFA 22 Ultimate Edition by October 1 and receive:<br> Untradeable Ones to Watch Player Item from October 1<br> <br>4 Days Early Access<br> <br>4600 FIFA Points<br> <br>Team of the Week 1 Player item<br> <br>Kylian Mbappé Loan item<br> <br>FUT Ambassador Loan Player Pick<br> <br>Career Mode Homegrown Talent</p>";
}
function btnChange2(){
  document.getElementById("head-title").innerHTML="Player Reviews"
  document.getElementById("paras").innerHTML="No reviews yet.";
}
function divTesting(){
  document.getElementById("testing").style.backgroundColor="white";
}
$(".card-text").scroll(function() {$(".cardMove").animate({"top":"50px"},2000)})
