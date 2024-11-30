// import { useFormik } from "formik";
// import * as yup from 'yup';

// const movieValidation=yup.object({
//   password: yup.string().min(4,"😒").required("a cool password"),
//   email:yup.string().min(8 , "Need a bigger emal 😍").required("cool name"),
// });

// export function BasicForm(){
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//    validationSchema: movieValidation,
//    onSubmit:(values)=>{
//     console.log("Form values:", values);
//    },
//   });


//   return (
//     <form className="add-movie-form" onSubmit={formik.handleSubmit}>
//       <h1>basic form</h1>
//       <input value={formik.values.email} type="email"
       
//       name="email"
//       placeholder="Email" 
//           onChange={formik.handleChange}/>
//           {formik.errors.email}
//       <input value={formik.values.password} type="text" placeholder="Password"
//           name="password"
//           onChange={formik.handleChange} />{formik.errors.password}
//       <button type="submit">submit</button>
//     </form>
  
// );
// }



