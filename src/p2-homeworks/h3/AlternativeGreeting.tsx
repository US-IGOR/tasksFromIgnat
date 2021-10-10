import React, {ChangeEvent, useState} from "react";
import s from "./Greeting.module.css";
import {KeyboardEvent} from 'react';

type PropsType = {
    addUsers: (text: string) => void
}

function AlternativeGreeting(props: PropsType) {

    const [text, setText] = useState<string>('')
    const [er, setEr] = useState<boolean>(false)

    const CB = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
        if (text === '') {
            setEr(true)
        } else {
            setEr(false)
        }
    }


    const onEnter2 = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addUsers(text)
        }
    }


    return (

        <div>
            <div>
                <input className={er === true ? s.errorInput : s.input}
                       value={text}
                       onChange={CB}

                       onKeyDown={onEnter2}
                />
                {er ? <div className={s.error}>{'Error: dont use space'}  </div> : null}
            </div>


                <button onClick={() => props.addUsers}>add</button>

        </div>


    );
}

export default AlternativeGreeting;
