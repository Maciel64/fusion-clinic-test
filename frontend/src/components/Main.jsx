import React, { ReactNode } from "react"




const Main = ({ children }) => {
    return (
        <>
            <main className="h-[80vh] bg-backgroundGray">
                {children}
            </main>
        </>
    )
}

export default Main