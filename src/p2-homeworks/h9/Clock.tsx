import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
       clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {


            setDate (new Date())

        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow (true)
    }
    const onMouseLeave = () => {
        setShow (false)
    }

    const stringTime =date?.toLocaleTimeString()  // fix with date
    const stringDate = date?.toLocaleDateString() // fix with date

    return (
        <div >
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s.wrapT}

            >
                {stringTime}
            </div>


                <div className={s.wrapT}>
                    {show && (  <div> {stringDate} </div>)}
                </div>

<div className={s.wrapT}>
            <SuperButton onClick={start} >start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
        </div>
    )
}

export default Clock
