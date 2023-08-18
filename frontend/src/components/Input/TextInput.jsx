export default ({ text, name, label, styles, value }) => {
    return (
        <>
            <div className={`flex flex-col text-left ${styles ?? ""}`}>
                <label htmlFor={name}>{label ?? ""}</label>
                <input name={name} placeholder={text} defaultValue={value ?? ""} className="text-textGray text-xs rounded-md p-3 border border-gray-200" type="text"  />
            </div>
        </>
    )
}