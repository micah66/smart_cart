import React from "react"


interface item {
  name: string,
  qty: number,
  isChecked: boolean
}

const ShoppingItem: React.FC<item> = (props) => {
  return (
    <div className={`shopping-item ${props.isChecked ? 'crossed-out' : ''}`}>
      <span className="name">
        {props.name}
      </span>
      <span className="qty">
        {props.qty}
      </span>
    </div>
  )
}

export default ShoppingItem