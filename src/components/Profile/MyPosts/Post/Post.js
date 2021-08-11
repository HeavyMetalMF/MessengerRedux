import React from "react";
import c from './Post.module.css';

const Post = (prop) => {
    return (
        <div className={c.item}>
            <img src='https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic'/>
            {prop.message}
            <div>
                <span>Like</span> {prop.likes}
            </div>
        </div>
    );
}

export default Post;