import  IconButton  from '@mui/material/IconButton';
import React from 'react';
import imagenes from '../../img/imagenes';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';



export default function CartWidget() {

    return (
        <>
            <Link to='/cart'>
                <IconButton >
                    <ShoppingCartIcon style={{width:40, height:'auto', color:'#f77f00'}}alt="carrito" />
                </IconButton>
            </Link>

            

        </>

    );
}