interface HeaderProps {
  text: string
}

const Header = ({text}: HeaderProps) => {
  return <h1 className='header'>{text}</h1>
}

export default Header