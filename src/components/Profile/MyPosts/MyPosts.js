import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'postText'} component={Textarea} placeholder={'Введите ваше сообщение'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={'button'} >Добавить пост</Field>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    // form: 'ProfileAddNewPostForm'
    form: 'AddPost'
})(MessageForm);

const MyPosts = (prop) => {
    let postsElements = prop.posts.map(post => <Post key={post.id} likes={post.likes} message={post.message}/>);

    let AddPost = (data) => {
        // console.log(data);
        prop.addPost(data.postText);
    }

    return (
        <div className={c.postsBlock}>
            <h2>Мои посты</h2>
            <MessageReduxForm  onSubmit={AddPost}/>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;