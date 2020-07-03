const email = document.getElementById("email");
const zipCode = document.getElementById("zip");
const phone = document.getElementById("phone");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

function emailPass(){
    if(email.value.includes("@")){
        console.log(email.value);
        return true;
    }else{
        alert("Please Enter a valid Email");
        return false;
    }
    
}
function zipPass(){
    if(zipCode.value.match(/^[0-9]{5}$/)){
        console.log("zip confirm")
        return true;
    }else{
        alert("Please enter a valid zip code");
        console.log("Please enter a valid zip code");
        return false;
    }
    
}

function phonePass(){
    if(phone.value.match(/^[0-9]{10}$/)){
        return true;
        console.log("phone pass")
    }else{
        alert("Please enter a valid phone number");
        return false;
    }
    
}
function passwordMatch(){
    if(password1.value.match("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})") && (password1.value === password2.value)){
        return true;
        console.log("verified");
    }else{
        alert("Passwords mismatch or Incorrect format");
        return false;
    }


}

function welcome(){
    alert("You're account has been created")
}


function checkAll(){
    if(emailPass() && zipPass() && phonePass() && passwordMatch()){
        alert('Account created successfuly')
    }
}
const success = document.getElementById("success");
success.addEventListener('click', checkAll);


