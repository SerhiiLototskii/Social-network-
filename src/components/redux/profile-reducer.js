import {usersAPI} from "../../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";
import * as axios from "axios";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';




let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 30},
        {id: 2, message: 'Im fine!', likesCount: 11},
    ],
    newPostText: 'it-',
    profile: null,
    aboutMe: null,
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, {newPost}],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile:action.profile,
                aboutMe:action.aboutMe}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile})
export const updadeNewActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });


    }
}
export default profileReducer;