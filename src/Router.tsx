import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Perfils } from './pages/Perfils'
import { Perfil1 } from './pages/Perfil1'
import { Series } from './pages/Series'
import { Inicio } from './pages/Inicio'

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Perfils />} />
                <Route path="/banana" element={<Inicio />} />
                <Route path="/Series" element={<Series />} />
                <Route path="/Perfil1" element={<Perfil1 />} />
            </Route>
        </Routes>
    )
}