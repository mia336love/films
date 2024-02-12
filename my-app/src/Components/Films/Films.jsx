import { useState, useEffect } from "react";
import './Films.css'

const Films = () => {   
    const [films, setFilms] = useState([])


    useEffect(() => {
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
        method: 'GET',
        headers: {
            'X-API-KEY': '4e08e3d9-c3b1-400f-bc0f-45f604367ba1',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => setFilms(json.items))
        .catch(err => console.log(err))

    }, [])

    return (
        <div id="films-container">

            {films.map(film => (
                <div key={film.kinopoiskId} className="film">
                    <strong className="film-title">{film.nameRu}</strong>
                    <img className="poster" src={film.posterUrlPreview} alt={film.nameRu} />
                </div>
            ))}

        </div>
    )
}

export default Films