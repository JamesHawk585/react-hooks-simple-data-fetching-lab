// create your App component here
import React, { useEffect, useState } from 'react'
import reactDOM from 'react-dom'

function App() {
    const [dogImage, setDogImage] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setDogImage(data.message))
    }, []);
    

    return (
        <div>
            <h1>App</h1>
            {dogImage ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
        </div>
    )
}

export default App;