import React from 'react'
import ReactDOM from 'react-dom'

function Modal ({ children }) {
  return React.Dom.createPortal(
    children,
    document.getElementById('modal')
  )
}

export { Modal }
