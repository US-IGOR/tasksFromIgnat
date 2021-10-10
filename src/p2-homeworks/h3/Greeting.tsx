import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {KeyboardEvent} from 'react';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {

debugger
    return (
        <div className={s.gereating}>
            <div><input  className={error===true ? s.errorInput : s.input}

                value={name}
                onChange={setNameCallback}
                onKeyDown={onEnter}

                onBlur={setNameCallback}
            />
                {error ? <div className={s.error}>{'Error: dont use space'}  </div> : null}

            </div>


            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
