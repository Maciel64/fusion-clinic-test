import Button from "../../../components/Input/Button"
import { SuperiorStatBarContext } from "../../../contexts/SuperiorStateBarContext"
import SuperiorStateBar from "../SuperiorStateBar"

import { useContext } from "react"
import { ListCircleConfirmItem, ListCircleDenyItem } from "./CircleItems"
import FormTitle from "../../../components/Form/FormTitle"
import FormParagraph from "../../../components/Form/FormParagraph"
import FormContainer from "../../../components/Form/FormContainer"



export default ({ setPageFormState }) => {
    const { state, dispatch }  = useContext(SuperiorStatBarContext)

    const onFormSubmited = (event) => {
        event.preventDefault()

        dispatch({ phase: "planPhase", state: "GREEN" })
        dispatch({ phase: "bankPhase", state: "BLUE" })

        setPageFormState("passingBankData")
    }

    return (
        <>
            <SuperiorStateBar dataPhase={state.dataPhase} planPhase={state.planPhase} bankPhase={state.bankPhase} />

            <FormContainer>
                <FormTitle>Escolha o seu plano Fusion Clinic</FormTitle>
                <FormParagraph>Acelere sua vida com a Fusion Clinic! Nossa clínica especializada proporciona rapidez, eficiência e produtividade, otimizando sua saúde e bem-estar. Conquiste uma rotina dinâmica e vitoriosa! 🏃‍♂️💪🌟</FormParagraph>

                <div className="w-[390px] h-[420px] bg-backgroundGray-500 rounded-[18px] flex flex-col justify-center gap-5">
                    <div>
                        <h2 className="font-poppins text-2xl font-bold">Fusion Start</h2>
                        <p className="text-gray-400 text-sm">O melhor dos benefícios</p>
                    </div>

                    <p className="text-blue-500 font-bold font-roboto">
                        R$ <span className="text-4xl">99</span>
                        <span className="text-gray-500 font-light">/ mês</span>
                    </p>

                    <div className="flex justify-center">
                        <form className="w-[300px] flex flex-col justify-between gap-8">
                            <div className="flex flex-col gap-3">
                                <ListCircleConfirmItem text="Up to 10 Active Users" />
                                <ListCircleConfirmItem text="Up to 30 Project Integrations" />
                                <ListCircleConfirmItem text="Keen Analytics Platform" />
                                <ListCircleConfirmItem text="Targets Timelines & Files" />
                                <ListCircleDenyItem text="Unlimited Projects" />
                            </div>
                    
                            <Button text="Escolher este" onButtonClicked={onFormSubmited} />
                        </form>
                    </div>
                </div>
            </FormContainer>
        </>
    )
}