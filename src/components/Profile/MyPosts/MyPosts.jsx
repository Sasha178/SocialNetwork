import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            MY POST
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post/>
                <Post/>
            </div>
        </div>
    )
};

export default MyPosts;