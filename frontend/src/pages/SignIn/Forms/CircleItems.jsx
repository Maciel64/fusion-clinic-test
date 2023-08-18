/**
 * Item verde com sinal de confirmação da lista de benefícios da página de cadastro, formulário para escolher plano.
 * 
 * @param props 
 * @returns ListCircleConfirmItem
 */

export const ListCircleConfirmItem = ({ text }) => {
    return (
        <>
            <p className="flex justify-between text-gray-500">
                <span>{text}</span>
                <span className="w-[15px] h-[15px] bg-green-300 rounded-full flex justify-center items-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.57672 0.363264C8.85935 0.0604511 9.33394 0.0440859 9.63675 0.326711C9.93956 0.609337 9.95593 1.08393 9.6733 1.38674L4.4233 7.01174C4.1491 7.30553 3.69205 7.33098 3.38692 7.06944L0.76192 4.81944C0.447426 4.54988 0.411005 4.0764 0.680571 3.76191C0.950138 3.44741 1.42361 3.41099 1.73811 3.68056L3.81726 5.46269L8.57672 0.363264Z" fill="#50CD89"/>
                    </svg>
                </span>
            </p>
        </>
    )
}


/**
 * Item cinza com sinal de negado da lista de benefícios da página de cadastro, formulário para escolher plano.
 * 
 * @param props 
 * @returns ListCircleDenyItem
 */

export const ListCircleDenyItem = ({ text }) => {
    return (
        <>
            <p className="flex justify-between text-gray-500">
                <span>{text}</span>
                <span className="w-[15px] h-[15px] bg-gray-300 rounded-full flex justify-center items-center">
                    <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.20841 0.34467C6.91552 0.0517768 6.44064 0.0517766 6.14775 0.34467L4.02636 2.46606L1.90509 0.344778C1.61219 0.0518849 1.13732 0.0518849 0.844426 0.344778C0.551533 0.637671 0.551532 1.11255 0.844426 1.40544L2.9657 3.52672L0.844448 5.64797C0.551555 5.94087 0.551555 6.41574 0.844448 6.70863C1.13734 7.00153 1.61222 7.00153 1.90511 6.70863L4.02636 4.58738L6.14773 6.70874C6.44062 7.00163 6.91549 7.00163 7.20839 6.70874C7.50128 6.41585 7.50128 5.94097 7.20839 5.64808L5.08702 3.52672L7.20841 1.40533C7.5013 1.11244 7.5013 0.637563 7.20841 0.34467Z" fill="#A1A5B7"/>
                    </svg>
                </span>
            </p>
        </>
    )
}
