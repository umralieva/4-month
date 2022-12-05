import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <ul className="menu">
            <li>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? "active" : ""}>
                    About
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/about-page"
                    className={({isActive}) => isActive ? "active" : ""}>
                    AboutPage
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/button"
                    className={({isActive}) => isActive ? "active" : ""}>
                    ButtonPage
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/main"
                    className={({isActive}) => isActive ? "active" : ""}>
                    MainPage
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/user"
                    className={({isActive}) => isActive ? "active" : ""}>
                    UserList
                </NavLink>
            </li>
        </ul>
    );
}

export default Menu;