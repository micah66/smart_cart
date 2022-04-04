import ShoppingItem from "./ShoppingItem";

export default interface ShoppingItemProps {
  index: number,
  item: ShoppingItem,
  handleClick: (index:number) => void,
}