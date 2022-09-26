import React from 'react'

function useLocalStorage (itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
        setSincronizedItem(true)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  }, [sincronizedItem])

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }
  /*
Con esta funcion lo que hacemos es sincronizar diferentes aplicaciones
cuando tenemos cambios en una pestaña o en una ventana diferente, lo que hicimos
fue sinconizar nuestro efecto o nuestro useLocalStorage para que vuelva cargar
la informacion del localStorage cada vez que una un estado que se llama  sincronizeItem.
nos lanza una alertar con un boton y el boton renderiza la informacion desde el localStorage
*/
  const sincronizeItem = () => {
    setLoading(true)
    setSincronizedItem(false)
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  }
}

export { useLocalStorage }
