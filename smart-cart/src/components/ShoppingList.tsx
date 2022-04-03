import React from 'react'
import ShoppingItem from './ShoppingItem'
import useFetch from 'react-fetch-hook'
import ShoppingItemProps from '../interfaces/ShoppingItemProps'

const ShoppingList = () => {
  const {data: items, isLoading, error} = useFetch<ShoppingItemProps[]>('./mock-items.json')
  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  if (error) {
    <p>Error: {error}</p>
  }

  if (!items) {
    return (
      <p>You do not have any items in your cart</p>
    )
  }

  return (
    <div className='container'>
      <h3 className='shopping-list-title'>My Shopping List</h3>
      <ul className='shopping-list'>
        {
          items.map((item) => {
            return <li key={item.id}><ShoppingItem name={item.name} qty={item.qty} isChecked={item.isChecked} id={item.id}/></li>
          })
        }
      </ul>
    </div>
  )
}

export default ShoppingList