import React,{useState,useEffect} from 'react';
import {Button} from "react-bootstrap" ;
import {Link} from "react-router-dom" ;
 const Moviedetails = ({match,movies}) => {
     const [movie,setMovie]= useState ({});
     useEffect(() => {
        
       setMovie(movies.find(film =>film.id === match.params.id));
     },[]);
    return (
        <div>
            <h1>{movie.title}</h1>
            <h3>{movie.description}</h3>
            <iframe width="560" height="315" src={movie.trailer} title='trailer' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>
            <Link to="/">
        <Button variant="primary">Back</Button>
      </Link>
      </div>
        </div>
    )
}
export default Moviedetails
