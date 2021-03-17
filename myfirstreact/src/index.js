import React from 'react'
import ReactDOM from 'react-dom'
import Card from './componentes/Card'
import Welcome from './componentes/Welcome'
//import Exercises from './pages/Exercises'
import 'bootstrap/dist/css/bootstrap.css'



const container = document.getElementById('root')

ReactDOM.render(<div>
    <Welcome  
        username="Fede"
    />
    <Card
        title="Technique Guides"
        description="Learn amazing street workout and calisthenics"
        img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
        leftColor="#A74CF2"
        rightColor="#617BFB"

    />
</div>, container)
