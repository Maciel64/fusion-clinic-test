import React from "react"
import { createContext, useEffect, useReducer } from "react"
import UserReducer from "../reducers/UserReducer"


const UserContextSchema = {
    state: { 
        name: "", 
        specialty:"" 
    }, 
    dispatch: ""
}


export const UserContext = createContext(UserContextSchema)


export const UserProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(UserReducer, {name: "", specialty: ""})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") ?? `{ "name": "", "specialty": "" }`)
        dispatch({ type: "SET_USER_NAME", name: user.name })
        dispatch({ type: "SET_USER_SPECIALTY", specialty: user.specialty })
    }, [])
    
    
    return (
        <>
            <UserContext.Provider value={{ state, dispatch }}>
                {children}
            </UserContext.Provider>
        </>
    )
}