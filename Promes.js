let todos = [
    {
    id: 1,
    text: 'Уборка'
    },
    {
    id: 2,
    text: 'Д\З'
    }
]

const todolist = document.querySelector('.todo_list')
const todoList = document.querySelector('.todo')
const todoInp = document.querySelector('.todoInp')
const addBtn = document.querySelector('.addBtn')
const box = document.querySelector('.box')

function updaeToDo(){
    console.log(todolist);
todolist.innerHTML = ''

    for(let todo of todos){
        todolist.innerHTML += `<div class="checkbox_box">
        <input type="checkbox" id="${todo.id}">
        <label for="${todo.id}">
            <p>OK</p>
        </label>
        <p>${todo.text}<p>
        <button id="${todo.id}d" class="deleteBtn">X<button>
    </div>
    `
    }
}
updaeToDo()

function addTodo(){
    const newTodo = {
        id: todos.length === 0 ? 1 : todos.at(-1).id + 1,
        text: todoInp.value
    }

    todos.push(newTodo)
    todoInp.value = ''
    updaeToDo()
}

function deleteTodo(id){
    todos = todos.filter(todo => todo.id !== id)
    updaeToDo()

}

addBtn.addEventListener('click', addTodo)

 box.addEventListener('click', (e) => {
     if(e.target.innerHTML === 'X')
     deleteTodo(parseInt(e.target.id))
 
 })