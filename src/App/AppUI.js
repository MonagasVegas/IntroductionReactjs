import React from 'react'
import { TodoContext } from '../Components/TodoContext'
import { TodoCounter } from '../Components/TodoCounter'
import { TodoSearch } from '../Components/TodoSearch'
import { TodoList } from '../Components/TodoList'
import { TodoItem } from '../Components/TodoItem'
import { TodoForm } from '../Components/TodoForm'
import { CreateTodoButton } from '../Components/CreateTodoButtom'
import { Modal } from '../Components/Modal'

function AppUI () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  )
}

export { AppUI }
