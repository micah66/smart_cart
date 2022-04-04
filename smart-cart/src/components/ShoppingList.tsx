import React, { useState, useEffect } from 'react'
import ShoppingListItem from './ShoppingListItem'
import useFetch from 'use-http'
import ShoppingItem from '../types/ShoppingItem'

const ShoppingList = () => {
  const [items, setItems] = useState<ShoppingItem[]>([])
  const {get, post, response, loading, error} = useFetch<ShoppingItem[]>('http://127.0.0.1:3000')

  useEffect(() => {
    get('/mock-items.json')
    .then(shoppingList => {
      if (response.ok) setItems(shoppingList)
    })
  }, [get, response])

  const toggleIsCrossedOut = (index: number) => {
    const updatedItems = [...items]
    updatedItems[index].isCrossedOut = !items[index].isCrossedOut
    setItems(updatedItems)
  }

  return (
    <>
      <div className='container'>
        <h3 className='shopping-list-title'>My Shopping List</h3>
        <ul className='shopping-list'>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!items.length && !error && !loading && (<p>You do not have any items in your cart</p>)}
          {
            items.map((item, index) => {
              return (
                <li key={index}>
                  <ShoppingListItem
                    index={index}
                    handleClick={() => toggleIsCrossedOut(index)}
                    item={item}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default ShoppingList