/**
 * Reducer do SuperiorStateBar. Criado pela necessidade de controlar o estado da fase na página de Login/Sigin.
 * 
 * @param state Estado inicial a ser passado. Começa inicialmente como { planPhase: "BLUE", bankPhase: "GRAY", dataPhase: "GRAY" }
 * @param action Novos dados para atualização. Os valores dentro de action devem ser { phase: "planPhase" | "bankPhase" | "dataPhase", state: "GRAY" | "BLUE" | "GREEN"}
 */

export default (state, action) => {
    return { ...state, [action.phase]: action.state }
}