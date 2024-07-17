import React, { useState, useEffect } from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import './Formulario.css';
import Boton from '../Boton/Boton';

const Formulario = ({ onRegistrar, obtenerDatos, productoEditando, actualizarProducto }) => {
    const [name, setNombre] = useState('');
    const [url, setUrl] = useState('');
    const [precio, setPrecio] = useState('');

    
    

    

    useEffect(() => {
        if (productoEditando) {
            setNombre(productoEditando.name);
            setUrl(productoEditando.url);
            setPrecio(productoEditando.precio);
        } else {
            setNombre('');
            setUrl('');
            setPrecio('');
        }
    }, [productoEditando]);

    const manejarEnvio = async (e) => {
        e.preventDefault();
        const nuevoProducto = { name, url, precio };

        try {
            if (productoEditando) {
                const res = await fetch(`https://664e32a3fafad45dfadf5c22.mockapi.io/api/productos/${productoEditando.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(nuevoProducto)
                });

                if (!res.ok) {
                    throw new Error('No se pudo actualizar el producto');
                }


                const data = await res.json();
                actualizarProducto(data);
            } else {
                const res = await fetch('https://664e32a3fafad45dfadf5c22.mockapi.io/api/productos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(nuevoProducto)
                });

                if (!res.ok) {
                    throw new Error('No se pudo crear el producto');
                }

                
                

                const data = await res.json();
                onRegistrar(data);
            }

            obtenerDatos();
            setNombre('');
            setUrl('');
            setPrecio('');
        } catch (error) {
            console.error('Error al crear o actualizar producto:', error);
        }
    };



    

    return (
        <section className='section_formulario'>
            <form onSubmit={manejarEnvio} className='formulario'>
                <h2>{productoEditando ? 'Editar producto' : 'Agregar producto'}</h2>
                <CampoTexto
                    type='text'
                    titulo=""
                    placeholder="Ingrese Nombre"
                    required
                    valor={name}
                    actualizarValor={setNombre}
                />
                <CampoTexto
                    type='text'
                    titulo=""
                    placeholder="Ingrese Url"
                    required
                    valor={url}
                    actualizarValor={setUrl}
                />
                <CampoTexto
                    type='number'
                    titulo=""
                    placeholder="Ingrese Precio"
                    required
                    valor={precio}
                    actualizarValor={setPrecio}
                />
                <Boton texto={productoEditando ? 'Actualizar' : 'Guardar'} />
            </form>
        </section>
    );
};

export default Formulario;
