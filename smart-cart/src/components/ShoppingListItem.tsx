import React, { useState } from "react"
import ShoppingItemProps from "../interfaces/ShoppingItemProps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faPencil } from "@fortawesome/free-solid-svg-icons"

const ShoppingListItem: React.FC<ShoppingItemProps> = ({index, item, handleClick, handleEdit, handleClickDelete}):JSX.Element => {
  const [showBtns, setShowBtns] = useState<boolean>(false)

  const truncateText = (text:string) => {
    return text.length > 30 ? `${text.slice(0,30)}...` : text
  }

  const onClickDelete = () => {
    handleClickDelete(index)
  }

  return (
    <div
      className={`shopping-item ${item.isCrossedOut ? 'crossed-out' : ''}`}
      onMouseEnter={() => setShowBtns(true)}
      onMouseLeave={() => setShowBtns(false)}
    >
      <div className="shopping-item-qty">
        {item.qty}
      </div>
      <div
        className="shopping-item-name"
        onClick={() => handleClick(index)}
      >
        {truncateText(item.name)}
      </div>
      {showBtns && <div className="shopping-item-btns">
        <FontAwesomeIcon
          className='shopping-item-edit'
          icon={faPencil}
          size='xs'
          name={`edit-${item.name}`}
          onClick={(e) => handleEdit(e, index)}
        />
        <FontAwesomeIcon
          className='shopping-item-delete'
          icon={faTimes}
          size='xs'
          onClick={onClickDelete}
        />
      </div>}
    </div>
  )
}

export default ShoppingListItem