import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../redux/cartslice'

const Cart = () => {
    const dispatch = useDispatch()
    const cartitems = useSelector((state) => state.cart)

    const handelremove = (id) => {
        dispatch(remove(id))
    }
    return (
        <div>
            <h3>Cart Items</h3>
        <div className='cartWrapper'>
            {cartitems.map((item) => (
                <div className='cartCard'>
                <img src={item.image} alt='img'></img>
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                <button className='btn' onClick={()=>handelremove(item.id)}>Remove</button>
                </div>
            ))}
        </div>
        </div>
    )
}
export default Cart
