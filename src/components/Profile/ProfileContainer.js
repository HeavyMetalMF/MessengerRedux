import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer  extends React.Component{
    componentDidMount() {
        // console.log(this.props);
        let userId = this.props.match.params.userID;
        if(!userId){
            debugger;
            userId = this.props.authUserID
        };
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    render(){
        // console.log(this.props.isAuth)
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserID: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent);