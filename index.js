const email = document.getElementById('mail');
let password = document.getElementById("password");
let hidepwtxt = document.getElementById("hidepwtxt");
function redirect(){
  window.location = "/profile.html?email="+ email.value;
}
function hidepw(){
  let boolean = password.type == 'password';
  password.type = boolean ? 'text' : 'password';
  hidepwtxt.innerHTML = boolean ? 'Hide Password' : 'Show Password';
}