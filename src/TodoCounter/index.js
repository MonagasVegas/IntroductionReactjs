import React from 'react'
import './index.css'

function TodoCounter ({ totalTodos, completedTodos, loading }) {
  return (
    <h2
      className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}
    >
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  )
}

export { TodoCounter }
