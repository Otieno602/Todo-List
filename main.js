const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const message = document.getElementById("msg");

document.getElementById("add-btn").addEventListener('click', addTask);
addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        addTask();
    }
})

function addTask(e){
    if(inputBox.value == ""){
        message.classList.add('error');
        message.innerHTML = 'Please enter all fields!';

        // clear the error message 
        setTimeout(() => {
            message.classList.remove('error');
            message.innerHTML = '';
        }, 3000);
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = '';
    saveData();
}

// Save Data to Local Storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
listContainer.addEventListener('click', (e) => {
    if(e.target.tagName.toUpperCase() === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName.toUpperCase() === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

// Fetch Data From Storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();