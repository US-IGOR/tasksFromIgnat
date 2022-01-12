import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import s from "./hw10.module.css";
import {loadingAC, loadingACType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";

function HW10() {
    // useSelector,


    const isLoading = useSelector<AppStoreType, boolean> ( state => state.loadingStore.loading   )
    let dispatch = useDispatch();

    const setLoading = () => {


        dispatch (loadingAC(true))
debugger
        setTimeout(()=>dispatch (loadingAC(false)) , 2000 )

        //
        console.log('loading...')
    };

    return (


        <div >
            <hr/>
            homeworks 10

      {/*      should work (должно работать)*/}



            <div className={s.wrap}>
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

        </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
