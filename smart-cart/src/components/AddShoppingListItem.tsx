import AddShoppingListItemProps from "../interfaces/AddShoppingListItemProps"

const AddShoppingListItem = ({handleSubmit, handleQtyChange, handleNameChange}: AddShoppingListItemProps) => {

  return (
    <>
      <form className="add-list-item" onSubmit={handleSubmit}>
        <input type="number" defaultValue={1} onChange={handleQtyChange}/>
        <input type="text" placeholder="Add item" onChange={handleNameChange}/>
        <button type="submit">Add item</button>
      </form>
    </>
  )
}

export default AddShoppingListItem