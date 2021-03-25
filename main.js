const greenUl = document.querySelector('#green-ul');
const blueUl = document.querySelector('#blue-ul');
const orangeUl = document.querySelector('#orange-ul');
const redUl = document.querySelector('#red-ul');
const taskForm = document.querySelector('.task-form');
let msg = document.querySelector('#msg');

const taskTitle = document.querySelector('#newTask');
const priority = document.querySelector('#taskPriority');


taskForm.addEventListener('submit', addTask);

function addTask(e){
    e.preventDefault();
    
    let pValue = priority.value;

    if(taskTitle.value == '' || priority.value == ''){
        msg.classList.add('error');
        msg.innerHTML = 'please fill out both inputs';
    }else{
        msg.classList.add('success');
        msg.innerHTML = 'Task added successfuly';
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskTitle.value));

        if(pValue === 'IU'){

            greenUl.appendChild(li);
            taskTitle.value = '';
            priority.value = '';

        }else if(pValue === 'INU'){

            blueUl.appendChild(li);
            taskTitle.value = '';
            priority.value = '';

        }else if(pValue === 'NIU'){

            orangeUl.appendChild(li);
            taskTitle.value = '';
            priority.value = '';

        }else if(pValue === 'NINU'){

            redUl.appendChild(li);
            taskTitle.value = '';
            priority.value = '';

        }
    }
}
