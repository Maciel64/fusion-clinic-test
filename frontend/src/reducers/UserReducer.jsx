/**
 * Reducer do usuário. Criado para capturar dados do usuário logado no sistema.
 * 
 * @param state Estado inicial a ser passado. { name: "", specialty: "" }
 * @param action Dados para atualização. Os valores de action devem ser { action.type: "SET_USER_NAME" | "SET_USER_SPECIALTY", action.name: "Novo nome", action.specialty: "Nova especialidade" }
 * 
 * @returns Retorna um novo objeto com os atributos de state mas atualizado a partir da action.
 */


export default (state, action) => {
    switch (action.type) {
        case "SET_USER_NAME" :
            return { ...state, name: action.name }

        case "SET_USER_SPECIALTY" :
            return { ...state, specialty: action.specialty }
    }
}