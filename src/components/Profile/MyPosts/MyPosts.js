import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (prop) => {
    // console.log(prop)
    let postsElements = prop.posts.map(post => <Post likes={post.likes} message={post.message}/>);

    let postElement = React.createRef();

    let onAddPost = () => {
        prop.addPost();
    };

    let onPostChange = () => {
        let text = postElement.current.value;
        prop.updateNewPostText(text);
    }

    return (
        <div className={c.postsBlock}>
            <h2>Мои посты</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={postElement} value={prop.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Добавить пост</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;