import React from 'react'
import Clock from './Clock'
import s from "./Clock.module.css";

function HW9() {
    return (
        <div>
            <hr/>
            homeworks 9

           <div className={s.wrap}>
            {/*should work (должно работать)*/}
            <Clock/>
           </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>

        </div>
    )
}

export default HW9
