import React from 'react'
import ShoppingItem from './ShoppingItem'
import useFetch from 'react-fetch-hook'

interface Item {
  name: string,
  qty: number,
  isChecked: boolean,
  id: number
}

const ShoppingList: React.FC = (props: any) => {
  const {data: items, error} = useFetch<Item[]>('./mock-items.json')
  console.log(error)
  if (!items) {
    return (
      <p>You do not have any items in your cart</p>
    )
  }

  return (
    <div className='container'>
      <h3 className='shopping-list-title'>My Shopping List</h3>
      <ul className='shopping-list'>
        {
          items.map((item: Item) => {
            return <li key={item.id}><ShoppingItem name={item.name} qty={item.qty} isChecked={item.isChecked}/></li>
          })
        }
      </ul>
    </div>
  )
}

export default ShoppingList