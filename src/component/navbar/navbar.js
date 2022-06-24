import React, { Component } from "react";
import { MenuItems } from "./menuItem";
import "./navbar.css";
import logo from "./Logograph.svg";

class Navbar extends Component {
    state = {clicked : false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <header>
                <img src={logo} className='logoNav' alt='logo'/>
                <h3 className='logoName'>Adiguna UI</h3>
                <nav className='nav'>
                    <div className="menuIcon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <b><a className={item.cName} href={item.url}>
                                    {item.title}
                                </a></b>
                            </li>
                        )
                    })}
                </ul>
                </nav>
            </header>
            

        )
    }
}

export default Navbar