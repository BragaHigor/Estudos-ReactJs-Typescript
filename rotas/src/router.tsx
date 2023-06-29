import { createBrowserRouter } from "react-router-dom"

import  Home  from './pages/home/index'
import  Sobre  from './pages/sobre/index'
import Contato from "./pages/contato"
import Produto from "./pages/produto"
import NotFound from "./pages/notFound"

import Layout from '../src/components/layout/index'

const router = createBrowserRouter([

    {
        element:<Layout />,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/sobre',
                element: <Sobre/>
            },
            {
                path:'/contato',
                element: <Contato/>
            },
            {
                path:'/produto/:id',
                element: <Produto/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }


])

export default router