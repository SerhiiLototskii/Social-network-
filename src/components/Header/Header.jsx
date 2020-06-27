import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://get.whotrades.com/u4/photo4D78/20047290311-0/original.jpeg'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login </NavLink>
                }

            </div>
        </header>
    );

}

export default Header;