window.addEventListener("load", function () {
    var userLogin = localStorage.getItem("loginUser")
    if (userLogin) {
        window.location.replace("./deshboard.html")
    }

})

function loginPage(){
    var userEmail = document.getElementById("userEmail").value
    var userPaswrd = document.getElementById("userPaswrd").value
    var getUserData = JSON.parse(localStorage.getItem("users"))
 
    var user = getUserData.find(function(value){
        if(value.userEmail === userEmail && value.userPaswrd === userPaswrd)return true;

    })

    

    if(user !== -1){
        // alert("You are successfully Login")
        localStorage.setItem("loginUser", JSON.stringify(user))
        window.location.replace("./deshboard.html")
    }else{
        alert("Credential Error")
    }

    
}