import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.picture_content}
                     src='https://klike.net/uploads/posts/2019-01/medium/1547794995_3.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                MY POST
                <div>
                    NEW POST
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
};

export default Profile;