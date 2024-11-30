import { useEffect, useState } from "react";
import { AddColor } from "./Components/AddColor";
import { MovieList } from "./Components/MovieList";
import { Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import { AddMovie } from "./Components/AddMovie";
import KeyboardEventspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import './App.css'
// import { MovieDetail } from "./Components/MovieDetails";
import { MovieDetails } from "./Components/MovieDetails";
import { BasicForm } from "./BasicForm";
import { TaskFarmik } from "./TaskFarmik";
import { Use } from "./Components/Use";
import { EditMovie } from "./Components/EditMovie";


export function App() {
  // const names=["vimal","vikki","vijaya","balu" ,"kaviya"]
  // const users=[{
  //       name:"Vikki",
  //       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfq_GzihBiZ7bJI-b7dEUYDM85tdC1FSn2DMzseOQQtQ&s"},{name:"pooja", pic:"https://media5.bollywoodhungama.in/wp-content/uploads/2024/04/Pooja-Hegde-3-1.jpg"},{name:"vimal", pic:"https://media.assettype.com/freepressjournal/2023-09/c0410851-5234-4240-ac6f-e0f34f06f313/Pooja_Hegde__1_.jpg"}];
 
 
  // const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
 
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    fetch("https://6671062de083e62ee439c779.mockapi.io/movies")
      .then((data) => data.json())
      .then((movies) => console.log(movies));
  }, []);


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={4}>
        <div className="App">



          {/* <User
              name="vikki"
              pic="https://w0.peakpx.com/wallpaper/616/894/HD-wallpaper-pooja-hegde-2020-beautiful.jpg"
            />
            <User
              name="rose"
              pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0ndWd4lIm6R8_Ax0AgAzo_7xa1y_M-HCOZ5Xa2-FGA&s"
            />
            <User
              name="milk"
              pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkr3YGrh3uw_nc0P6TVOhMutuHGTb-BGcaEBzEMMQaA&s"
            /> */}
          {/*
                     <Welcome name="Vikki"/>
                     <Welcome name="Vimal"/>
                     <Welcome name="vijaya"/> */}
          {/* {names.map(nm=><Welcome name ="vikki"/>)} */}

          {/* {names.map(nm=><Welcome name={nm}/>)} */}

          {/* {users.map((usr)=>( <User name={usr.name} pic={usr.pic} /> ))} */}
          {/* router link new model below */}

          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
              <Button color="inherit" onClick={() => navigate("/movie/add")}> Add Movies</Button>
              <Button color="inherit" onClick={() => navigate("/color")}>color Game</Button>
              <Button sx={{marginLeft:"auto"}} startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />} color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>{(mode === "light" ? "dark" : "light")} mode</Button>
            </Toolbar>
          </AppBar>


          {/* <ul>
              <li>
                <Link to="/">home</Link> */}
          {/* <a href="/" >home</a> */}
          {/* </li>
            <li>
              <Link to="/movies">movies </Link> */}
          {/* <a href="/movies" >movie</a> */}
          {/* </li>
            <li>
              <Link to="/movie/add">addmovie</Link> */}
          {/* <a href="/color" >color</a> */}
          {/* </li>
            <li>
              <Link to="/color"> color</Link>
            </li>
           </ul> */}


          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/BasicForm" element={<BasicForm/>}/> */}
            <Route path="/TaskFarmik" element={<TaskFarmik/>}/>
            <Route path="/flims" element={<Navigate to="/movies" />} />
            
            {/* <Route path="/movies" element={<Navigate to="/movie"/>}/> */}
            {/* <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} /> */}
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movie/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
            <Route path="/movies/edit/:id" element={<EditMovie/>}/>
            <Route path="/color" element={<AddColor/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>





          {/* <MovieList /> */}

          {/* <AddColor/> */}

        </div>
      </Paper>
    </ThemeProvider>

  );



  function Home(){
    return (
      <div className="Home">
        <h1> Welcome to my Movies Page</h1>
         {/* <Use/> */}
      </div>
    );
  }
  // function Hellow() {
  //   return (
  //     <div>
  //       <h1>hellow world</h1>
  //     </div>
  //   );
  // }



  function NotFound() {
    return (
      <div>
        <h2>
          404 Not Found
        </h2>
      </div>
    );
  };

  // function Hoi() {
  //   return (
  //     <div>
  //       <h3>  this is new page</h3>
  //     </div>
  //   );
  // };

  //   function AddColor(){ 
  //       const [color,setColor]=useState("orange");
  //       const styles={
  //             background: color,
  //       };
  //       const [colorList,setColorList]=useState([
  //            "crimson","orangered","orange","pink" ,
  //       ])
  //       // const colorList=[ "crimson", "orange", "yellow", "pink"];
  //       return(
  //     <div>
  //       <input  style={styles} onChange={(event)=>setColor(event.target.value)} placeholder="Enter a color" value={color}/>
  //      {/* <button >Add Color</button> */}
  //      <button onClick={()=>setColorList([...colorList,color])}>Add color</button>
  //      <ColorBox/>
  //      {colorList.map((clr)=>(<ColorBox color={clr}/>))}
  //    </div>
  //       );
  //   };
  //   function ColorBox({color}){
  //       const styles={
  //             width:"250px",
  //             height:"25px",
  //             background:color,
  //             marginTop:"10px",
  //       }
  //       return(
  //             <div style={styles}></div>
  //       );
  //   }
  // function Counter(){
  // let [like,setLike]=useState(0);
  // let [disLike,setdisLike]=useState(0);
  //       return(
  //           <div>
  //              <button onClick={()=>setLike(like+1)}>👍{like}</button>
  //              <button onClick={()=>setdisLike(disLike+1)}>👎{disLike}</button>
  //           </div>
  //       )
  //   }
  //   function Welcome({name}) {
  //       // const {name,pic}=props;
  //     return (
  //       <div>
  //         {/* <img className="user-profile-pic" src={pic} alt={name} /> */}
  //         <h1 className="user-name">
  //         <span className="user-first-name">{name}</span>
  //         </h1>
  //       </div>
  //     ); 
  //   }
  //   function User({pic,name}){
  //       return(
  //           <div>
  //          <img className="user-profile-pic" src={pic} alt={name}/>
  //           <h1 className="user-name">
  //             hello,<span className="user-first-name">{name}</span>
  //           </h1>
  //              <Counter/>
  //           </div>  
  //       );
  //   }
  // function MovieList(){
  //       const movieList=[{
  //             name:"vikram",
  //             poster:"https://qph.cf2.quoracdn.net/main-qimg-a62d36afe4ab6a5b715655f0f91f2f86-pjlq",
  //             rating:"8.6",
  //             summary:"Vikram is a 2022 Indian Tamil-language action thriller film[8] directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International. The film stars Kamal Haasan in the titular role, alongside Vijay Sethupathi, Fahadh Faasil, Narain, Kalidas Jayaram, Gayathrie, Chemban Vinod Jose, Santhana Bharathi and Elango Kumaravel. It is the second instalment in the Lokesh Cinematic Universe and is a spiritual successor to the 1986 film of the same name. The film follows Vikram, a former commander of the black-ops squad's pilot batch, and his efforts to take down Sandhanam, the runner of a drug syndicate Vetti Vagaiyara.",
  //       },
  //       {
  //             name:"Master",
  //             poster:"https://i.pinimg.com/736x/72/1f/78/721f7820c45d6727ee535551ce36b825.jpg",
  //             rating:"8.88",
  //             summary:"Lokesh Kanagaraj narrated the script to Vijay in May 2019, and after his acceptance, the film was launched in August 2019. Kanagaraj wrote the script, screenplay and dialogue with Rathna Kumar and Pon Parthiban being credited as co-writers. The principal photography commenced in October 2019 and ended in February 2020; the entire film was shot across",
  //       },
  //       {
  //             name:"Pooja",
  //             poster:"https://www.bollywoodhungama.com/wp-content/uploads/2022/03/EXCLUSIVE-Pooja-Hegde-on-shooting-Radhe-Shyam-in-Telugu-and-Hindi-%E2%80%9CIts-two-different-films-because-magic-happens-only-once%E2%80%9D.jpeg",
  //             rating:"9.9",
  //             summary:"Pooja Hegde is an Indian actress who predominantly appears in Telugu, Hindi and Tamil films. She began her career as a model and was crowned as the second runner-up at the 2010 I Am She–Miss Universe India pageant.",
  //       },{
  //             name:"Vishal",
  //             poster:"https://static.toiimg.com/thumb/imgsize-23456,msid-107227045,width-168,resizemode-4/107227045.jpg",
  //             rating:"8.6",
  //             summary:"Pooja Hegde is an Indian actress who predominantly appears in Telugu, Hindi and Tamil films. She began her career as a model and was crowned as the second runner-up at the 2010 I Am She–Miss Universe India",
  //       }];
  //       return(
  //             <div className="movie-list">
  //                   {movieList.map((mv,index)=>( <Movie movie={mv} key={index} />))}
  //               {/* <Movie/> */}
  //             </div>
  //       )
  // };
  //  function Movie({movie}){
  //       // const movie={  // props 
  //       //       name:"vikram",
  //       //       poster:"https://qph.cf2.quoracdn.net/main-qimg-a62d36afe4ab6a5b715655f0f91f2f86-pjlq",
  //       //       rating:"8.6",
  //       //       summary:"Vikram is a 2022 Indian Tamil-language action thriller film[8] directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International. The film stars Kamal Haasan in the titular role, alongside Vijay Sethupathi, Fahadh Faasil, Narain, Kalidas Jayaram, Gayathrie, Chemban Vinod Jose, Santhana Bharathi and Elango Kumaravel. It is the second instalment in the Lokesh Cinematic Universe and is a spiritual successor to the 1986 film of the same name. The film follows Vikram, a former commander of the black-ops squad's pilot batch, and his efforts to take down Sandhanam, the runner of a drug syndicate Vetti Vagaiyara.",
  //       // };
  //       const styles={
  //             color:movie.rating>8.5 ? "green": "red",
  //       };
  //       const [Show,setShow]=useState(true);
  //       return(
  //       <div className="movie-container">
  //       <img src={movie.poster} alt={movie.name} className="movie-poster"/>
  //       <div className="movie-specs">
  //       <h1 className="movie-name">{movie.name}</h1>
  //       <p  style={styles} className="movie-rating">⭐{movie.rating}</p>
  //       </div>
  //       <button onClick={()=>setShow(!Show)}>Toggle Description</button>
  //      { Show ? <p  className="movie-summary">{movie.summary}</p>:null}
  //       <Counter/>
  //       </div>
  //       );
  //  }
}export default App;









