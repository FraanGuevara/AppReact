import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import GridCartDetail from './GridCartDetail'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CompleteOrder from './CompleteOrder';
import styles from './GridCartDetail.module.css';

export default function CartDetail() {

  const { cart, removeCartAll, sacarProducto, cantidadTotalProductos, precioTotalProductos, buy, idCompra, setIdCompra } = useContext(CartContext)

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (cart.length === 0 && idCompra !== '') {
      setLoading(false);
    } else if (cart.length === 0) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [cart, idCompra])


  return (
    <>
      {
        idCompra !== '' && cart.length === 0 ?
          <CompleteOrder
            idCompra={idCompra}
          />
          :
          cart.length === 0 ?
            (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20%' }}>
              <Link to='/' style={{ color: '#0077ff' }}>
                <h2 id={styles.leyendaCarritoVacio}>
                  You have an empty cart, start shopping
                  <RemoveShoppingCartIcon style={{ height: 35, width: 80 }} />
                </h2>
              </Link>
            </div>)
            :
            <GridCartDetail
              cart={cart}
              removeCartAll={removeCartAll}
              sacarProducto={sacarProducto}
              cantidadTotalProductos={cantidadTotalProductos}
              precioTotalProductos={precioTotalProductos}
              buy={buy}
              setIdCompra={setIdCompra}
            />
      }
    </>
  )
}
