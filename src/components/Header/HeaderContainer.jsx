import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../redux/auth-reducer";
import {usersAPI} from "../../api/api";
import {compose} from "redux";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default compose (
    connect(mapStateToProps, {getAuthUserData})
)(HeaderContainer);
