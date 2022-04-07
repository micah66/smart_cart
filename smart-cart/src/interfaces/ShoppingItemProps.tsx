import ShoppingItem from "../types/ShoppingItem";

export default interface ShoppingItemProps {
  index: number,
  item: ShoppingItem,
  handleClick: (index:number) => void,
  handleEdit: (e:React.MouseEvent<SVGSVGElement, MouseEvent>, index:number) => void,
  handleClickDelete: (index:number) => void
}