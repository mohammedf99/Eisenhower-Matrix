let greenUl = document.querySelector("#green-ul");
let blueUl = document.querySelector("#blue-ul");
let orangeUl = document.querySelector("#orange-ul");
let redUl = document.querySelector("#red-ul");
let taskForm = document.querySelector(".task-form");
let msg = document.querySelector(".msg");

let taskTitle = document.querySelector("#newTask");
let priority = document.querySelector("#taskPriority");

taskForm.addEventListener("submit", addTask);

function errorMsg() {
  msg.classList.add("error");
  msg.innerHTML = "Please fill in both inputs";
  setTimeout(() => {
    msg.innerText = "";
    msg.classList.remove("error");
  }, 3000);
}

function successMsg() {
  msg.classList.add("success");
  msg.innerHTML = "Task added successfuly";
  setTimeout(() => {
    msg.innerHTML = "";
    msg.classList.remove("success");
  }, 3000);
}

function addTask(e) {
  e.preventDefault();

  if (taskTitle.value === "" || priority.value === "") {
    errorMsg();
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(taskTitle.value));

    switch (priority.value) {
      case "IU":
        greenUl.appendChild(li);
        successMsg();
        taskTitle.value = "";
        priority.value = "";
        break;

      case "INU":
        blueUl.appendChild(li);
        successMsg();
        taskTitle.value = "";
        priority.value = "";
        break;

      case "NIU":
        orangeUl.appendChild(li);
        successMsg();
        taskTitle.value = "";
        priority.value = "";
        break;

      case "NINU":
        redUl.appendChild(li);
        successMsg();
        taskTitle.value = "";
        priority.value = "";
        break;
    }
  }
}
