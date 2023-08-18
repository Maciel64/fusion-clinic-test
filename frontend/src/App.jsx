import { useContext, useEffect } from "react"

import { useNavigate, Outlet } from "react-router-dom"

import { UserContext } from "./contexts/UserContext"

import Header from "./components/Header"
import SubHeader from "./components/SubHeader"
import Main from "./components/Main"

import "./main.css"



export default () => {
	const { state }  = useContext(UserContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (state && !state.name) {
			return navigate("/novaconta")
		}
	}, [state])

	return (
		<>
			<Header />
			<SubHeader />
			<Main >
				<Outlet />
			</Main>
		</>
	)
}
