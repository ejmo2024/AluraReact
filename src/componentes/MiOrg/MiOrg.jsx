

import { useState } from 'react';
import "./Miorg.css";
import Boton from '../Boton/Boton';



const MiOrg =(props)=>{




  return <section className="orgSection">
  <h3>Mis Productos</h3>

    {/*<img src="/imagenes/iconoMasMenos.png" alt="img" onClick={props.cambiarmostrar}/>*/}
    <div className="contenedorBoton">
    <Boton texto='Agrega un producto' onClick={props.cambiarmostrar} />

    </div>
  </section>
}
export default MiOrg