import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTodos } from '../useTodos'
import { TodoHeader } from '../../ui/TodoHeader'
import { TodoCounter } from '../../ui/TodoCounter'
import { TodoSearch } from '../../ui/TodoSearch'
import { TodoList } from '../../ui/TodoList'
import { TodoItem } from '../../ui/TodoItem'
import { TodosError } from '../../ui/TodosError'
import { TodosLoading } from '../../ui/TodosLoading'
import { EmptyTodos } from '../../ui/EmptyTodos'
// import { TodoForm } from '../../ui/TodoForm'
import { CreateTodoButton } from '../../ui/CreateTodoButtom'
// import { Modal } from '../../ui/Modal'
import { ChangeAlert } from '../../ui/ChangeAlert'

function HomePage () {
  const navigate = useNavigate()
  const { state, stateUpdaters } = useTodos()
  // const {
  //   error,
  //   loading,
  //   searchedTodos,
  //   completeTodo,
  //   deleteTodo,
  //   // openModal,
  //   // setOpenModal,
  //   totalTodos,
  //   completedTodos,
  //   searchValue,
  //   setSearchValue,
  //   // addTodo,
  //   sincronizeTodos
  // } = useTodos()

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    // openModal,
    searchValue
  } = state

  const {
    // setOpenModal,
    // addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos
  } = stateUpdaters

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      {/* usando render props  */}
      {/* <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
     /> */}
      {/* usando render props  */}

      {/* cambiar la render por render function */}
      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => {
              navigate(
                '/edit/' + todo.id,
                {
                  state: { todo }
                }
              )
            }}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>
      {/* cambiar la render por render function */}

      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={() => navigate('/new')}
      // setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </>
  )
}

export { HomePage }
