import Navegacion from "./navbar"
import Footer from "./pie_pagina"

export default function Layout({ children }) {
    return (
        <div>
            <Navegacion />
            {children}
            <Footer/>
        </div>
    )
}