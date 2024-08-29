import React,{useState,useEffect} from 'react'
import {add} from '../redux/cartslice'
import {useDispatch} from 'react-redux'


const Home = () => {
    const [product,setproduct]=useState([])
    const dispatch=useDispatch()

useEffect(()=>{
    const fetchproduct=async()=>{
        const res=await fetch("https://fakestoreapi.com/products")
        const data=await res.json();
        setproduct(data)
    }
    fetchproduct();
},[])

const handleadd=(product)=>{
   dispatch(add(product));
}
    return (
        <div className='productsWrapper'>
            {
                product.map((product)=>(
                  <div className='card' key={product.id}>
                    <img src={product.image} alt='img'></img>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={()=>handleadd(product)}>Add to Cart</button>
                  </div>
                ))
            }
        </div>
    )
}
export default Home