import React, { ReactNode, useState } from "react"
import SubHeader from "./SubHeader"

/**
 * Componente Main da aplicação
 * 
 * @param children: React Children 
 * @returns Main
 */

const Main = ({ children }) => {
    return (
        <>
            <SubHeader  />
            <main className="h-[80vh] bg-backgroundGray-500">
                {children}
            </main>
        </>
    )
}

export default Main