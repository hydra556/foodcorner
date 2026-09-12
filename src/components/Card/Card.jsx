import React from 'react'
import './Card.css'

const Card = ({cardData,cart,setcart}) => {
  return (
    <div className='card-container'>
      {cardData.length === 0 ? (<h1>No item found</h1>) : (
        cardData.map((i) => {
        return <div className='card'key={i.id}>
          <h1>{i.name}</h1>
          <img src={i.image} />
          <p>Very delicious {i.name}</p>
          <p className='price'>Price : &#8377; {i.price}</p>
          <button>Add to cart</button>
          </div>
      })
      )}
    </div>
  )
}

export default Card