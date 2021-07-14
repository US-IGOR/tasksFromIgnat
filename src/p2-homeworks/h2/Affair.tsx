import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affairPriority: string // need to fix any
    affairId: number // need to fix any
    affairName: string // need to fix any
    deleteAffairCallback: (_id: number) =>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
props.deleteAffairCallback(props.affairId)
    }// need to fix

    return (
        <div >


            <ul>
                <li className={s.conteiner}>
                    <div className={s.second_conteiner}>
                        <div><span className={s.style_id}>{props.affairId}</span></div>
                        <div><span className={s.style_name}>{props.affairName}</span></div>
                        <div><span className={s.style_priority}>{props.affairPriority}</span></div>
                        <button onClick={deleteCallback}>X</button>
                    </div>
                </li>
            </ul>
        </div>)
}

export default Affair
