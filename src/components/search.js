import Hero from './hero'
import {Link} from 'react-router-dom'
import NoResults from './noResults';



const MovieCard = ({movie}) => {

  var posterPath = "https://img.freepik.com/premium-vector/cinema-concept-poster-with-popcorn-drink-film-strip-clapperboard-3d-glasses-movie-time_153935-1.jpg?w=2000"

  if (movie.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }

  const detailPath =  `/movies/${movie.id}`
  return (

    <div className="col-lg-3 col-md-3 col-2 my-5">
      <div className="card">
        <img src={posterPath} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailPath} className="btn btn-primary">Description</Link>
        </div>
      </div>
    </div>

  )
}


const Search = ({searchWord, searchResults}) => {

    const title = `You are searching for ${searchWord}`


   
    if (!searchResults.length) {
      return(
        <>
         <Hero text={title}/>
         <NoResults/>
        </>
       
      )
    } 
      
    

    const ResultsHTML = searchResults.map((data, i) =>{

      return <MovieCard movie={data} key={i}/>

    })


    return (
  
      <>
      <Hero text={title}/>
      {ResultsHTML && (
          <div className="container">
            <div className="row">
              {ResultsHTML}
            </div>
          </div>
      ) }
      
      </>
    )
  }


export default Search
  