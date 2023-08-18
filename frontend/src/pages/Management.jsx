import { useState } from "react"
import NavLinkButton from "../components/SubHeader/NavLinkButton"

/**
 * Componente Management para página de Gestão.
 * 
 * @returns Management
 */

export default () => {
    const [ enabledButton, setEnabledButton ] = useState(-1)

    return (
        <>
            <NavLinkButton to="especialistas" text="Especialistas" setEnabledButton={setEnabledButton} enabledId={0} isEnabled={enabledButton} />
            <NavLinkButton to="clinicos" text="Clínicas" setEnabledButton={setEnabledButton} enabledId={1} isEnabled={enabledButton} />
        </>
    )
}