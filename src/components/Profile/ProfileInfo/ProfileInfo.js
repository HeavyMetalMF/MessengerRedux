import React from "react";
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://via.placeholder.com/900x200'/>
            </div>
            <div className={c.description}>
                <img className={c.ava}
                     src='https://img-fotki.yandex.ru/get/222565/493212545.4dc/0_1d9d38_ba3dcc3_XL.jpg'/>
            </div>
        </div>
    );
}

export default ProfileInfo;