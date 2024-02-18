/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  //A general function to open a sidebar, the parameter is an id name
  function openNav(idName){
    element = document.getElementById(idName).style; 
    element.transition = "0.5s"; 
    element.width = "250px"; 
    element.padding = "20px"



  }

   //A general function to close a sidebar, the parameter is an id name
  function closeNav(idName){
    element = document.getElementById(idName).style; 
    element.width = "0";
    element.transition = "0s";
    element.padding = "0px";
    element.transition = "0.5s"
  }