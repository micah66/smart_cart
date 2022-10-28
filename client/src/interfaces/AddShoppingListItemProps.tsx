export default interface AddShoppingListItemProps {
  handleSubmit: (itemName:string, itemQty:number) => void,
  clearErrors: () => void
}