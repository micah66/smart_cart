import React, { useState } from "react"
import ShoppingItemProps from "../interfaces/ShoppingItemProps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faPencil } from "@fortawesome/free-solid-svg-icons"

const ShoppingItem: React.FC<ShoppingItemProps> = ({name, qty, isChecked, id}) => {
  const [ShowBtns, setShowBtns] = useState<boolean>(false)

  const truncateText = (text:string) => {
    return text.length > 30 ? `${text.slice(0,30)}...` : text
  }

  return (
    <div
      className={`shopping-item ${isChecked ? 'crossed-out' : ''}`}
      onMouseEnter={() => setShowBtns(true)}
      onMouseLeave={() => setShowBtns(false)}
    >
      <div className="shopping-item-qty">
        {qty}
      </div>
      <div className="shopping-item-name">
        {truncateText(name)}
      </div>
      {ShowBtns && <div className="shopping-item-btns">
        <FontAwesomeIcon className='shopping-item-edit' icon={faPencil} size='xs'/>
        <FontAwesomeIcon className='shopping-item-delete' icon={faTimes} size='xs'/>
      </div>}
    </div>
  )
}

export default ShoppingItem