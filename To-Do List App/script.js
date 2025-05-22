const input = document.getElementById('taskinput');
const task = document.getElementById('task');



function addtask() {
    if (input.value === '') {
        alert('please enter task')
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        task.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '☓';
        li.appendChild(span);
        }
        input.value = '';
        savedata()
    }
    

document.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedata()
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata()
    }
}, false)

    
function savedata(){
    localStorage.setItem('data', task.innerHTML);
}

function showtask(){
    task.innerHTML = localStorage.getItem('data');
}

showtask()