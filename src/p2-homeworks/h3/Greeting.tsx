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
        <div className={s.wrapper}>
            <div className={s.inner}>
                <div className={s.wrapper__inputBlock}><input
                    className={error  ? s.wrapper__input_error : s.wrapper__input}

                    value={name}
                    onChange={setNameCallback}
                    onKeyDown={onEnter}

                    onBlur={setNameCallback}
                />
                    {error ? <div className={s.wrapper__error_error}>{'Error: dont use space'}  </div> : null}
                </div>

                <div className={s.wrapper__buttonBlock}>
                    <button className={s.wrapper__button} onClick={addUser}>add</button>
                </div>

                <div className={s.wrapper__span}>
                    <span>{totalUsers}</span>
                </div>
            </div>
        </div>
    )
}

export default Greeting
