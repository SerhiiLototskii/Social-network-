import React from 'react';
import {addPostActionCreator, updadeNewActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updadeNewActionCreator(text)
                    store.dispatch(action);
                }
                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>)
            }
        }
        </StoreContext.Consumer>)
}*/

let mapStateToProps = (state) => {
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updadeNewActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}


const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;