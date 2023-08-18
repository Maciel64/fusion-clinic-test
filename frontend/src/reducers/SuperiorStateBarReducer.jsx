export default (state, action) => {
    return { ...state, [action.phase]: action.state }
}