import React from "react";
import c from './Users.module.css'

let Users = (prop) => {
    // console.log(prop)
    if (prop.users.length === 0){
        prop.setUsers(
            [
                {id: 1, photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', followed: false, fullname: 'Roman', status: 'I am a boss Roman', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', followed: true, fullname: 'Alina', status: 'I am a boss Alina', location: {city: 'Moscow', country: 'Russia'}},
                {id: 3, photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', followed: false, fullname: 'Nastya', status: 'I am a boss Nastya', location: {city: 'Kiev', country: 'Ukraine'}},
                {id: 4, photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', followed: false, fullname: 'Natalya', status: 'I am a boss Natalya', location: {city: 'Kassel', country: 'Germany'}},
            ]
        )
    }
    return(
        <div>
            {prop.users.map(user =>
                <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoURL} className={c.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={ () => {prop.unfollow(user.id)} }>Unfollow</button>
                                : <button onClick={ () => {prop.follow(user.id)} }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullname}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    )
}
export default Users;