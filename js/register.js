const eye1 =
document.getElementById("eye1");

const eye2 =
document.getElementById("eye2");

const password =
document.getElementById("password");

const confirmPassword =
document.getElementById("confirmPassword");

eye1.addEventListener("click",()=>{

    if(password.type==="password"){
        password.type="text";
    }else{
        password.type="password";
    }

});

eye2.addEventListener("click",()=>{

    if(confirmPassword.type==="password"){
        confirmPassword.type="text";
    }else{
        confirmPassword.type="password";
    }

});

const form =
document.getElementById("registerForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(password.value !== confirmPassword.value){

        alert("Passwords do not match");
        return;

    }

    alert("Account Created Successfully!");

});