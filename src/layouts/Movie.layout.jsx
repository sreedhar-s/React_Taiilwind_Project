import axios from 'axios';
import React,{useEffect,useContext} from 'react';
import { useParams } from 'react-router-dom';

//Componenets
import MovieNavbar from '../components/Navbar/movieNavbar.component';

// Context
import { MovieContext } from '../context/movie.context';

const MovieLayout = (props) => {
    const {id} = useParams();
    const {setMovie} = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async() => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        }
        requestMovie();
    },[id]);

    return (
        <div>
            <MovieNavbar />
           {props.children}
        </div>
    )
}

export default MovieLayout;
