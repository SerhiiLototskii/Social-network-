import React from "react";
import styles from "./users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://api.time.com/wp-content/uploads/2014/10/474639991.jpg',
                    followed: false,
                    fullName: 'Dmitriy',
                    status: 'im a boss bitch',
                    location: {city: 'Minsk', country: 'Belarus'},
                },
                {
                    id: 2,
                    photoUrl: 'https://api.time.com/wp-content/uploads/2014/10/474639991.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'im a boss bitch',
                    location: {city: 'Moscow', country: 'Russia'},
                },
                {
                    id: 3,
                    photoUrl: 'https://api.time.com/wp-content/uploads/2014/10/474639991.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'im a boss bitch',
                    location: {city: 'Kiev', country: 'Ukraine'},
                }
            ]
        )
    }

    return <div>
        {
            props.users.map( u => <div key={u.id}>
              <span>
                  <div>
                      <img src={u.photoUrl} className={styles.userPhoto}/>
                  </div>
                  <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                  </div>
              </span>
                <span>
                  <span>
                      <div>{u.fullName}</div>
                      <div>{u.status}</div>
                  </span>
                  <span>
                      <div>{u.location.country}</div>
                      <div>{u.location.city}</div>
                  </span>
              </span>
            </div>)
        }

    </div>
}

export default Users;