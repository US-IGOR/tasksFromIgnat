import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {KeyboardEvent} from 'react';

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any

        const trimmedName = e.currentTarget.value.trim()
        setName(trimmedName)
        if (trimmedName) {
            setName(trimmedName)
            setError(false)
        } else {
            setError(true)
        }
    }



    const addUser = () => {
        addUserCallback(name)
           /* alert(`Hello ${name}!`) // need to fix*/
        setName('')





    }

    const totalUsers = users.length // need to fix

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()

        }
    }

    return (



        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />

    )
}

export default GreetingContainer
