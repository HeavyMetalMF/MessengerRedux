import React from "react";
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (prop) => {
//     // console.log(prop)
//     // let state = prop.store.getState();
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     };
//
//                     let onPostChange = (text) => {
//                         store.dispatch(updateTextActionCreator(text));
//                         // console.log(text)
//                     }
//                     return <MyPosts updateNewPostText={onPostChange}
//                                     addPost={addPost}
//                                     posts={state.profilePage.posts}
//                                     newPostText={state.profilePage.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {dispatch(addPostActionCreator(postText))}
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;