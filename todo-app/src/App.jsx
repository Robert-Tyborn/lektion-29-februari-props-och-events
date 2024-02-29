import './App.css';

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const title = 'Todo App';

  return (
    <main className='app'>
      <h1>{ title }</h1>
      <ul className='app__todos'>
        <TodoItem task="Köp kaffe" done={true} />
        <TodoItem task="Köp kaka" done={true} />
        <TodoItem task="Brygg kaffe" done={false} />
        <TodoItem task="Drick kaffe" done={false} />
      </ul>
      <AddTodo />
    </main>
  )
}

export default App
