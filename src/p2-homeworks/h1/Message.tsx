import React from 'react'
import s from './Message.module.css'

type messageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataPropsType) {
    return (

        <div className={s.flexcontainer}>

            <div className={s.flexcontainer_element_1}>
                <img src={props.avatar}/>
            </div>
            <div className={s.flexcontainer_element_2}>
                <div className={s.secondflexcontainer}>
                    <div className={s.secondflexcontainer_element_1}>
                        <div>
                            "."
                        </div>
                    </div>
                    <div className={s.secondflexcontainer_element_2}>
                        <div className={s.thirdflexcontainer}>
                            <div className={s.thirdflexcontainer_element_1}>
                                <div className={s.name}>
                                    {props.name}
                                </div>
                                <div className={s.message}>
                                    {props.message}
                                </div>
                            </div>
                            <div  className={s.time}>
                                <time>{props.time}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Message
