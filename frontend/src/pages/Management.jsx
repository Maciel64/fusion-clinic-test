import { useState } from "react"
import NavLinkButton from "../components/SubHeader/NavLinkButton"

/**
 * Componente Management para página de Gestão.
 * 
 * @returns Management
 */

export default () => {
    const [ enabledButton, setEnabledButton ] = useState()

    const onNavClicked = (title, enabledId) => {
        setMainTitle(title)
        setEnabledButton(enabledId)
    }

    return (
        <>
            <NavLinkButton to="especialistas" text="Especialistas" setEnabledButton={onNavClicked} enableId={0} isEnabled={enabledButton} />
            <NavLinkButton to="clinicos" text="Clínicas" setEnabledButton={onNavClicked} enableId={1} isEnabled={enabledButton} />
        </>
    )
}