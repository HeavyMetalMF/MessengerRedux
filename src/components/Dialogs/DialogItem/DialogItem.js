import c from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (prop) => {
    return(
        <div className={c.item + ' ' + c.active}>
            <div>
                <img className={c.minAva} src='https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' width='40px' height='40px' />
            </div>

            <div className={c.mes}>
                <NavLink activeClassName={c.active} to={'/dialogs/' + prop.id}>{prop.name}</NavLink>
            </div>

        </div>
    );
}

export default DialogItem;