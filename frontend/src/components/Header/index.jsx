import { useContext } from "react"

import { Link, useNavigate } from "react-router-dom"
import Logo from "../../static/img/logo.svg"

import NavLinkButton from "./NavLinkButton"
import { UserContext } from "../../contexts/UserContext"

export default () => {
    const { state, dispatch } = useContext(UserContext)
    const navigate = useNavigate()

    const SignOff = () => {
        localStorage.removeItem("user")
        dispatch({ action: "SET_USER_NAME", name: "" })
        dispatch({ action: "SET_USER_SPECIALTY", specialty: "" })
        navigate("/novaconta")
    }

    return (
        <>
            <header className="bg-headerBlue text-white h-[72px] flex justify-around items-center font-poppins">
                <div className="flex gap-20 justify-evenly items-center">
                    <Link to="/">
                        <img src={Logo} width="130px" />
                    </Link>

                    <div className="flex relative top-2">
                        <NavLinkButton to="/financeiro" text="Financeiro" />
                        <NavLinkButton to="/gestao" text="Gestão" />
                        <NavLinkButton to="/configuracoes" text="Configurações" />
                    </div>
                </div>

                <div className="group flex text-right items-center gap-5">
                    <div className="z-10">
                        <p>{state && state.name}</p>
                        <p>{state && state.specialty}</p>
                    </div>

                    <div className="w-10 h-10 rounded bg-white bg-opacity-10 flex items-center justify-center">
                        {state && state.name[0]}
                    </div>

                    <div className="hidden group-hover:flex w-32 h-20 justify-center items-center absolute top-12 z-0 bg-headerBlue rounded-b-xl">
                        <div className="bg-slate-900 opacity-50 rounded-xl p-2 cursor-pointer" onClick={SignOff}>
                            Sair
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}