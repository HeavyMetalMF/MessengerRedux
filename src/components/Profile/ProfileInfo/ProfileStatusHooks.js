import React, {useEffect, useState} from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileStatusHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () =>  {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode} >{ props.status || 'No status' }</span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} value={status}
                       />
            </div>
            }
        </div>
    )
}
export default ProfileStatusHooks;
