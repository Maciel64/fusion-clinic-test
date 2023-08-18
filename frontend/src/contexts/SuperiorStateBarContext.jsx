import React, { createContext, useReducer } from "react"
import SuperiorStateBarReducer from "../reducers/SuperiorStateBarReducer"



export const SuperiorStatBarContext = createContext([])

export const SuperiorStateBarProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(SuperiorStateBarReducer, { planPhase: "BLUE", bankPhase: "GRAY", dataPhase: "GRAY" })

    return (
        <>
            <SuperiorStatBarContext.Provider value={{ state, dispatch }}>
                {children}
            </SuperiorStatBarContext.Provider>
        </>
    )
}