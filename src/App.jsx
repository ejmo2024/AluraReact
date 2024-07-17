import './App.css'
import Galeria from './componentes/Galeria/Galeria.jsx'
import Header from './componentes/Header/Header.jsx';
import Formulario from './componentes/formulario/Formulario.jsx'

import MiOrg from './componentes/MiOrg/MiOrg.jsx'

import React, { useState } from 'react';

export default function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [listaProductos, setListaProductos] = useState([]);

  const [productoEditando, setProductoEditando] = useState(null);


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  const obtenerDatos = async () => {
    try {
      const res = await fetch('https://664e32a3fafad45dfadf5c22.mockapi.io/api/productos');
      if (!res.ok) {
        throw new Error('No se pudo obtener los datos de la API');
      }
      const data = await res.json();
      setListaProductos(data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  const registrarColaborador = (nuevoProducto) => {
    setListaProductos([...listaProductos, nuevoProducto]);
    alert('Producto registrado correctamente');
  };


  const iniciarEdicion = (producto) => {
    setProductoEditando(producto);
    actualizarMostrar(true);
  };
  const actualizarProducto = (productoActualizado) => {
    setListaProductos(listaProductos.map(p => p.id === productoActualizado.id ? productoActualizado : p));
    setProductoEditando(null);
   alert('Producto actualizado correctamente');
  };


  
  
  return (
    <main>
      
      <Header />
      
      {mostrarFormulario=== true ? <Formulario                             
      obtenerDatos={obtenerDatos}
      onRegistrar={registrarColaborador} 
      productoEditando={productoEditando}
      actualizarProducto={actualizarProducto}
      /> 
       :<></>}

      {/* 
      <Formulario
        obtenerDatos={obtenerDatos}
        onRegistrar={registrarColaborador} 
        productoEditando={productoEditando}
        actualizarProducto={actualizarProducto}
        />
        */}


       <MiOrg cambiarmostrar={cambiarMostrar}/>


      
      <Galeria
        listaProductos={listaProductos}
        obtenerDatos={obtenerDatos}
        iniciarEdicion={iniciarEdicion}
        />
    </main>
  );
}
