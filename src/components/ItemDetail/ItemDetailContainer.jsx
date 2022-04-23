import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { traerProducto } from '../../utils/customFetch';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function ItemDetailContainer({}) {

    const [producto, setProducto] = useState({});
    const {id} = useParams();
    console.log(id)
    


        /* loading */
        const [loading, setLoading] = useState(true)

    useEffect(() => {
        traerProducto(1000, id)
        .then( res => setProducto(res))
        .catch( error => console.log(error))
        /* Setear a false el setLoading para que desaparezca el ternario y muestre el item */
        .finally(()=> setLoading(false))
    }, []);
    

    return (
    <>
    {/* Operador ternario para que muestre el Loading hasta que termine en este caso el setTimeOut*/}
        {loading ? <Loading/> : (<ItemDetail {...producto}/>)}
        
    </>
    )
}
