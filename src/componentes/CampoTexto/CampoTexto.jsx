import './CampoTexto.css'
const CampoTexto = (props)=>{


//manejarCambio llama por props a la funcion actualizarValor del componente Formulario y le pasa el valor del input
  const manejarCambio=(e)=>{
  props.actualizarValor(e.target.value)
  }


  return <div className='campo-texto'>
    <label className='label'>{props.titulo}</label>
    <input 
      className='in' 
      type={props.type} 
      placeholder={props.placeholder} 
      required={props.required}

      //esta funcion se llama cuando se cambia el valor del input
      value={props.valor}

    // onChange es un evento de react que se utiliza principalmente con elementos de formulario (como <input>, <select>, <textarea>) para detectar cuando el valor de un elemento ha cambiado.eneste caso llama a la funcion manejarCambio
      onChange={manejarCambio}
      />



  </div>
}
export default CampoTexto