import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzhofvCZtJaJ8H9GwGqGBnaL3We2NfHrkam_DMxyk8gVUmWQA7'/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
};

export default Post;