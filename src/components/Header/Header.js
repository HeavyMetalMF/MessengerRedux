import React from "react";
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <img src='https://i.pinimg.com/originals/71/ff/89/71ff89fbe1987a5684aa48b453b25184.png'/>
            <div className={c.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} <button onClick={props.logout}>Выйти</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;