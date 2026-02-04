//get elements from the html
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const phoneNumber = document.getElementById("phoneNumber");
const age = document.getElementById("age");
const password = document.getElementById("password");
const button=document.querySelector("button");




isvalidateFullname=false;
isvalidatePhoneNumber=false;
isvalidateAge=false;
isvalidatePassword=false;

//form validation
form.addEventListener("submit", (event) => {
  event.preventDefault();

  
});

//fullname validation
fullname.addEventListener("input", (event) => {
  fname = event.target.value;
  // console.log(fname)
  if (fname.length >= 3 && fname.length <= 15) {
    fullname.style.border = "3px solid green";
    isvalidateFullname=true;
  } else {
    fullname.style.border = "3px solid red";
    isvalidateFullname=false;
  }
});

phoneNumber.addEventListener("input", (event) => {
  phone = event.target.value;
  // if (phone.length >= 9 && phone.length <= 12) {
  //   phoneNumber.style.border = "3px solid green";
  //   isvalidatePhoneNumber=true;
  // } else {
  //   phoneNumber.style.border = "3px solid red";
  //   isvalidatePhoneNumber=false;
  // }

  if (phone >= 610000000 && phone <= 619999999) {
    phoneNumber.style.border = "3px solid green";
    isvalidatePhoneNumber=true;
  } else {
    phoneNumber.style.border = "3px solid red";
    isvalidatePhoneNumber=false;
  }
});

age.addEventListener("input", (event) => {
  userAge = event.target.value;
  if (userAge >= 15 && userAge <= 100) {
    age.style.border = "3px solid green";
    isvalidateAge=true;
  } else {
    age.style.border = "3px solid red";
    isvalidateAge=false;
  }
});

password.addEventListener("input", (event) => {
  passText = event.target.value;
  validate = validatePassword(passText);
  console.log(validate);
  if(validate==""){
    password.style.border="3px solid green"
    isvalidatePassword=true;
  }else{
    password.style.border="3px solid red"
    isvalidatePassword=false;
  }
});

function validatePassword(password) {
  if (password.length < 8) {
    return "your password must be atleast 8 chars";
  }
  if (!/[A-Z]/.test(password)) {
    return "password must contain atleast 1 capital letter";
  }
  if (!/[a-z]/.test(password)) {
    return "password must contain atleast 1 small letter";
  }
  if (!/[1-9]/.test(password)) {
    return "password must contain atleast 1 digit";
  }
  if (!/[^A-Za-z1-9]/.test(password)) {
    return "password must contain atleast one symbol";
  }
  return "";
}


button.addEventListener("click", ()=>{
  if(isvalidateFullname && isvalidatePhoneNumber && isvalidateAge && isvalidatePassword ){
    alert("successfully registred")
  }else{
    alert("something wrong")
  }
  
})