setInterval(showTime, 1000);

function showTime() {
  document.getElementById("time").innerHTML=Date();
}

function showText() {
  document.getElementById("text").innerHTML+=document.getElementById("textbox").value+'\n';
  document.getElementById("textbox").value="";
}
