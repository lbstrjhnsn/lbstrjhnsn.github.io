function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("sidebar-toggle").setAttribute("onclick","closeNav()");
  document.getElementById("main").style.marginLeft = "250px";
  //document.body.style.backgroundColor = "rgba(255,179,255,1)";
  document.getElementById("sidebar-toggle").innerHTML = "&times;";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sidebar-toggle").setAttribute("onclick","openNav()");
  document.getElementById("main").style.marginLeft= "0";
  //document.body.style.backgroundColor = "#ffb3ff";
  document.getElementById("sidebar-toggle").innerHTML = "&#9776;";
}
