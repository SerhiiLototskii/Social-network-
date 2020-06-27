import React from 'react';
import s from './Profile.module.css';

import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "./../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile()
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                aboutMe={this.props.aboutMe}/>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    aboutMe: state.profilePage.aboutMe,
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
