import React,{useEffect,useContext} from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Componenets
import MovieNavbar from '../components/Navbar/movieNavbar.component';

// Context
import { MovieContext } from '../context/movie.context';

const MovieLayout = (props) => {
    const {id} = useParams();

    return (
        <div>
            <MovieNavbar />
           {props.children}
        </div>
    )
}

export default MovieLayout;
