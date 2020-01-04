import React, { Component } from 'react'
import './Sidebar.css';


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">           
                <div className="sidebar__top">
                    top
                </div>  
                <ul className="sidebar__list">
                    <li className="sidebar__list__item">
                        Me
                    </li>
                    <li className="sidebar__list__item">
                        Portfolio
                    </li>
                    <li className="sidebar__list__item">
                        Skills
                    </li>
                    <li className="sidebar__list__item">
                        Contact
                    </li>
                </ul>
            </div>
        )
    }
}


export default Sidebar
