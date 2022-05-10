import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import GridCartDetail from './GridCartDetail'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export default function CartDetail() {

  const {cart, removeCart, buy, removeCartAll} = useContext(CartContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(cart.length === 0){
      setLoading(true)
    }else{
      setLoading(false)
    }
  }, [cart])
  
  return (
    <>
    {loading ? 
    (<div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'20%'}}>
      <Link to='/' style={{color:'#6357f6'}}>
        <h2>
          You have an empty cart, start shopping
          <RemoveShoppingCartIcon style={{height:35, width:80}}/>
        </h2>
      </Link>
    </div>)
    : 
    <GridCartDetail/>}
    </>
  )
}
