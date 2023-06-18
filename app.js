function userSignup() {
    var userName = document.getElementById("userName").value
    var userMObNum = document.getElementById("userMObNum").value
    var userEmail = document.getElementById("userEmail").value
    var userPaswrd = document.getElementById("userPaswrd").value

    // console.log(userName)
    // console.log(userMObNum)
    // console.log(userEmail)
    // console.log(userPaswrd)

    // localStorage.setItem("userName", userName)
    // localStorage.setItem("userMObNum", userMObNum)
    // localStorage.setItem("userEmail", userEmail)
    // localStorage.setItem("userPaswrd", userPaswrd)

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
        // console.log("other user signUp successfully")
        // arr.push(userObj)
        // localStorage.setItem("users", JSON.stringify(userObj))
        // console.log("getUserData", getUserData)
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



function loginPage(){
    var userEmail = document.getElementById("userEmail").value
    var userPaswrd = document.getElementById("userPaswrd").value
    var getUserData = JSON.parse(localStorage.getItem("users"))
 
    var user = getUserData.findIndex(function(value){
        if(value.userEmail === userEmail && value.userPaswrd === userPaswrd)return true;

    })

    

    if(user !== -1){
        console.log("login successfull")
        // alert("You are successfully Login")
        localStorage.setItem("user login", JSON.stringify(user))
        window.location.replace("./deshboard.html")
    }else{
        alert("Credential Error")
    }

    
}


function logout(){
    window.location.replace("./index.html")
}