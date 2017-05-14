function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

//close
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//cofirm user
$(document).ready(function() {
  $("form#subsribe-users").submit(function(event) {
    event.preventDefault();
    var userEmail = $("input#user-email").val();
    alert(userEmail + " " + "registration at Anita's Kitchen was a success! Thank You.");

  });
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
