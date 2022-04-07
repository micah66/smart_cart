import { useState } from "react"
import AddShoppingListItemProps from "../interfaces/AddShoppingListItemProps"

const AddShoppingListItem = ({handleSubmit, clearErrors}: AddShoppingListItemProps) => {
  const [itemName, setItemName] = useState<string>('')
  const [itemQty, setItemQty] = useState<number>(1)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setItemName(e.target.value)
    clearErrors()
  }
  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setItemQty(parseInt(e.target.value))
    clearErrors()
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(itemName, itemQty)
  }

  return (
    <>
      <form className="add-list-item" onSubmit={onSubmit}>
        <input type="number" defaultValue={1} value={itemQty} onChange={handleQtyChange}/>
        <input type="text" value={itemName} placeholder="Add item" onChange={handleNameChange}/>
        <button type="submit">Add item</button>
      </form>
    </>
  )
}

export default AddShoppingListItem