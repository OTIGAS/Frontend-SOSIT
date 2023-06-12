import { NavLink, Outlet } from "react-router-dom"

import { LayoutContainer, NavContent } from "./styles";

import { Header } from "../../components/Header";

export function CompanyDefaultLayout() {
    return (
        <>
            <LayoutContainer>
                <Header />
                <NavContent>
                    <NavLink to="/empresa/agendas">Agendas</NavLink>
                    <NavLink to="/empresa/historico">Histórico</NavLink>
                </NavContent>
                <main>
                    <Outlet />
                </main>
            </LayoutContainer>
        </>
    )
}