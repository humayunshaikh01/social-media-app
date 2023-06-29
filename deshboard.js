
var listParent = document.getElementById("listParent")
var loginUser;

window.addEventListener("load", function () {
    var userLogin = localStorage.getItem("loginUser")
    if (!userLogin) {
        window.location.replace("./index.html")
        return
    }

    var getUsers = JSON.parse(localStorage.getItem("loginUser"))
    // console.log(getUsers)
    loginUser = getUsers;

    var welComeName = document.getElementById("welComeName")
    // console.log(welComeName)
    
    if (welComeName) {
        welComeName.innerHTML = "WELCOME " + loginUser.welComeName
    }



    if(listParent){
        var getPosts = JSON.parse(localStorage.getItem("posts")) || []
        // console.log(getPosts)
        for (var value of getPosts) {
            listParent.innerHTML += `<div class="card" style="width:  14rem;">
            <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">${value.descrip}</p>
                <button class="btn btn-primary" onclick="editPost(${value.id} , this)">EDIT</button>
                <button class="btn btn-danger" onclick="deletePost(${value.id} ,  this)" >DELETE</button>
            </div>
        </div>`
        }
    }


})


function addPost(){
    var title = document.getElementById("title")
    var descrip = document.getElementById("descrip")

    if(!title.value || !descrip.value){
        alert("Fields Can't Be Empty")
        return
    }

    var id; 
    var getPosts = JSON.parse(localStorage.getItem("posts")) || []
    if(getPosts.length > 0){
        id = getPosts[0].id + 1
    }else{
        id = 1  
    }
    

    var postBox =  `<div class="card" style="width: 14rem;">
    <div class="card-body">
        <h5 class="card-title">${title.value}</h5>
        <p class="card-text">${descrip.value}</p>

        <button class="btn btn-primary" onclick="editPost(${id} , this)">EDIT</button>
        <button class="btn btn-danger" onclick="deletePost(${id}, this)" >DELETE</button>

    </div>
</div`

    listParent.innerHTML = postBox + listParent.innerHTML


var postObject = {
    id: id,
    title : title.value,
    descrip : descrip.value,
}

getPosts.unshift(postObject)
localStorage.setItem("posts", JSON.stringify(getPosts))
title.value = ""
descrip.value = ""

 }


//  Delete Action

function deletePost(id, elem) {
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var indexNum = getPosts.findIndex(function (value) {
        if (value.id === id)
        return true
    })
    getPosts.splice(indexNum, 1)
    localStorage.setItem("posts", JSON.stringify(getPosts))
    elem.parentNode.parentNode.remove()
 }

//  Edit Action

function editPost(id , elem){
    var indexNum;
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var post = getPosts.find(function(value, index){
        if (value.id === id) {
            indexNum = index
            return true
        }
    })

    var editTitle = prompt("edit title", post.title)
    var editDescrip = prompt("edit descrip", post.descrip)
    var editObj = {
        id: post.id,
        title: editTitle,
        descrip: editDescrip 
    }
    getPosts.splice(indexNum, 1, editObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    var h5Title = elem.parentNode.firstElementChild
    var pDescrip = elem.parentNode.firstElementChild.nextElementSibling
    h5Title.innerHTML = editTitle
    pDescrip.innerHTML = editDescrip

}


function logout(){
    localStorage.removeItem("loginUser")
    location.replace("./index.html")
    
}