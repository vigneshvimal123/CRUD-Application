import { Counter } from "./Counter";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import { CardActions, CardContent } from "@mui/material";

function Movie({movie ,id, deleteButton,editButton}){
    // const movie={  // props 
    //       name:"vikram",
    //       poster:"https://qph.cf2.quoracdn.net/main-qimg-a62d36afe4ab6a5b715655f0f91f2f86-pjlq",
    //       rating:"8.6",
    //       summary:"Vikram is a 2022 Indian Tamil-language action thriller film[8] directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International. The film stars Kamal Haasan in the titular role, alongside Vijay Sethupathi, Fahadh Faasil, Narain, Kalidas Jayaram, Gayathrie, Chemban Vinod Jose, Santhana Bharathi and Elango Kumaravel. It is the second instalment in the Lokesh Cinematic Universe and is a spiritual successor to the 1986 film of the same name. The film follows Vikram, a former commander of the black-ops squad's pilot batch, and his efforts to take down Sandhanam, the runner of a drug syndicate Vetti Vagaiyara.",
    // };
    
    const navigate=useNavigate();
    const styles={
          color:movie.rating>8.5 ? "green": "red",
    };
    const [Show,setShow]=useState(true);
    return(
    <Card className="movie-container">
    <img src={movie.poster} alt={movie.name} className="movie-poster"/>
    <CardContent>
    <div className="movie-specs">
    <h1 className="movie-name">{movie.name}</h1>
    <IconButton aria-label="toggle summary"  color="primary" onClick={()=>setShow(!Show)}> { Show ? <ExpandMoreIcon/> : <ExpandLessIcon/>} </IconButton>
   
    {/* movies/1 */}
    {/* on click is not use */}

    <InfoIcon 
    onClick={()=>navigate(`/movies/${id}`)}
    // onClick={()=>navigate("/movies/"+ id)} 
    aria-label="toggle summary"  color="primary" >  </InfoIcon> 
    <p  style={styles} className="movie-rating">⭐{movie.rating}</p>
    </div>    
    {/* <button onClick={()=>setShow(!Show)}>Toggle Description</button> */}
    {/* conditional rendering below type name */}
    { Show ? <p  className="movie-summary">{movie.summary}</p>:null}
    </CardContent>
    <CardActions>
        {/* render props pattern */}
     <Counter/>{editButton}{deleteButton}
    </CardActions>
    </Card>
    );
}
export {Movie};