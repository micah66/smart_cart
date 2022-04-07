import { useState } from "react"
import EditShoppingListItemProps from "../interfaces/EditShoppingListItemProps"

const EditShoppingListItem = ({
  index,
  defaultQty,
  defaultName,
  handleSubmit,
  clearErrors,
}: EditShoppingListItemProps):JSX.Element => {

  const [itemName, setItemName] = useState<string>(defaultName)
  const [itemQty, setItemQty] = useState<number>(defaultQty)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setItemName(e.target.value)
    clearErrors()
    // setItemValidationErrors([])
  }
  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setItemQty(parseInt(e.target.value))
    clearErrors()
    // setItemValidationErrors([])
  }
  
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(itemName, itemQty, index)
  }

  return (
    <>
      <form className="edit-list-item" onSubmit={onSubmit}>
        <input type="number" className="edit-item-qty" min={1} value={itemQty} onChange={handleQtyChange}/>
        <input type="text" className="edit-item-name" value={itemName} onChange={handleNameChange}/>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default EditShoppingListItem