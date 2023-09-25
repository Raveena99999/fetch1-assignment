let form = document.querySelector("form")
 let button = document.getElementById("btn")
let display = document.getElementById("disbtn")
 
 form.addEventListener("submit",function(e){
    e.preventDefault();
let name = document.getElementById("name").value
let age = document.getElementById("age").value

localStorage.setItem("name",name)
localStorage.setItem("age",age)

form.reset()
 })


 button.addEventListener("click",function () {
  let storedName = localStorage.getItem("name")
  let storedAge = localStorage.getItem("age")
display.innerHTML=`name : ${storedName}  , age :${storedAge}`
 })