import { Dispatch, FormEvent, SetStateAction, useState } from "react"

import Button from "../../../components/Input/Button"
import CheckBoxInput from "../../../components/Input/CheckBoxInput"
import TextInput from "../../../components/Input/TextInput"

import FormTitle from "../../../components/Form/FormTitle"
import FormParagraph from "../../../components/Form/FormParagraph"

import { validateEmail } from "../../../validate"


export default ({ setPageFormState }) => {
    const [ formData, setFormData ] = useState({ email:"", password: "", repassword: "" })
    const [ checkBoxState, setCheckBoxState ] = useState(false)

    const onCheckBoxClicked = () => {
        setCheckBoxState(!checkBoxState)
    }


    const onFormInputsChanged = (event) => {
        if (!event.target.name) {
            return
        }

        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const createAccountClicked = (event) => {
        event.preventDefault()

        if (!checkBoxState) {
            return alert("Concorde com os termos de serviço para continuar...")
        }

        for (let value of Object.values(formData)) {
            if (!value) {
                return alert("Nenhum campo pode estar vazio...")
            }
        }


        if (!validateEmail.test(formData.email)) {
            return alert("O formato do email não é válido...")
        }

        setPageFormState("chosingPlan")
    }

    return (
        <>
            <FormTitle>Crie sua conta</FormTitle>

            <FormParagraph>E revolucione sua carreira</FormParagraph>

            <form className="flex flex-col gap-5 mt-10" onChange={onFormInputsChanged}>
                <TextInput name="email" text="Email" />
                <TextInput name="password" text="Senha" />
                <TextInput name="repassword" text="Repita a senha" />
                <CheckBoxInput id="checkout" text="Eu aceito os termos de uso e política de privacidade" onCheckBoxClicked={onCheckBoxClicked} />
                <Button text="Cadastrar" onButtonClicked={createAccountClicked} />
                <p>Já possui uma conta? <span className="text-blue-500">Entrar</span></p>
            </form>
        </>
    )
}