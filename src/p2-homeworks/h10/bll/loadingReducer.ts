const initState = {

loading: false
}

export const loadingReducer = (state = initState, action: loadingACType): any => { // fix any
    switch (action.type) {
        case 'SHOW-LOADING': {
            debugger
            return state
        }
        default: return state
    }
}


type loadingACType = ReturnType<typeof loadingAC>


export const loadingAC = ():any => {
return {

    type: 'SHOW-LOADING',
    loading: true


} as const


} // fix any