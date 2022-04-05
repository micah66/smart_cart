import React, { useState, useEffect } from 'react'
import ShoppingListItem from './ShoppingListItem'
import useFetch from 'use-http'
import ShoppingItem from '../types/ShoppingItem'
import AddShoppingListItem from './AddShoppingListItem'
import Error from './Error'
import ErrorType from '../types/ErrorType'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ShoppingList = () => {
  const [items, setItems] = useState<ShoppingItem[]>([])
  const [itemValidationErrors, setItemValidationErrors] = useState<ErrorType[]>([])
  const [itemName, setItemName] = useState<string>('')
  const [itemQty, setItemQty] = useState<number>(1)

  const {get, response, loading, error} = useFetch<ShoppingItem[]>('http://127.0.0.1:3000')

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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value)
    setItemValidationErrors([])
  }

  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemQty(parseInt(e.target.value))
    setItemValidationErrors([])
  }

  const isValidItem = ():boolean => {
    let isItemValid:boolean = true
    const errors: ErrorType[] = []

    if ('' === itemName) {
      errors.push({isError: true, message: 'Item name cannot be empty'})
      isItemValid = false
    }

    if (items.map(item => item.name).includes(itemName)) {
      errors.push({isError: true, message:'Item already exists in list'})
      isItemValid = false
    }

    if (1 > itemQty) {
      errors.push({isError: true, message: 'Quantity must be greater than 0'})
      isItemValid = false
    }

    setItemValidationErrors(errors)

    return isItemValid
  }


  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isValidItem()) return
    
    setItems([...items, {
      name: itemName,
      qty: itemQty,
      isCrossedOut: false,
      id: items[items.length - 1].id + 1
    }])
  }

  return (
    <>
      <div className='container'>
        <h3 className='shopping-list-title'>My Shopping List</h3>
        {itemValidationErrors.map(error => <Error error={error}/>)}
        <AddShoppingListItem handleSubmit={addItem} handleQtyChange={handleQtyChange} handleNameChange={handleNameChange}/> 
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