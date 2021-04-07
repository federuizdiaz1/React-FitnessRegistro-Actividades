import React from 'react'
import Card from './Card'


const ListaEjercicio = ({ EjericioLista }) => (
    <div>
        {
            EjericioLista.map((ejercicio) => {
                return (
                    <Card
                        key={ejercicio.id}
                        title={ejercicio.title}
                        description={ejercicio.description}
                        img={ejercicio.img}
                        leftColor={ejercicio.leftColor}
                        rightColor={ejercicio.rightColor}

                    />
                )

            })
        }
    </div>
)


export default ListaEjercicio