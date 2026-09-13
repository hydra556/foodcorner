import React, { useState } from 'react'
import './CartSidebar.css'
import QRCode from 'react-qr-code'
const CartSidebar = ({show,setShow,cart,setCart}) => {

  let [showQr, setShowQr] =useState(false);

  let removeItem = (index)=>{
    let updatedCart =[...cart];

    if (updatedCart[index].quantity > 1){
      updatedCart[index].quantity -= 1
    }else{
      updatedCart.splice(index, 1)
    }
    setCart(updatedCart)
  }
    let total = cart.reduce((acc ,item)=>acc + item.price * item.quantity, 0)
  return (
    <div className='sidebar'>cart
      <button className='closeBtn' onClick={()=>setShow(false)}>
        X
      </button>
      <h2>Your Cart</h2>
      {
        cart.map((item, index)=>{
          return (<div className='cartItem' key={index}>
        <img src={item.image} alt=''/>
        <div className='cartItemdetails'>
          <p>{item.name}</p>
          <p>&#8377;{item.price}</p>
        </div>
        <div className='qtyControl'>
          <button onClick={()=>removeItem(index)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={()=>{
            let updatedCart = [...cart];
            updatedCart[index].quantity += 1
            setCart(updatedCart)
          }} >+</button>
        </div>
        <button className='removeBtn' onClick={()=>removeItem(index)}>
          Remove
        </button>    
        </div>
          )
        })
      }
        <h3 className='total'>Total: &#8377; {total}</h3>
      <button className='orderBtn' onClick={()=>setShowQr(true)}>Place Order</button>
      {showQr && <div style={{height:"370px" , width:"300px", margin:"20px",display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
            <h2>Scan and Pay</h2>
            <QRCode value={`upi://pay?pa=saawantkunal246-1@okhdfcbank&am=${total}&cu=INR`} size={200}/>
            <h3>Total:{total}</h3>

          </div>}
      </div>

  )
}

export default CartSidebar