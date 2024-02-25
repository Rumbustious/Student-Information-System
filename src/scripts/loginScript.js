function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username !== "" && password !== "") {
    window.location.href = "degree.html";
  } else {
    alert("Please fill in both username and password.");
  }
}
