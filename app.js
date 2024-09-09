function addTask(){
    let taskInput=document.getElementById('taskInput');
    let taskText=taskInput.value.trim();//trim enleve l'espace à droite et à gauche du text

    if(taskText===''){
        alert('Please enter a task')
    }

    let taskList=document.querySelector('.myItems')
    let li=document.createElement('li');
    let h2= document.createElement('h2');
    h2.textContent=taskText;

    let btnContainer=document.createElement('div');
    let editbutton=document.createElement('button');
    let deletebutton=document.createElement('button');


    btnContainer.classList.add('action-btns')


    editbutton.classList.add('edit');
    editbutton.textContent='Edit';
    editbutton.onclick=function(){
        editTask(h2,li); 
    }




    deletebutton.classList.add('delete');
    deletebutton.textContent='Delete';
    deletebutton.onclick=function(){
    taskList.removeChild(li);

}


    btnContainer.appendChild(editbutton);
    btnContainer.appendChild(deletebutton);

    li.appendChild(h2);
    li.appendChild(btnContainer);

    taskList.appendChild(li);


    function editTask(h2,li){
        let currentValue=h2.textContent;
        let newValue=prompt('Edit task:' , currentValue);
        if  (newValue!==null && newValue.trim()!==''){
        h2.textContent=newValue.trim();
    }
    else{
        alert ('task cant be empty');
    }

        
        }
}