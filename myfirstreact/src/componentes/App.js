import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Ejercicio from '../paginas/Ejercicio'
import EjercicioNuevo from '../paginas/EjercicioNuevo'


function App() {
    return (
        <BrowserRouter>
            <Route path="/ejercicio" component={Ejercicio} />
            <Route path="/ejercicio/nuevo" component={EjercicioNuevo} />
        </BrowserRouter>
    )
}

export default App