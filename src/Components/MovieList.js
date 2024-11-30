import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useNavigate } from "react-router-dom";
// {movieList}// this is inside the props


  export function MovieList(){
  const [movieList,setMovieList]=useState([]);

  const getMovies=()=>{
      fetch("https://6679349a18a459f6394e8c13.mockapi.io/movies" , {method:"GET",})
      .then((data)=>data.json())
      .then((mvs)=>setMovieList(mvs));
  };

useEffect(()=>getMovies(),[]);

const navigate=useNavigate();
 

   const deleteMovie =(id)=>{
    fetch(`https://6679349a18a459f6394e8c13.mockapi.io/movies/${id}`,{method:"DELETE",
   }).then((data)=>getMovies())
  };
    // const [movieList,setMovieList]=useState([{
    //       name:"vikram",
    //       poster:"https://qph.cf2.quoracdn.net/main-qimg-a62d36afe4ab6a5b715655f0f91f2f86-pjlq",
    //       rating:"8.6",
    //       summary:"Vikram is a 2022 Indian Tamil-language action thriller film[8] directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International. The film stars Kamal Haasan in the titular role, alongside Vijay Sethupathi, Fahadh Faasil, Narain, Kalidas Jayaram, Gayathrie, Chemban Vinod Jose, Santhana Bharathi and Elango Kumaravel. It is the second instalment in the Lokesh Cinematic Universe and is a spiritual successor to the 1986 film of the same name. The film follows Vikram, a former commander of the black-ops squad's pilot batch, and his efforts to take down Sandhanam, the runner of a drug syndicate Vetti Vagaiyara.",
    // },
    // {
    //       name:"Master",
    //       poster:"https://i.pinimg.com/736x/72/1f/78/721f7820c45d6727ee535551ce36b825.jpg",
    //       rating:"8.88",
    //       summary:"Lokesh Kanagaraj narrated the script to Vijay in May 2019, and after his acceptance, the film was launched in August 2019. Kanagaraj wrote the script, screenplay and dialogue with Rathna Kumar and Pon Parthiban being credited as co-writers. The principal photography commenced in October 2019 and ended in February 2020; the entire film was shot across",
    // },
    // {
    //       name:"Pooja",
    //       poster:"https://www.bollywoodhungama.com/wp-content/uploads/2022/03/EXCLUSIVE-Pooja-Hegde-on-shooting-Radhe-Shyam-in-Telugu-and-Hindi-%E2%80%9CIts-two-different-films-because-magic-happens-only-once%E2%80%9D.jpeg",
    //       rating:"9.9",
    //       summary:"Pooja Hegde is an Indian actress who predominantly appears in Telugu, Hindi and Tamil films. She began her career as a model and was crowned as the second runner-up at the 2010 I Am She–Miss Universe India pageant.",
    // },{
    //       name:"Vishal",
    //       poster:"https://static.toiimg.com/thumb/imgsize-23456,msid-107227045,width-168,resizemode-4/107227045.jpg",
    //       rating:"8.6",
    //       summary:"Pooja Hegde is an Indian actress who predominantly appears in Telugu, Hindi and Tamil films. She began her career as a model and was crowned as the second runner-up at the 2010 I Am She–Miss Universe India",
    // }]);
    //  mela iruka data passes the app js go 


    // const [name,setName]=useState("");
    // const [poster,setPoster]=useState("");
    // const [rating,setRating]=useState("");
    // const [summary,setSummary]=useState("");
    // const  addMovie=()=>{
    //     const newMovie={
    //         name:name,
    //         poster:poster,
    //         rating:rating,
    //         summary:summary,
    //     };
    //      setMovieList([...movieList, newMovie]);
    // }

    return(
        <div>
        
            {/* <div className="add-movie-form">

            <TextField onChange={(event)=>setName(event.target.value)} label="Name" variant="outlined" />
            <TextField onChange={(event)=>setPoster(event.target.value)} label="Poster" variant="outlined" />
            <TextField onChange={(event)=>setRating(event.target.value)} label="Rating" variant="outlined" />
            <TextField onChange={(event)=>setSummary(event.target.value)} label="Summary" variant="outlined" /> */}

                {/* change material ui below */}
                {/* <input  onChange={(event)=>setName(event.target.value)}type="text" placeholder="Name"/> */}
                {/* {name} */}
                {/* <input onChange={(event)=>setPoster(event.target.value)} type="text" placeholder="Poster"/>   */}
                {/* {poster} */}
                {/* <input  onChange={(event)=>setRating(event.target.value)} type="text" placeholder="Rating"/>   */}
                {/* {rating} */}
                {/* <input onChange={(event)=>setSummary(event.target.value)}  type="text" placeholder="Summary"/>   */}
                {/* {summary} */}
                {/* add panna odaney ella,ey add aganum so change hook in movie list top */}
               
              {/* <button onClick={()=>{
                const newMovie={
                    name:name,
                    poster:poster,
                    rating:rating,
                    summary:summary,
                };
                 setMovieList([...movieList, newMovie]);
              }}>Add movies</button> */} 
              {/* new method is function to add easy way mela */}

              {/* <button onClick={addMovie}>Add Movies</button> */}
              {/* <Button onClick={addMovie} variant="contained">Add Movies</Button> */}
              {/* <button onClick={addMovie}>Add Movies</button> */}
             
              {/* <AddMovie movieList={movieList} setMovieList={setMovieList}/> */}
            <div className="movie-list">
              {movieList.map((mv)=>( 
                <div key={mv.id}>

                    <Movie movie={mv} id={mv.id}
                    
                    deleteButton={<IconButton 
                      // if you use sx but style is inline so 
                      sx={{marginRight:"auto"}}
                     aria-label="delete" color="error" onClick={()=>deleteMovie(mv.id)}>
                      <DeleteIcon/>
                    </IconButton>}
                    
                     editButton={<IconButton 
                      // if you use sx but style is inline so 
                      sx={{marginRight:"auto"}}
                     aria-label="edit" color="error" onClick={()=>navigate(`/movies/edit/${mv.id}`)}>
                      <EditRoundedIcon/>
                    </IconButton>}/>
                    
                 </div>))}
                 {/* <Movie/> */}
            </div>
         </div>
       
       
    );
  

//  function AddMovie({movieList,setMovieList}){
//     const [name,setName]=useState("");
//     const [poster,setPoster]=useState("");
//     const [rating,setRating]=useState("");
//     const [summary,setSummary]=useState("");
//     const  addMovie=()=>{
//         const newMovie={
//             name:name,
//             poster:poster,
//             rating:rating,
//             summary:summary,
//         };
//          setMovieList([...movieList, newMovie]);
//     }
//     return(
//             <div className="add-movie-form">
// <TextField onChange={(event)=>setName(event.target.value)} label="Name" variant="outlined" />
// <TextField onChange={(event)=>setPoster(event.target.value)} label="Poster" variant="outlined" />
// <TextField onChange={(event)=>setRating(event.target.value)} label="Rating" variant="outlined" />
// <TextField onChange={(event)=>setSummary(event.target.value)} label="Summary" variant="outlined" />
// <Button onClick={addMovie} variant="contained">Add Movies</Button>
//             </div>
//     );
//  };
  
  };