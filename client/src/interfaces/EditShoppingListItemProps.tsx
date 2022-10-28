export default interface EditShoppingListItemProps {
  index:number,
  defaultQty: number,
  defaultName: string
  handleSubmit: (itemName:string, itemQty:number, index:number) => void,
  clearErrors: () => void,
}