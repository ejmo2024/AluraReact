import React, { useEffect } from 'react';
import Product from '../Product/Product';
import "./Galeria.css";

const Galeria = ({ listaProductos, obtenerDatos, iniciarEdicion }) => {
    useEffect(() => {
        obtenerDatos();
    }, [obtenerDatos]);

    const eliminarProducto = async (id) => {
        try {
            const res = await fetch(`https://664e32a3fafad45dfadf5c22.mockapi.io/api/productos/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                throw new Error('No se pudo eliminar el producto');
            }
            if (res) {
                alert('Se eliminara un producto');
            }

       
            
            
            obtenerDatos();
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    };

    if (listaProductos.length === 0) {
        return <h1>Cargando productos...</h1>;
    }

    return (
        <div className='cards'>
            {listaProductos.map((p, i) => (
                <Product key={i} product={p} onDeleteProduct={eliminarProducto} onEditProduct={iniciarEdicion} />
            ))}
        </div>
    );
};

export default Galeria;
