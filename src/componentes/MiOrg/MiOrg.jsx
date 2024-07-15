

import { useState } from 'react';
import "./Miorg.css";



const MiOrg =(props)=>{




  return <section className="orgSection">
  <h3>Galeria de Productos</h3>

    <img src="/imagenes/iconBuscar.png" alt="img" onClick={props.cambiarmostrar}/>

  </section>
}
export default MiOrg