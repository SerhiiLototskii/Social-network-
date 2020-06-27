import {authAPI} from "../../api/api";
import {toggleFollowingInProgress} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING,  isFetching})
export const setAuthUserData = (userId, email,login) => ({type: SET_USER_DATA,  data: {userId, email, login}})
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {Id, email, login} = response.data.data;
                    dispatch(setAuthUserData({Id, email, login}));
                }
            });
    }
}


export default authReducer;