import React from 'react';
import './Producto.css';
import Boton from '../Boton/Boton.jsx';

const Product = ({ product, onDeleteProduct, onEditProduct }) => {
    return (
        <div className='card'>
            <img className='card_img' src={product.url} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>{product.precio}</h3>
            <Boton  texto="Eliminar" onClick={() => onDeleteProduct(product.id)} />
            <Boton texto="Editar" onClick={() => onEditProduct(product)}/>
        </div>
    );
};

export default Product;
