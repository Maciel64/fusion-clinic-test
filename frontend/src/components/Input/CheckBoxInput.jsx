


export default ({ text, id, onCheckBoxClicked }) => {
    return (
        <>
            <div className="flex items-center gap-1">
                <input id={id}  type="checkbox" onChange={onCheckBoxClicked} />
                <label className="text-sm" htmlFor={id}>{text}</label>
            </div>
        </>
    )
}