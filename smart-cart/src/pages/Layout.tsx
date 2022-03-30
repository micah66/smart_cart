import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="navigation">
          <li className="nav-item">
            <Link to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/my-cart'>My Cart</Link>
          </li>
          <li className="nav-item">
            <Link to='/custom-lists'>Custom Lists</Link>
          </li>
          <li className="nav-item">
            <Link to='/saved-carts'>Saved Carts</Link>
          </li>
          <li className="nav-items">
            <Link to='/purchase-history'>Purchase History</Link>
          </li>
          <li className="nav-items">
            <Link to='/account-settings'>Account Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout