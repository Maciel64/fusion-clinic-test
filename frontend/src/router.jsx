import { createBrowserRouter } from "react-router-dom"

import App from "./App"

import Management from "./pages/Management"
import SignIn from "./pages/SignIn"


export default createBrowserRouter([
    {
        path: "/novaconta",
        element: <SignIn />,
        children: [

        ]
    },
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "gestao",
                element: <Management />,
                children: [
                    {
                        path: "especialistas",
                        element: <h1>Especialistas</h1>
                    },
                    {
                        path: "clinicos",
                        element: <h1>Clínicos</h1>
                    },
                ]
            },
            {
                path: "financeiro",
                element: <h1>Financeiro</h1>
            },
            {
                path: "configuracoes",
                element: <h1>configuracoes</h1>
            }
        ]
    }
])