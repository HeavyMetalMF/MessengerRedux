import React, {useState} from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from "../../../assets/img/user.png";
 import ProfileDataFormRedux from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    }

    console.log(props.profile)
    if (!props.profile){
        return <Preloader/>
    }

    const mainPhoto = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        );

    }

    return (
        <div>
            <div>
                <img src='https://via.placeholder.com/900x200'/>
            </div>
            <div className={c.description}>
                <img className={c.ava}
                     src={props.profile.photos.large || userPhoto}/>
                <div>
                    {props.isOwner ? <input type={'file'} onChange={mainPhoto}/> : ''}
                </div>
                {editMode ? <ProfileDataFormRedux initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> : <ProfileData isOwner={props.isOwner}
                                                                                      profile={props.profile}
                                                                                      activateEditMode={activateEditMode}/>}
            </div>
            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

const ProfileData = (props) => {
    return(
        <div>
            {props.isOwner ? <div><button onClick={props.activateEditMode}>Редактировать</button></div> : ''}
            <div><b>Логин:</b> {props.profile.fullName}</div>
            <div><b>Ищу ли я работу:</b> {props.profile.lookingForAJob ? 'Да': 'Нет'}</div>
            <div><b>Обо мне:</b> {props.profile.aboutMe}</div>
            <div><b>Контакты:</b> {Object.keys(props.profile.contacts).map(key =>
                <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>)
            }</div>
        </div>
    )
}


export const Contact = (props) => {
    return <div className={c.contact}><b>{props.contactTitle}:</b>{props.contactValue}</div>
}

export default ProfileInfo;