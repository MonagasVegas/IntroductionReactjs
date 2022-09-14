import React from 'react'
import './index.css'

function TodosLoading () {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon' />
      <p className='LoadingTodo-text'>Cargando TODOs...</p>
      <span className='LoadingTodo-deleteIcon' />
    </div>
  )
}

export { TodosLoading }
