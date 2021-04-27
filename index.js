const email = document.getElementById('mail');
const password = document.getElementById("password");
function redirect(){
  window.location = "/profile.html?email="+ email.value;
}