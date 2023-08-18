import { Link, NavLink, useNavigate } from "react-router-dom"



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
                            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0C19 13.6 11 15 0 15H19V0Z" fill="white"/>
                            </svg>
                        </div>

                        <div className={isActive ? "bg-white text-headerBlue rounded-t-lg p-4" : "group-hover:bg-white group-hover:text-headerBlue rounded-t-lg p-4"}>
                            {text}
                        </div>

                        <div className={isActive ? "opacity-100 bottom-0 left-0" : "opacity-0 group-hover:opacity-100 bottom-0 left-0"}>
                            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0C0 13.6 8 15 19 15H0V0Z" fill="white"/>
                            </svg>
                        </div>
                    </>
                )}
            </NavLink>
        </>
    )
}