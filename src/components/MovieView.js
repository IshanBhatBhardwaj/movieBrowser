import Hero from './hero'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const MovieView = () => {

    const {id} = useParams() 

    const [ movieDetails, setMovieDetails] = useState({})
    const [ isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=45e3e92747353d02484018a30548fa3d&language=en-US`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id]) 

    const renderDetails = () => {
        if (isLoading) {
            return <Hero text="...Loading"/>
        } 
        else {

            var posterPath = "https://img.freepik.com/premium-vector/cinema-concept-poster-with-popcorn-drink-film-strip-clapperboard-3d-glasses-movie-time_153935-1.jpg?w=2000"

            if (movieDetails.poster_path) {
                posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            }
            const backDropURL = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
                
                <>
                    <Hero text={movieDetails.original_title} backdrop={backDropURL}/>
                    <div className="container my-5">
                        <div className="row"> 
                            <div className="col-md-3">
                                <img src={posterPath} alt="...No Photo Found" className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                                <p className="lead">
                                    Runtime: {movieDetails.runtime} minutes
                                    <br></br>
                                    Rating: {movieDetails.vote_average.toFixed(2)} / 10
                                </p>
                            </div>
                        </div>
                    </div>

                </>

            )
        }
    }
     
    return(
        renderDetails()
    ) 
}


export default MovieView