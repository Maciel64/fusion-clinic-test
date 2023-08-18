import { Link, NavLink, useNavigate } from "react-router-dom"

import LeftSlope from "../../static/img/slope-left.svg"
import RightSlope from "../../static/img/slope-right.svg"

/**
 * Componete NavLinkButton do Header. As pequenas curvaturas na esquerda e direita são formadas por svgs difentes.
 * 
 * @param to String de Link para página.
 * @param text Texto interno do componente.
 */

export default ({ to, text }) => {
    const navigate = useNavigate()

    const onMouseClicked = () => {
        navigate(to)
    }


    return (
        <>
            <NavLink to={to} className="group flex items-end" onClick={onMouseClicked}>
                {({ isActive }) => (
                    <>
                        <div className={isActive ? "opacity-100 bottom-0 left-0" : "opacity-0 group-hover:opacity-100 bottom-0 left-0"}>
                            <img src={LeftSlope} />
                        </div>

                        <div className={isActive ? "bg-white text-headerBlue rounded-t-lg p-4" : "group-hover:bg-white group-hover:text-headerBlue rounded-t-lg p-4"}>
                            {text}
                        </div>

                        <div className={isActive ? "opacity-100 bottom-0 left-0" : "opacity-0 group-hover:opacity-100 bottom-0 left-0"}>
                            <img src={RightSlope} />
                        </div>
                    </>
                )}
            </NavLink>
        </>
    )
}