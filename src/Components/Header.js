import React, { Component } from 'react';

class Header extends Component {


    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <a href="/#" className="logo">Furniture</a>
                        <ul className="menu">
                            <li><a href="/#">Home</a></li>
                            <li><a href="/#">Service</a></li>
                            <li><a href="/#">About</a></li>
                            <li><a href="/#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;