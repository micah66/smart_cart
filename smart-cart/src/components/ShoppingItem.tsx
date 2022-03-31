import React from "react"
import ShoppingItemProps from "../interfaces/ShoppingItemProps"

const ShoppingItem: React.FC<ShoppingItemProps> = ({name, qty, isChecked, id}) => {
  return (
    <div className={`shopping-item ${isChecked ? 'crossed-out' : ''}`}>
      <span className="name">
        {name}
      </span>
      <span className="qty">
        {qty}
      </span>
    </div>
  )
}

export default ShoppingItem