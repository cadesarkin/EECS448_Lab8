function changeStyles() {
  document.getElementById("para").style.borderStyle = "solid";
  document.getElementById("para").style.borderWidth = document.getElementById("width").value;
  document.getElementById("para").style.borderColor = 'rgb(' + document.getElementById("bRed").value + ',' + document.getElementById("bGreen").value + ',' + document.getElementById("bBlue").value + ')';
  document.getElementById("para").style.backgroundColor = 'rgb(' + document.getElementById("bgRed").value + ',' + document.getElementById("bgGreen").value + ',' + document.getElementById("bgBlue").value + ')';
}
