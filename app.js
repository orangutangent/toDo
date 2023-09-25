let todoList = document.querySelector('#todo-list')
let todoForm = document.querySelector('#todo-form')
let todoInput = document.querySelector('#todo-input')


todoForm.addEventListener('submit',formHandler)

function formHandler(event){
    event.preventDefault();
    const taskText = todoInput.value;
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('role','button')
    deleteBtn.innerText = 'Удалить';
    deleteBtn.addEventListener('click',deleteTask)
    deleteBtn.classList.add('deleteBtn')
    newTask.append(deleteBtn);
    todoList.append(newTask);
    todoInput.value=''
    todoInput.focus();

}

function deleteTask(){
    this.closest('li').remove();
}