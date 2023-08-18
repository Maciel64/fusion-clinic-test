const ListItem = ({ text, selectedPhase }) => {
    return (
        <>
            {selectedPhase === "GRAY" && (
                <div className="font-roboto font-medium text-gray-300">{text}</div>
            )}

            {selectedPhase === "BLUE" && (
                <div className="font-roboto font-medium text-blue-400 border-blue-400 border-b-2">{text}</div>
            )}

            {selectedPhase === "GREEN" && (
                <div className="font-roboto font-medium text-green-500 flex items-center gap-1">{text} 
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.57672 0.363264C8.85935 0.0604511 9.33394 0.0440859 9.63675 0.326711C9.93956 0.609337 9.95593 1.08393 9.6733 1.38674L4.4233 7.01174C4.1491 7.30553 3.69205 7.33098 3.38692 7.06944L0.76192 4.81944C0.447426 4.54988 0.411005 4.0764 0.680571 3.76191C0.950138 3.44741 1.42361 3.41099 1.73811 3.68056L3.81726 5.46269L8.57672 0.363264Z" fill="#50CD89"/>
                    </svg>
                </div>
            )}
        </>
    )
}



export default ({ planPhase, bankPhase, dataPhase }) => {
    return (
        <>
            <div className="flex gap-5">
                <ListItem text="Escolha seu plano" selectedPhase={planPhase} />
                <ListItem text="Dados bancários" selectedPhase={bankPhase} />
                <ListItem text="Suas informações" selectedPhase={dataPhase} />
            </div>
        </>
    )
}