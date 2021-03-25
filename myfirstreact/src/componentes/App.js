import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Ejercicio from '../paginas/Ejercicio'
import EjercicioNuevo from '../paginas/EjercicioNuevo'
import NotFound from '../paginas/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/ejercicio" component={Ejercicio} />
                <Route exact path="/ejercicio/nuevo" component={EjercicioNuevo} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App