import { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/svg/logo.svg';

/**
* @author traj3ctory
* @class Header
**/

class Header extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
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
                </Navbar>
            </>
        )
    }
}


export default Header;
