import './CampoTexto.css'
const CampoTexto = (props)=>{



  const manejarCambio=(e)=>{
  props.actualizarValor(e.target.value)
  }


  return <div className='campo-texto'>
    
    {/* <label className='label'> {props.titulo}</label>*/}

     <label className='label'></label>
    <input 
      className='in' 
      type={props.type} 
      placeholder={props.placeholder} 
      required={props.required}

     
      value={props.valor}

    
      onChange={manejarCambio}
      />



  </div>
}
export default CampoTexto