export default (state, action) => {
    switch (action.type) {
        case "SET_USER_NAME" :
            return { ...state, name: action.name }

        case "SET_USER_SPECIALTY" :
            return { ...state, specialty: action.specialty }
    }
}