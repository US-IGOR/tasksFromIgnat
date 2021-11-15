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

    return (<>


            <ul>
                <li >

                        <div className={s.affair}>
                        <div className={s.affair__id}><span >{props.affairId}</span></div>
                        <div className={s.affair__name}><span >{props.affairName}</span></div>
                        <div className={s.affair__status}><span >{props.affairPriority}</span></div>
                        <div className={s.affair__block_button}><button  className={s.affair__button} onClick={deleteCallback}>X</button></div>
                    </div>
                </li>
            </ul>
        </>)
}

export default Affair
