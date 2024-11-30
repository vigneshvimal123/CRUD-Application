import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardEventspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Movie } from "./Movie";
import { useEffect, useState } from "react";



// {movieList} props is ipo no use
 export function MovieDetails(){
    // const [movie, setMovie]=useState([]);
    const {id} = useParams();
    // const movie = movieList[id];
    const [movie, setMovie]=useState([]);
//template litrels use day 11 1.50 template use so `use`
    useEffect(()=>{
      fetch(`https://6679349a18a459f6394e8c13.mockapi.io/movies/${id}`,{method:"GET"})
      .then((data)=>data.json())
      .then((mv)=>setMovie(mv));
    },[]);
    
  
 
   console.log(movie);
   const styles={
    color: movie.rating >8.5 ? "green": "red",
};
const navigate =useNavigate();
    return(
      

 <div >
  {/* <iframe width="100%" height="850px" src={movie.trailer} title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
  {/* <iframe width="100%" height="850px" src={movie.trailer} title={movie.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
  <iframe width="100%" height="850px" src={movie.trailer} title="The GOAT | Second Single Video | Thalapathy Vijay | Venkat Prabhu | Yuvan Sankar Raja" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
   
  {/* <iframe width="100%" height="850px" src={movie.trailer} frameborder="0" allowfullscreen></iframe> */}
  {/* <iframe width="100%" height="850px" src={movie.trailer} title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
 <div className="movie-detail-container">
 <div className="movie-specs">
  <h2 className="movie-name"> {movie.name}</h2>
  <p  style={styles} className="movie-rating">⭐{movie.rating}</p>
 </div>
   <p  className="movie-summary">{movie.summary}</p>
  </div>
  <Button 
  startIcon={<KeyboardEventspaceIcon/>}
   onClick={()=> navigate(-1)} variant="contained">Back</Button>
 </div>
  );
  }