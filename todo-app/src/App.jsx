import './App.css';

import TodoItem from './components/TodoItem/TodoItem';

function App() {
  const title = 'Todo App';

  return (
    <main>
      <h1>{ title }</h1>
      <ul>
        <TodoItem task="Köp kaffe" done={true} />
        <TodoItem task="Köp kaka" done={true} />
        <TodoItem task="Brygg kaffe" done={false} />
        <TodoItem task="Drick kaffe" done={false} />
      </ul>
    </main>
  )
}

export default App
