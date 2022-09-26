import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

/* { addTodo, setOpenModal } antes enviamos esto en lugar de props */

function TodoForm (props) {
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '')
  const navigate = useNavigate()

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    navigate('/')
    // setOpenModal(false)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    props.submitEvent(newTodoValue)
    navigate('/')
    // addTodo(newTodoValue)
    // setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit} className='container'>
      {/* <label>Escribe tu nuevo TODO</label> */}
      <label>{props.label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Agregar'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='TodoForm-button TodoForm-button--add'
        >
          {/* Añadir */}
          {props.submitText}
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
