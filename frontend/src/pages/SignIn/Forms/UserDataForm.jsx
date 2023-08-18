import { useContext, useState } from "react"
import { SuperiorStatBarContext } from "../../../contexts/SuperiorStateBarContext"

import SuperiorStateBar from "../SuperiorStateBar"
import FormContainer from "../../../components/Form/FormContainer"
import FormTitle from "../../../components/Form/FormTitle"
import FormParagraph from "../../../components/Form/FormParagraph"
import TextInput from "../../../components/Input/TextInput"
import Button from "../../../components/Input/Button"
import { validateCEP, validateCPF, validateEmail } from "../../../validate"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../contexts/UserContext"


const FormDataSchema = {
    cpf: "",
    name: "",
    email: "",
    phone: "",
    instagram: "",
    cep: "",
    place: "",
    number:"",
    district: "",
    city: "",
    state: "",
    complement: "",
    council: "",
    councilcard_number: "",
    specialty: ""
}


export default () => {
    const navigate = useNavigate()
    const { state, dispatch }  = useContext(SuperiorStatBarContext)
    const { state: userState, dispatch: userDispatch } = useContext(UserContext)

    const [ formData, setFormData ] = useState({ ...FormDataSchema })


    const onFormChanged = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })

    const onFormSubmited = () => {
        for (let value of Object.values(formData)) {
            if (!value) {
                return alert("Nenhum campo pode estar vazio")
            }
        }

        if (!validateCPF(formData.cpf)) {
            return alert("CPF inválido. Corrija seus dados...")
        }

        if (!validateEmail.test(formData.email)) {
            return alert("Email inválido. Corrija seus dados...")
        }

        if (!validateCEP(formData.cep)) {
            return alert("CEP inválido... corrija o campo")
        }

        userDispatch({ action: "SET_USER_NAME", name: formData.name })
        userDispatch({ action: "SET_USER_SPECIALTY", specialty: formData.specialty })

        localStorage.setItem("user", JSON.stringify({ name: formData.name, specialty: formData.specialty }))
        location.reload()
        navigate("/")
    }


    const onCpfValidate = () => {
        if (!formData.cpf) {
            return alert("Preencha o campo de CPF para validação.")
        }

        if (!validateCPF(formData.cpf)) {
            return alert("CPF inválido. Corrija seus dados...")
        }

        return alert("CPF válido!")
    }

    const onCEPPopulate = async () => {
        const cep = formData.cep.replace("-", "")

        if (!cep) {
            return alert("Preencha o campo de CEP para validação.")
        }

        if (!validateCEP(cep)) {
            return alert("CEP inválido... corrija o campo")
        }

        const req = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await req.json()

        if (data.erro) {
            return alert("CEP inválido ou não encontrado")
        }

        const { logradouro, complemento, bairro, localidade, uf } = Object.entries(data)
            .filter(([key, value], index, array) => value !== "")
            .reduce((iterator, [key, value]) => { return { ...iterator, [key]: value }}, {})
        
        setFormData({ ...formData, place: logradouro, complement: complemento, district: bairro, city: localidade,  state: uf })
    }
    
    return (
        <>
            <SuperiorStateBar dataPhase={state.dataPhase} planPhase={state.planPhase} bankPhase={state.bankPhase} />

            <FormContainer>
                <FormTitle>Informe seus dados de pessoais e profissionais</FormTitle>
                <FormParagraph>Acelere sua vida com a Fusion Clinic! Nossa clínica especializada proporciona rapidez, eficiência e produtividade, otimizando sua saúde e bem-estar. Conquiste uma rotina dinâmica e vitoriosa! 🏃‍♂️💪🌟</FormParagraph>

                <form onChange={onFormChanged} className="w-[480px] text-left grid grid-cols-6 gap-y-8 gap-x-4 items-end text-gray-600">
                    <h3 className="text-xl border-b-2 border-gray-100 col-span-6">Dados pessoais</h3>
                    
                    <TextInput name="cpf" label="CPF" styles="col-span-5" text="000.000.000-00" />
                    <Button onButtonClicked={onCpfValidate} text="Validar" styles="h-[41.6px]" />
                    <TextInput name="name" label="Nome completo" styles="col-span-6" />
                    <TextInput name="email" label="Email" styles="col-span-6" />
                    <TextInput name="phone" label="Telefone" styles="col-span-6" />
                    <TextInput name="instagram" label="Instagram" styles="col-span-6" />
                    
                    <h3 className="text-xl border-b-2 border-gray-100 col-span-6">Localização</h3>
                    <TextInput name="cep" label="CEP" styles="col-span-5" text="00000-000" />
                    <Button text="Buscar" styles="h-[41.6px]" onButtonClicked={onCEPPopulate} />
                    <TextInput name="place" label="Logradouro" value={formData.place} styles="col-span-6" />
                    <TextInput name="number" label="Número" styles="col-span-6" />
                    <TextInput name="complement" label="Complemento" value={formData.complement} styles="col-span-6" />
                    <TextInput name="district" label="Bairro" value={formData.district} styles="col-span-6" />
                    <TextInput name="city" label="Cidade" value={formData.city} styles="col-span-6" />
                    <TextInput name="state" label="Estado" value={formData.state} styles="col-span-6" />
                    
                    <h3 className="text-xl border-b-2 border-gray-100 col-span-6">Dados Profissionais</h3>
                    <TextInput name="council" label="Conselho" styles="col-span-6" />
                    <TextInput name="councilcard_number" label="Número da carteira no conselho" styles="col-span-6" />
                    <TextInput name="specialty" label="Especialidade" styles="col-span-6" />
                
                    <Button onButtonClicked={onFormSubmited} text="Concluir" styles="col-span-4 col-start-2" />
                </form>

            </FormContainer>
        </>
    )
}