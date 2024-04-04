const inputBox = document.getElementById("input-box")
const taskList = document.getElementById("task-list")
const btn = document.getElementById("btn")


const addTask = ()=>{
    if(inputBox.value == ""){
        alert("You must write something to add in task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        taskList.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value =""
    saveData()
}
btn.addEventListener("click",addTask)

taskList.addEventListener("click",(e)=>{
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("Data",taskList.innerHTML)
}
function showTask() {
    taskList.innerHTML = localStorage.getItem("Data")
}

showTask()