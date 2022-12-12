import React from 'react'
import UserItem from './UserItem'
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserList = () => {

   const [products,setProducts]= useState([]);

   useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      
      setProducts(response.data)
    }
    getItems();
   }, [])

  return (
    
        <div className="container">
        <div className="row">
        {
            
            products && products.map(item => {
                return(
                    <UserItem pr={item}/>
                )
            })
        }
        </div>
       
   </div>
  )
}

export default UserList