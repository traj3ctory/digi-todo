import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/svg/logo.svg';

/**
* @author traj3ctory
* @function Header
**/

const Header = (props) => {
    return (
        <>
            <Navbar className="bg-todo todo-header" variant="dark">
                <Navbar.Brand to="/">
                    <img
                        alt="react-icon"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        Todo-App
                    </Navbar.Brand>
                    <h6 className="w-100 text-right my-2 text-white d-block d-md-none">{props.completed} / {props.total}</h6>
            </Navbar>
        </>
    )
}


export default Header;