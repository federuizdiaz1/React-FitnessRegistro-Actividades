import React from 'react'
import './estilos/AddButton.css'
import buttonImg from '../images/add.png'
import {  Link } from 'react-router-dom'



const AddButton = () => (
    <Link to="/ejercicio/nuevo">
        <div>
            <img src={buttonImg} className="Fitness-Add" alt="ejercicio" />
        </div>
    </Link>
)
export default AddButton