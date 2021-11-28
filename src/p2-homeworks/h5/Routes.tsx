import React from 'react'


import { Route } from 'react-router-dom';

import PreJunior from "./pages/PreJunior";
import {Error404} from "./pages/Error404";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";
import {Routes} from "react-router-dom";
import {Navigate} from 'react-router-dom';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/Junior',
    JUNIOR_PLUS: '/junior-plus'
    // add paths
}
function RoutesUI() {
    return (
        <div>
            <Routes>
            <Route path={'/'}  element={<Navigate   to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} element={ <PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={ <Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route element={<Error404/>}/>
            </Routes>
        </div>
    )
}
export default RoutesUI
