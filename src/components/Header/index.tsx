import { List, User, Moon, SignOut, Sun } from "phosphor-react"
import { HeaderContent } from "./styles"

import { useContext } from "react"

import { NavLink } from "react-router-dom"

import { UserContext } from "../../context/UserContext";
import { ThemaContext } from "../../context/ThemeContext";

export function Header() {
    const { nome, userLogout, typeUser } = useContext(UserContext);
    const { handleThemeChange, theme } = useContext(ThemaContext);

    const rota = typeUser === 'company' ? "/cliente/perfil" : "/cliente/perfil"

    return (
        <HeaderContent>
            <h1>
                <NavLink to="/" title="Home">
                    S.O.S.I.T.
                </NavLink>
            </h1>
            <span>{nome}</span>
            <nav>
                <h2>Menu</h2>
                <List size={38}/>
                <ul>
                    <li>
                        <NavLink to={rota}>
                            Perfil
                            <User />
                        </NavLink>
                    </li>
                    <li>
                        <strong onClick={handleThemeChange}>
                            Tema
                            {theme === 'light' ? <Sun /> : <Moon />}
                        </strong>
                    </li>
                    <li>
                        <strong onClick={userLogout}>
                            Sair
                            <SignOut />
                        </strong>
                    </li>
                </ul>
            </nav>
        </HeaderContent>
    )
}