import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

  return (
    <div className={s.content}>
      <div><img src='https://klike.net/uploads/posts/2020-01/1578303379_1.jpg' /></div>
      <div>
          <img src={props.profile.photos.large}/>
          aboutMe={props.aboutMe}
      </div>

    </div>
  );

}

export default ProfileInfo;