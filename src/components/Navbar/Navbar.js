import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/profile' >Профиль</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/dialogs'>Сообщения</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/news'>Новости</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/music'>Музыка</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/settings'>Настройки</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;