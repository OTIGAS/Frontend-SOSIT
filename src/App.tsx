import { BrowserRouter, Route, Routes } from "react-router-dom"

import { defaultThemeLight, defaultThemeDark } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

// import { PrivateRoutes } from "./Routes/private.routes";
// import { PublicRoutes } from "./Routes/public.routes";

import { CustomerDefaultLayout } from "./layouts/CustomerDefaultLayout";
import { Home } from "./pages/Customer/Home";
import { HistoryCustomer } from "./pages/Customer/History";

import { CompanyDefaultLayout } from "./layouts/CompanyDefaultLayout";
import { Schedule } from "./pages/Company/Schedule";
import { HistoryCompany } from "./pages/Company/History";


import { Login } from "./pages/Login";
import { CreateCompanyAccount } from "./pages/CreateCompanyAccount";
import { CreateCustomerAccount } from "./pages/CreateCustomerAccount";

import { useContext } from 'react'
import { UserStorage } from "./context/UserContext";
import { ThemaContext } from "./context/ThemeContext";
import { ProfileCustomer } from "./pages/Customer/Profile";
import { ScheduleCustomer } from "./pages/Customer/Schedule";
// import { ProfileCompany } from "./pages/Company/Profile";

import { ProtectedRoute } from "./protected-route/ProtectedRoute";


export function App() {

  const { theme } = useContext(ThemaContext);
  
  return (
    
      <ThemeProvider theme={theme === 'dark' ? defaultThemeLight : defaultThemeDark}>
        <BrowserRouter>
            <UserStorage>
              
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/criar-conta-empresa" element={<CreateCompanyAccount />} />
                <Route path="/criar-conta-cliente" element={<CreateCustomerAccount />} />

                <Route path="/" element={<CustomerDefaultLayout />}>
                    <Route path="/cliente/home" element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }/>
                    <Route path="/cliente/historico" element={
                      <ProtectedRoute>
                        <HistoryCustomer />
                      </ProtectedRoute>
                    }/>
                    <Route path="/cliente/perfil" element={
                      <ProtectedRoute>
                        <ProfileCustomer />
                      </ProtectedRoute>
                    }/>
                    <Route path="/cliente/agendar" element={
                      <ScheduleCustomer />                        
                    }/>
                </Route>

                <Route path="/" element={<CompanyDefaultLayout />}>
                    <Route path="/empresa/agendas" element={<Schedule />}/>
                    <Route path="/empresa/historico" element={<HistoryCompany />}/>
                    {/* <Route path="/empresa/perfil" element={<ProfileCompany />}/> */}
                </Route>

              </Routes>
            </UserStorage> 
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  )
}

{/* <ProtectedRoute>
 <ScheduleCustomer />
</ProtectedRoute>  */}