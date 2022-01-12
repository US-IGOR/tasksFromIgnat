const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: loadingACType): typeof initState  => { // fix any
    switch (action.type) {
        case 'SHOW_LOADING': {

            const copy = {
                ...state, loading: action.loading
            }


            debugger
            return copy
            debugger
        }
        default:
            return state
    }
}



//export type loadingACType = ReturnType<typeof loadingAC>
export type loadingACType = {
    type: 'SHOW_LOADING',
    loading: boolean
}

export const loadingAC = (status: boolean): loadingACType => {
    return ({

        type: 'SHOW_LOADING',
        loading: status


    }) as const


} // fix any