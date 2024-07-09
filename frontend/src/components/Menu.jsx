import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
            <h1 className='heading'>POPULAR DISHES</h1>
            <p>Discover Tip Top's favorite dishes! These are loved by everyone for their amazing taste and quality. Try them today!.</p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Menu
