import React from 'react'
import './index.css'

function TodoCounter ({ total, completed }) {
  // Podemos esto cambiar esto por una desestructuracion en los parametros.
  // const {total, completed } = props
  return <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs</h2>
}

export { TodoCounter }
