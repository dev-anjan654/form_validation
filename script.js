//selecting html element
const userName = document.getElementById("username");
const password = document.getElementById("password");
const userError = document.getElementById("user-error");
const passwordError = document.getElementById("password-error");

let validNumber = 1;

//validation function
 const validation = ()=>{

    //UserName Validation
    if(userName.value == "" && password.value == ""){
        userError.innerHTML = "Please Enter a Valid UserName";
        validNumber = 0;
    }
    else if(userName.value.length < 3){
        userError.innerHTML = "UserName Require Minimum 3 Character";
        validNumber = 0;
    }
    else{
        userError.innerHTML = "";
        validNumber = 1;
    }

    //password validation
    if(password.value == ""){
        passwordError.innerHTML = "Please Enter a Valid Password";
        validNumber = 0;
    }
    else if(password.value.length < 8){
        passwordError.innerHTML = "Minimum 8 Character is required";
        validNumber = 0;
    }
    else{
        passwordError.innerHTML = "";
        validNumber = 1;
    }
    if(userName.value.length < 3 && password.value.length > 8){
        userError.innerHTML = "Username requires minimum 3 charecters";
        validNumber = 0;
    }
    
    if(validNumber == 1){
        return true;
    }
    else{
        return false;
    }
}