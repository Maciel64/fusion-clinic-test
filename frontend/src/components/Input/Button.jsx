import React from "react"


export default ({ text, styles, onButtonClicked }) => {

    const localOnButtonClicked = (event) => {
        event.preventDefault()

        if (onButtonClicked) {
            onButtonClicked(event)
        }
    }

    return (
        <>
            <button onClick={localOnButtonClicked} className={`bg-blue-500 p-3 text-white rounded-md flex justify-center items-center ${styles ?? ""}`}>
                {text}
            </button>
        </>
    )
}