import { useEffect, useState } from "react"
import { MovieService } from "../../API/MovieService";
import MovieCard from "../../Components/MovieCard/MovieCard";


const Home = ({searchValueProp}) => {

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
       const {
        data : {results}
    } = await MovieService.getMovies();
       
        setMovies(results);
    }


    const getMoviesSearch = async (movieString) => {
       const {
        data : {results}
    } = await MovieService.searchMovie(movieString);
       
        setMovies(results);
    }

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        if(searchValueProp) {
            getMoviesSearch(searchValueProp)
        }
        
    }, [searchValueProp]);

  return (
    <section className="Home">
       {movies.map( (movie) =>(
        <div key={movie.id}>
            <MovieCard movieProp={movie}/>
        </div>
       ) )}
    </section>
  )
}

export default Home