window.addEventListener("load", function () {
    var userLogin = localStorage.getItem("loginUser")
    if (userLogin) {
        window.location.replace("./deshboard.html")
    }

})

function userSignup() {
    var userName = document.getElementById("userName").value
    var userMObNum = document.getElementById("userMObNum").value
    var userEmail = document.getElementById("userEmail").value
    var userPaswrd = document.getElementById("userPaswrd").value


    var userObj = {
        userName,
        userMObNum,
        userEmail,
        userPaswrd,
    }

    var getUserData = JSON.parse(localStorage.getItem("users"))
    console.log(getUserData, "getUserData")

    if (getUserData == null) {
        var arr = []
        arr.push(userObj)
        console.log("first user sign up")
        localStorage.setItem("users", JSON.stringify(arr))
        // alert("user SignUp successfully")
        window.location.href = "./index.html"
        


    } else {
        var findUsersData = getUserData.find(function(value){
            console.log(value.userEmail, "value")
            if(value.userEmail === userEmail){
                return true
            }
        }
        )
        if(findUsersData === undefined){
            getUserData.push(userObj)
            localStorage.setItem("users", JSON.stringify(getUserData))
            // alert("other users sign up")
            window.location.href = "./index.html"
            
        }else{
            alert("Email already exists")
        }
    }

    
}