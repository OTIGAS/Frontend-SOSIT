import { NavLink, Outlet } from "react-router-dom"

import { CosutmerDefaultLayout, NavContent } from "./styles";

import { Header } from "../../components/Header";

 export function CustomerDefaultLayout() {
    return (
        <>
            <CosutmerDefaultLayout>
                <Header />
                <NavContent>
                    <NavLink to="/cliente/home">Buscar</NavLink>
                    <NavLink to="/cliente/historico">Histórico</NavLink>
                </NavContent>
                <main>
                    <Outlet />
                </main>
            </CosutmerDefaultLayout>
        </>
    )
 }