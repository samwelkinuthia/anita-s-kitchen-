function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

//close
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
//add close/prevent default functionality to prevent submission of zero value answers
//cofirm user
$(document).ready(function() {
  $("form#subsribe-users").submit(function(event) {
    event.preventDefault();
    var userEmail = $("input#user-email").val();
    alert(userEmail + " " + "registration at Anita's Kitchen was a success! Thank You.");

  });
});
