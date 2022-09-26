import React from 'react'
import './index.css'
import { useStorageListener } from './useStorageListener'

// import { withStorageListener } from './withStorageListener'
/*
function ChanageAlert ({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios?</p>
        <button onClick={() => toggleShow(false)}>
          Volver a cargar la informacion
        </button>
      </div>
    )
  } else {
    return null
  }
}
const ChangeAlertWithStorageListener = withStorageListener(ChanageAlert)

export { ChangeAlertWithStorageListener } */

function ChangeAlert ({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize)
  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button className='TodoForm-button TodoForm-button--add' onClick={toggleShow}>
            Yes!
          </button>
        </div>

      </div>
    )
  } else {
    return null
  }
}

export { ChangeAlert }
