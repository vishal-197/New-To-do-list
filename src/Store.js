import axios from 'axios'
import React, { useState , useEffect } from 'react'

function Store() {
    const [store, setStore]= useState([]) 

    useEffect(()=>{
       axios.get("https://fakestoreapi.com/products").then((result)=>{
            console.log(result)
            setStore(result.data)
        })

    }, []);
  return (
   <>
   {/* <button onClick={getStore}>Get Store </button> */}
   <div className='store_main' >
    {store.map((store, index)=>{
        return(
            <div className='div_size' key={index}>
                <img src={store.image} alt={store.title}></img>
                <h1> {store.title}</h1>
                <h5> {store.description}</h5>
            </div>

        )
    })}
   </div>
   </>
  )
}

export default Store