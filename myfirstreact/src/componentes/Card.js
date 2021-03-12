import React from 'react'
import exerciseImg from '../images/exercise.png'
import './estilos/Card.css'  

class Card extends React.Component {

    render() {
        return (
            <div className='card'>
                <div>
                    <div>
                        <div>
                            <img src={exerciseImg}></img>
                        </div>
                        <div>
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Card