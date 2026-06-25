const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("password");

togglePassword.addEventListener("click",()=>{

  if(password.type==="password"){
    password.type="text";
  }
  else{
    password.type="password";
  }

});

const form =
document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const email =
  document.getElementById("email").value;

  const pass =
  document.getElementById("password").value;

  if(email==="" || pass===""){
    alert("Please fill all fields");
    return;
  }

  alert("Login Successful!");

});