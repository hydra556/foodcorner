import React from 'react'
import './Card.css'

const Card = ({cardData,cart,setCart}) => {

  let addToCart = (product) => {
    let newCart=[...cart];
    let item = newCart.find((i)=>i.id===product.id);
    if(item){
      item.quantity ++ ;
    }else{
      newCart.push({...product,quantity:1});
    }
    setCart(newCart);

  }
  return (
    <div className='card-container'>
      {cardData.length === 0 ? (<h1>No item found</h1>) : (
        cardData.map((i) => {
        return <div className='card'key={i.id}>
          <h1>{i.name}</h1>
          <img src={i.image} />
          <p>Very delicious {i.name}</p>
          <p className='price'>Price : &#8377; {i.price}</p>
          <button onClick={()=>addToCart(i)}>Add to cart</button>
          </div>
      })
      )}
    </div>
  )
}

export default Card