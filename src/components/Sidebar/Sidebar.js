import React from 'react'
import './Sidebar.css';
import IconSvg from '../../utilities/svg/svg';



const Sidebar = props => {

    let activeSection = props.activeSection;

    return (
        <div className="sidebar">    

            <div className="sidebar__head">
                <div className="sidebar__head__imgContainer">
                    <div className="sidebar__head__img">
                    </div>
                    <div className="sidebar__head__activeCircle">
                    </div>
                </div>
                <div className="sidebar__head__name">
                    Anja Rasoloarivalona
                </div>
                <div className="sidebar__head__title">
                    Developer & Business Analyst
                </div>
            </div>  

            <ul className="sidebar__list">
                <li className={`sidebar__list__item
                              ${activeSection === 'home' ? 'active': ''}`}>
                   <IconSvg icon="home"/>
                    <span>Home</span>
                </li>
                <li className={`sidebar__list__item
                              ${activeSection === 'about' ? 'active': ''}`}>
                    <IconSvg icon="user"/>
                    <span>About</span>
                </li>
                <li className={`sidebar__list__item
                              ${activeSection === 'portfolio' ? 'active': ''}`}>
                    <IconSvg icon="briefcase"/>
                    <span>Portfolio</span>
                </li>
                <li className={`sidebar__list__item
                              ${activeSection === 'skills' ? 'active': ''}`}>
                    <IconSvg icon="cogs"/>
                    <span>Skills</span>
                </li>
                <li className={`sidebar__list__item
                              ${activeSection === 'contact' ? 'active': ''}`}>
                    <IconSvg icon="chat"/>
                    <span>Contact</span>
                </li>
            </ul>
        </div>
    )
}





export default Sidebar
