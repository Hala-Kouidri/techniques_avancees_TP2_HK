import PropTypes from 'prop-types'

const Header = ({title, onAdd, showAdd}) => {
    
    return(
        <header className="header mt-5">
            <h3>{title}</h3>
        </header>
    )
}
Header.defaultProps = {
    title: "Zahara"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


/*
const headingStyle = { 
    color: 'red', 
    background:'black' 
}*/
export default Header