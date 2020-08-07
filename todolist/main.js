//adding todo item//

//declaring variables to hold data
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

//declaring function to add item in the li
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa fa-trash delete" aria-hidden="true"></i>
    </li>
    `;

    list.innerHTML += html;
};

//add item in the form on submit event
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    
    //checking if input if any string, not just a white string
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

//Deleting items from the list 
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});