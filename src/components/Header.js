import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, setShow, showAdd}) => {
    
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button onClick={setShow} color={showAdd ? 'red': 'navy'} text={showAdd ? 'Close': 'Add'} />
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string,
}

// you can style stuff inline w style = {headingStyle}
// const headingStyle = {
//     color: 'orange', backgroundColor: 'black' 
// }

export default Header