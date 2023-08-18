import NavLinkButton from "../components/SubHeader/NavLinkButton"

export default () => {
    return (
        <>
            <nav>
                <NavLinkButton to="especialistas" text="Especialistas" />
                <NavLinkButton to="clinicos" text="Clínicas" />
            </nav>
        </>
    )
}