import { Outlet } from "react-router-dom"


/**
 * Componente SubHeader. Se encontra abaixo do cabeçalho principal na estrura da página inicial.
 * 
 * @returns SubHeader
 */


export default () => {
    return (
        <>
            <nav className="h-[79px] bg-white flex items-center gap-2.5 rounded-md px-36">
                <Outlet />
            </nav>
        </>
    )
}