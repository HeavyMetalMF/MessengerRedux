import React from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    console.log(props.profile)
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://via.placeholder.com/900x200'/>
            </div>
            <div className={c.description}>
                <img className={c.ava}
                     src={props.profile.photos.large}/>
            </div>
            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default ProfileInfo;