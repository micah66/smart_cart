import React from "react";

export default interface AddShoppingListItemProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  handleQtyChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}