import React from 'react'

/* USANDO HOC [High Order Components] */

function withStorageListener (WrapperComponent) {
  return function WrapperComponentWithStorageListener (props) {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1')
        setStorageChange(true)
      }
    })

    const toggleShow = () => {
      props.sincronize()
      setStorageChange(false)
    }

    return <WrapperComponent show={storageChange} toggleShow={toggleShow} />
  }
}

export { withStorageListener }
