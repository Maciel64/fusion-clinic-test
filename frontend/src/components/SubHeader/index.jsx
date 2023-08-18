import { Outlet } from "react-router-dom"


export default () => {
    return (
        <>
            <nav className="h-[79px] bg-white">
                <Outlet />
            </nav>
        </>
    )
}