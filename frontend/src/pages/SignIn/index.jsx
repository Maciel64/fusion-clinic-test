import NewAccountForm from "./Forms/NewAccountForm"

import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"

import WomanSvg from "../../static/img/Agency.svg"
import ChosePlanForm from "./Forms/ChosePlanForm"
import BankDataForm from "./Forms/BankDataForm"

import UserDataForm from "./Forms/UserDataForm"
import { useNavigate } from "react-router-dom"



export default () => {
    const { state } = useContext(UserContext)
    const [ pageFormState, setPageFormState ] = useState("creatingNewAccount")
    const navigate = useNavigate()

    useEffect(() => {
        if (state && state.name) {
            return navigate("/")
        }
    }, [state])
    
    return (
        <>
            <main className="w-full h-fit py-10 bg-backgroundGray-600 flex justify-around items-center font-inter text-center">
                <div className="flex flex-col items-center w-[500px] gap-5"></div>
                
                <div className="flex flex-col items-center w-[500px] gap-5 fixed left-[150px] top-[150px]">
                    <img src={WomanSvg} width="285.06px" />
                    
                    <h2 className="text-[30px] font-semibold">Seja mais rápido, eficiente e produtivo</h2>
                    
                    <p className="text-sm font-medium text-textGray">
                        In this kind of post, the blogger introduces a person they've interviewed and provides some background information about the interviewee and their work following this is a transcript of the interview.
                    </p>
                </div>

                <div className="w-[600px]  min-h-[720px] bg-white rounded-3xl flex flex-col justify-center items-center">
                        {pageFormState === "creatingNewAccount" && (
                            <div className="w-[390px] flex flex-col gap-5">
                                <NewAccountForm setPageFormState={setPageFormState} />
                            </div>
                        )}

                        {pageFormState === "chosingPlan" && (
                            <div className="flex flex-col gap-5 items-center">
                                <ChosePlanForm setPageFormState={setPageFormState} />
                            </div>
                        )}

                        {pageFormState === "passingBankData" && (
                            <div className="flex flex-col gap-5 items-center">
                                <BankDataForm setPageFormState={setPageFormState} />
                            </div>
                        )}

                        {pageFormState === "passingUserData" && (
                            <div className="flex flex-col gap-5 items-center py-5">
                                <UserDataForm />
                            </div>
                        )}
                </div>
            </main>
        </>
    )
}