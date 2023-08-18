import { useContext, useState } from "react"

import SuperiorStateBar from "../SuperiorStateBar"

import { SuperiorStatBarContext } from "../../../contexts/SuperiorStateBarContext"

import FormContainer from "../../../components/Form/FormContainer"
import FormTitle from "../../../components/Form/FormTitle"
import FormParagraph from "../../../components/Form/FormParagraph"
import TextInput from "../../../components/Input/TextInput"

import Button from "../../../components/Input/Button"



export default ({ setPageFormState }) => {
    const [ formData, setFormData ] = useState({ name: "", number: "", validity_month: "", validity_year: "", cvv: "" })
    const { state, dispatch }  = useContext(SuperiorStatBarContext)

    
    const onFormSubmited = event => {
        event.preventDefault()

        for (let value of Object.values(formData)) {
            if (!value) {
                return alert("Nenhum campo pode estar vazio")
            }
        }

        if (!Number.isInteger(Number(formData.cvv)) || formData.cvv.length != 3) {
            return alert("Campo CVV inválido.")
        }

        if (!Number.isInteger(Number(formData.validity_month)) || Number(formData.validity_month) < 0) {
            return alert("Mês inválido")
        }

        if (!Number.isInteger(Number(formData.validity_year)) || Number(formData.validity_year) < 0) {
            return alert("Ano inválido")
        }

        if (!Number.isInteger(Number(formData.number)) || Number(formData.validity_year) < 0) {
            return alert("Número do cartão inválido")
        }

        dispatch({ phase: "bankPhase", state: "GREEN" })
        dispatch({ phase: "dataPhase", state: "BLUE" })
        setPageFormState("passingUserData")
    }

    const onFormChanged = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }


    return (
        <>
            <SuperiorStateBar dataPhase={state.dataPhase} planPhase={state.planPhase} bankPhase={state.bankPhase} />

            <FormContainer>
                <FormTitle>Informe seus dados de pagamento</FormTitle>
                <FormParagraph>Acelere sua vida com a Fusion Clinic! Nossa clínica especializada proporciona rapidez, eficiência e produtividade, otimizando sua saúde e bem-estar. Conquiste uma rotina dinâmica e vitoriosa! 🏃‍♂️💪🌟</FormParagraph>
                
                <form onChange={onFormChanged} className="w-[480px] grid grid-cols-6 grid-rows-3 gap-6 items-end">
                    <TextInput name="name" label="Nome no cartão" styles="col-span-6" />
                    <TextInput name="number" label="Número do cartão" styles="col-span-6" />
                    <TextInput name="validity_month" label="Validade" text="mês" styles="col-span-2" />
                    <TextInput name="validity_year" text="ano" styles="col-span-2" />
                    <TextInput name="cvv" label="CVV" text="CVV" styles="col-span-2" />

                    <Button text="Continuar" styles="col-span-4 col-start-2" onButtonClicked={onFormSubmited} />
                </form>
            </FormContainer>
        </>
    )
}