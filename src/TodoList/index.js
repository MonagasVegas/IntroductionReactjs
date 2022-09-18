import React from 'react'
import './index.css'

function TodoList (props) {
  const renderFunc = props.children || props.render

  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {/*
verificamos si nuestro componente no esta cargando pero tampoco
hay resultados de busquedas o sea resultados de nuestros todos,
se lee,
SI NUESTRO PROS.LOADING NO ESTA CARGANDO Y ADEMAS (&&)
NO TENEMOS SEARCHtODOS ENTONCES LO QUE QUIERO ES MOSTRAR TODO LO QUE VENGA
 EN MI PROPIEDAD PROPS.onEmptytodos
 */}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      {/* CON RENDER */}
      {/* {props.searchedTodos.map(props.render)} */}

      {/* CON RENDER FUNCTIONS */}
      {/* {props.searchedTodos.map(props.children)} */}

      {/* LLAMAR A RENDER O FUNCTIONS DEPENDE DEL QUE ESTEN ENVIANDO */}
      {props.searchedTodos.map(renderFunc)}

    </section>
  )
}

export { TodoList }
