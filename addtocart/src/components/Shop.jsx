import React from 'react'
import list from '../list'
const Shop = () => {
  return (
   <section>
        {list.map((item) =>{
            console.log(item);
        })}
   </section>
  )
}

export default Shop
