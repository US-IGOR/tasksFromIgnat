import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.wrapper}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}
                     style={({ isActive }) => ({ color: isActive ? 'tomato' : '' })}

            >pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}
                     style={({ isActive }) => ({ color: isActive ? 'tomato' : '' })}
            >junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}
                     style={({ isActive }) => ({ color: isActive ? 'tomato' : '' })}
            >junior+ </NavLink>
            <div className={s.slide}></div>

        </div>
    )
}

export default Header
