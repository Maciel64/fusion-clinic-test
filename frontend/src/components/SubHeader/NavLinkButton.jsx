import { NavLink } from "react-router-dom"


/**
 * NavLinkButton do SubHeader. Utilizado nesse componente pai para navegação do Main.
 * 
 * @param to: String de redirecionamento.
 * @param text: Texto interno do botão.
 * @param setEnabledButton: Função retornada de useState para alterar coloração do fundo de cada botão.
 * @param enabledId: Id necessário para filtragem de botão no momento do Click.
 * @param isEnabled: Variável de estado retornada de useState para definir a cor do fundo do botão.
 * 
 * @returns NavLinkButton
 */


export default ({ to, text, setEnabledButton, enabledId, isEnabled }) => {    
    const onLinkClicked = () => {
        setEnabledButton(enabledId)
    }


    return (
        <>
            <NavLink to={to} 
                className={`px-3 py-5 rounded-md ${isEnabled === enabledId ? "bg-backgroundGray-600" : ""}`}
                onClick={onLinkClicked}
            >{text}</NavLink>
        </>
    )
}