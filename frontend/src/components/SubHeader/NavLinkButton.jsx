import { NavLink } from "react-router-dom"


export default ({ to, text }) => {
    return (
        <>
            <NavLink to={to}>
                {text}
            </NavLink>
        </>
    )
}