import React from 'react'
import Card from './Card'

function ListaEjercicio(props) {
    return (
        <div>
            {
                props.EjericioLista.map((ejercicio) => {
                    return (
                        <Card
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
}

export default ListaEjercicio