"use strict";
const input = document.getElementById('input');
const addbtn = document.getElementById('addbtn');
const taskList = document.getElementById('task-list');
const todos = [];
function renderTodos() {
    taskList.innerHTML = '';
    todos.forEach((todo) => {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center font-bold text-[1.2rem] text-[#d7c7e3] mb-2';
        const span = document.createElement('span');
        span.textContent = todo.text;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'border-2 border-red-500 bg-red-700 p-1 rounded font-bold ml-4 cursor-pointer text-[#d7c7e3]';
        delBtn.addEventListener('click', () => {
            const index = todos.findIndex((t) => t.id === todo.id);
            todos.splice(index, 1);
            renderTodos();
        });
        div.appendChild(span);
        div.appendChild(delBtn);
        taskList.appendChild(div);
    });
}
addbtn.addEventListener('click', () => {
    if (input.value.trim() === '')
        return;
    const newTodo = {
        id: Date.now(),
        text: input.value.trim(),
    };
    todos.push(newTodo);
    renderTodos();
    input.value = '';
});
