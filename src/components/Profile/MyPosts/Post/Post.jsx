import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.rosphoto.com/images/u/articles/1510/7_5.jpg"/>
            {props.message}
            {props.text}
            <div>
                {props.likesCount}
            </div>
        </div>
    )
}


export default Post;