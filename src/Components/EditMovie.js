import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik, yupToFormErrors } from "formik";
import * as yup from "yup";

// {movieList,setMovieList} json so
  

// copied the movie details and add movie details and split

const formvalidtionSchema =yup.object({
    name: yup.string().required("must be enter 🤷‍♂️"),
    poster: yup.string().required("must be enter 🤷‍♂️").min(4,"need a bigger 😊 Poster name"),
    rating: yup.number().min(0,"need a bigger 😊 rating").max(10).required("must be enter 🤷‍♂️"),
    summary: yup.string().min(20,"need a bigger summary 😒").required("must be enter 🤷‍♂️"),
    trailer: yup.string().required("must be enter 🤷‍♂️").min(4),
  });

export function EditMovie() {
    const {id} = useParams();
    const [movie, setMovie]=useState(null);
//template litrels use day 11 1.50 template use so `use`
    useEffect(()=>{
      fetch(`https://6679349a18a459f6394e8c13.mockapi.io/movies/${id}`,{method:"GET",})
      .then((data)=>data.json())
      .then((mv)=>setMovie(mv));
    },[]);

   console.log(movie);

   return <div> {movie ?  <EditMovieForm movie={movie}/>: "loading......"}</div> 

};


 function EditMovieForm({movie}){
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster:movie.poster,
        rating:movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: formvalidtionSchema ,

      onSubmit: (updatedMovie) => {
        console.log(updatedMovie);
        editMovie(updatedMovie);
      },
    });
    const navigate = useNavigate();
 
const editMovie = (updatedMovie) => {
//       const newMovie = {
//         name: name,
//         poster: poster,
//         rating: rating,
//         trailer: trailer,
//         summary: summary,
//       };

//   //local is not work because api is working so
  //  setMovieList([...movieList, newMovie]);

  fetch(`https://6679349a18a459f6394e8c13.mockapi.io/movies/${movie.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedMovie),
    headers: { "Content-type": "application/json" },
  }).then(() => navigate("/movies"));
};


// newly add the Taskfarms
return (
  <form className="add-movie-form" onSubmit={handleSubmit}>
    <TextField
      onBlur={handleBlur}
      onChange={handleChange}
      name="name"
      value={values.name}
    //   onChange={(event) => setName(event.target.value)}
      label="Name"
      variant="outlined"
     
      error={errors.name && touched.name ? true: null}
      helperText={errors.name && touched.name ? errors.name : null}
    /><TextField
      onBlur={handleBlur}
      onChange={handleChange}
      name="poster"
      
      value={values.poster}
    //   onChange={(event) => setPoster(event.target.value)}
      label="Poster"
      error={errors.poster && touched.poster ? true: null}
      variant="outlined"
      helperText={errors.poster && touched.poster ? errors.poster : null}
      
    /> 
    <TextField
      onBlur={handleBlur}
      onChange={handleChange}
      name="trailer"
     
      value={values.trailer}
    //   onChange={(event) => setTrailer(event.target.value)}
      label="Trailer"
      variant="outlined"
      error={errors.trailer && touched.trailer ? true: null}
      helperText={errors.trailer && touched.trailer ? errors.trailer : null}
    /> 
    <TextField
      onBlur={handleBlur}
      onChange={handleChange}
      name="rating"
     
      value={values.rating}
    //   onChange={(event) => setRating(event.target.value)}
      label="Rating"
      variant="outlined"
      error={errors.rating && touched.rating ? true: null}
      helperText={errors.rating && touched.rating ? errors.rating : null}
    />
    <TextField
      onBlur={handleBlur}
      onChange={handleChange}
      name="summary"
      
      value={values.summary}
    //   onChange={(event) => setSummary(event.target.value)}
      label="Summary"
      variant="outlined"
      error={errors.summary && touched.summary ? true: null}
      helperText={errors.summary && touched.summary ? errors.summary : null}
    
    />  
    {/* <Button onClick={addMovie} variant="contained"> */}
    <Button type="submit" variant="contained">
      Save
    </Button>
  </form>
);
};

