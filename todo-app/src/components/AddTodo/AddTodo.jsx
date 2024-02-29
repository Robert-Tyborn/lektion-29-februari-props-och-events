import './AddTodo.css';

function AddTodo() {
    let todo = {
        task: '',
        done: false
    }

    function handleInput(event) {
        todo.task = event.target.value;
    }

    function handleCheckbox(event) {
        console.log(event.target.checked);
        todo.done = event.target.checked;
    }

    // function addTodo() {
    //     alert('Du lägger till: ' + task);
    // }

    return (
        <section>
            <input type='text' onKeyUp={ handleInput } />
            <label htmlFor="done" on>Status:</label>
            <input type="checkbox" id="done" onChange={ handleCheckbox } />
            <button onClick={ () => { console.log(todo); } }>Lägg till todo</button>
        </section>
    )
}

const input = document.querySelector('input');

input.addEventListener('keyup', (event) => {
    console.log(event.target.value);
});

export default AddTodo;