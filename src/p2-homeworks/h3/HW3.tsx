import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import AlternativeGreeting from "./AlternativeGreeting";

// types
export type UserType = {
    _id: string // need to fix any
    name: any // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([] )// need to fix any

    const addUserCallback = (name: string) => { // need to fix any
      const user =
            {
                _id: v1(), // need to fix any
                name: name // need to fix any
            }
            name !=='' ?  setUsers([...users,user]):  setUsers([...users]);
             // need to fix
    }
    {console.log(users)}
    return (
        <div>
            <hr/>
            homeworks 3


            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
         {/*   <AlternativeGreeting
                addUsers={addUserCallback}
            />*/}
            <hr/>
        </div>
    )
}

export default HW3
