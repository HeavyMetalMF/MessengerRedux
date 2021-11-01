import React from "react";
import c from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";

let  Users = (props) => {
    return (
        <div>
            <Paginator onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       portionSize={10}
                       onPageChanged={props.onPageChanged}/>
            {
                props.users.map(user =>
                    <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={c.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                                    props.unfollow(user.id);
                                } }>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                                    props.follow(user.id);
                                } }>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
                    </div>)
            }
        </div>
    )
}

export default Users;