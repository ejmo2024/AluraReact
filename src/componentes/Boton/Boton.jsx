import "./Boton.css";

const Boton = (props) =>{
  return <button className="btn_enviar" onClick={props.onClick}>{props.texto}</button>
}

export default Boton;