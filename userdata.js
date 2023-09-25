let flag = true


function fetchData(){
  if(flag){
fetch("https://reqres.in/api/users")
.then(function(resolve){
  return resolve.json()
})
.then(function(data){
  printData(data.data)
})
.catch(function(error){
    console.log(error);  // Error: Network request failed
})
flag = false
  }
}

let main = document.querySelector("#main")

function printData(userData){
   
    userData.forEach(function (element){
       
        let userCard = document.createElement("div")
        userCard.className = "divbox"

    let userId = document.createElement("p")
    userId.textContent = "id:" + " "+element.id

    let userEmail = document.createElement("p")
    userEmail.textContent = element.email

    let userName = document.createElement("p")
    userName.textContent = element.first_name + " " + element.last_name

    let userImg = document.createElement("img")
    userImg.src =element.avatar

    userCard.append(userId,userEmail,userName,userImg)
    main.append(userCard)
    });

  
    
}

