// package imports
import React, { useState, useEffect } from 'react'
import useFetch from 'use-http'

//components
import ShoppingListItem from './ShoppingListItem'
import AddShoppingListItem from './AddShoppingListItem'
import EditShoppingListItem from './EditShoppingListItem'
import Error from './Error'
import Modal from './Modal'

//types
import ShoppingItem from '../types/ShoppingItem'
import ErrorType from '../types/ErrorType'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ShoppingList = () => {
  const [items, setItems] = useState<ShoppingItem[]>([])
  const [itemValidationErrors, setItemValidationErrors] = useState<ErrorType[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const [editItemIndex, setEditItemIndex] = useState<number>(-1)

  const {get, response, loading, error} = useFetch<ShoppingItem[]>('http://127.0.0.1:3000')

  useEffect(() => {
    get('/mock-items.json')
    .then(shoppingList => {
      if (response.ok) setItems(shoppingList)
    })
  }, [get, response])

  const toggleIsCrossedOut = (index: number):void => {
    const updatedItems = [...items]
    updatedItems[index].isCrossedOut = !items[index].isCrossedOut
    setItems(updatedItems)
  }

  const isValidAddItem = (itemName:string, itemQty:number):boolean => {
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

  const isValidEditItem = (itemName:string, itemQty:number, index:number):boolean => {
    let isItemValid:boolean = true
    const errors: ErrorType[] = []

    if ('' === itemName) {
      errors.push({isError: true, message: 'Item name cannot be empty'})
      isItemValid = false
    }

    if (1 > itemQty) {
      errors.push({isError: true, message: 'Quantity must be greater than 0'})
      isItemValid = false
    }

    if (!(items.find((item:ShoppingItem) => item.name === itemName) === items[index])) {
      errors.push({isError: true, message: 'Item name already exists in the list'})
      isItemValid = false
    }

    setItemValidationErrors(errors)

    return isItemValid
  }

  const addItem = (itemName:string, itemQty:number):void => {

    if (!isValidAddItem(itemName, itemQty)) return
    
    setItems([...items, {
      name: itemName,
      qty: itemQty,
      isCrossedOut: false,
      id: items[items.length - 1].id + 1
    }])
  }

  const openEditModal = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, index:number):void => {
    setModalTitle('Edit Item')
    setEditItemIndex(index)
    setIsModalOpen(true)
  }

  const editItem = (itemName:string, itemQty:number, index:number):void => {
    if (!isValidEditItem(itemName, itemQty, index)) return

    const editedItems = [...items]

    editedItems[index] = {
      ...editedItems[index],
      qty: itemQty,
      name: itemName
    }

    setItems(editedItems)

    closeModal()
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const removeItem = (index:number) => {
    const removedItemId = items[index].id
    const newItems = items.filter(item => item.id !== removedItemId)

    setItems(newItems)
  }

  return (
    <>
      <div className='container'>
        <h3 className='shopping-list-title'>My Shopping List</h3>
        {itemValidationErrors.map((error, index) => <Error error={error} key={index}/>)}
        <AddShoppingListItem
          handleSubmit={addItem}
          clearErrors={()=> setItemValidationErrors([])}
        /> 
        <ul className='shopping-list'>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!items.length && !error && !loading && (
            <p>You do not have any items in your cart</p>
          )}
          {
            items.map((item, index) => (
              <li key={index}>
                <ShoppingListItem
                  index={index}
                  handleClick={(index) => toggleIsCrossedOut(index)}
                  item={item}
                  handleEdit={(e) => openEditModal(e, index)}
                  handleClickDelete={(index) => removeItem(index)}
                />
              </li>
            ))
          }
        </ul>
      </div>
      {isModalOpen && <Modal title={modalTitle} handleClose={closeModal}>
        <EditShoppingListItem
          index={editItemIndex}
          defaultName={items[editItemIndex].name}
          defaultQty={items[editItemIndex].qty}
          handleSubmit={editItem}
          clearErrors={()=> setItemValidationErrors([])}
        />
      </Modal>}
    </>
  )
}

export default ShoppingList