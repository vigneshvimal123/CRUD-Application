import { useFormik } from "formik";
import * as yup from "yup";

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
// //  change the function onchange to on blur
//   return (
//     <form className="add-movie-form" onSubmit={formik.handleSubmit}>
//       <h1>basic form</h1>
//       <input value={formik.values.email} type="email"
//       name="email"
//       placeholder="Email"
//         onChange={formik.handleChange}
//           onBlur={formik.handleChange}/> {formik.touched.email && formik.errors.email ? formik.errors.email : null}
//       <input value={formik.values.password} type="text" placeholder="Password"
//           name="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleChange} />{formik.touched.password && formik.errors.password ? formik.errors.password : null}
//       <button type="submit">submit</button>
//           <h2> Errors </h2>
//           <pre>{JSON.stringify(formik.errors)}</pre>
//           <h2>touched</h2>
//           <pre>{JSON.stringify(formik.touched)}</pre>
//     </form>
// );
// }
//  export function BasicForm(){
//      const movieValidationSchema=yup.object(
//       {
//         password: yup.string().min(4,"my own eror").required("must enter"),
//         email: yup.string().min(4,"hellow passord enter").max(10).required("must enter the values"),
//       }
//      );
//     const formik =useFormik({
//       initialValues:{
//         email:"",
//         password:"",
//       },
//       // is passes is submited form
//       validationSchema:movieValidationSchema,
//       onSubmit:(values)=>{
//         console.log("hellow",values);
//       },
//     });
//   return(
//     <form onSubmit={formik.handleSubmit} >
//       <input name="email" onBlur={formik.handleBlur} onChange={formik.handleChange}  value={formik.values.email} type="email" placeholder="Type your Email id"  />{formik.touched.email && formik.errors.email ? formik.errors.email :null}
//       {/* onblur is if you touh  the box is true */}
//       <input name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="text" placeholder="Enter your Password" />{formik.touched.password && formik.errors.password ? formik.errors.password : null}
// <h2>erors</h2>
//     <pre>{JSON.stringify(formik.errors)}</pre>
//    <h2>touched</h2>
//     <pre>{JSON.stringify(formik.touched)}</pre>
//      <button type="submit">submit</button>
//     </form>
//   )
//  }
// export function BasicForm(){
//  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const movieValidation=yup.object({
//       email:yup.string().min(5).max(10).required().matches(emailRegex),
//       password:yup.string().min(5).max(10).required(),
// })
// const formik=useFormik({
//   initialValues:{
//      email:"",
//      password:"",},
//      validationSchema:movieValidation,
//      onSubmit:(values)=>{
//      console.log(values);
//         },
//       });
//   return(
//    <form  onSubmit={formik.handleSubmit}>
//         <input onChange={formik.handleChange}  onBlur={formik.handleBlur}  value={formik.values.email} name="email"   type="email" placeholder="enter your email" />{formik.errors.email && formik.touched.email? formik.errors.email:null}
//         <input onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.password} name="password" type="text" placeholder="enter your password"/>{formik.errors.password && formik.touched.password ? formik.errors.password:null}
//         <button  type="submit">submit</button>
//         {/* <h1>errors</h1>
//         <p>{JSON.stringify(formik.errors)}</p>
//         <h1>touched</h1>
//         <p>{JSON.stringify(formik.touched)}</p> */}
//    </form>
//   )
// }
// export function BasicForm(){
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//  const movieValidation=yup.object({
//        email:yup.string().min(5).max(10).required().matches(emailRegex),
//        password:yup.string().min(5).max(10).required(),
//  })
//  const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
//    initialValues:{
//       email:"",
//       password:"",},
//       validationSchema:movieValidation,
//       onSubmit:(values)=>{
//       console.log(values);
//          },
//        });
//    return(
//     <form  onSubmit={handleSubmit}>
//          <input onChange={handleChange}  onBlur={handleBlur}  value={values.email} name="email"   type="email" placeholder="enter your email" />{errors.email && touched.email? errors.email:null}
//          <input onChange={handleChange}  onBlur={handleBlur} value={values.password} name="password" type="text" placeholder="enter your password"/>{errors.password && touched.password ?errors.password:null}
//          <button  type="submit">submit</button>
//          {/* <h1>errors</h1>
//          <p>{JSON.stringify(formik.errors)}</p>
//          <h1>touched</h1>
//          <p>{JSON.stringify(formik.touched)}</p> */}
//     </form>
//    )
//  }


export function TaskFarmik() {
  const condition = yup.object({
    name: yup.string().required(),
    poster: yup.string().required(),
    rating: yup.string().min(0).max(10).required(),
    summary: yup.string().min(20).required(),
    trailer: yup.string().required(),
  });

  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: condition,
      
      onSubmit: (answer) => {
        console.log(answer);
      },
    });
  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        onBlur={handleBlur}
        onChange={handleChange}
        name="name"
        value={values.name}
        type="text"
        placeholder="enter yout movie name"
      />
      {errors.name && touched.name ? errors.name : null}
      <input
        onBlur={handleBlur}
        onChange={handleChange}
        name="poster"
        value={values.poster}
        type="text"
        placeholder="given ypur poster link"
      />
      {errors.poster && touched.poster ? errors.poster : null}
      <input
        onBlur={handleBlur}
        onChange={handleChange}
        name="rating"
        value={values.rating}
        type="text"
        placeholder="given ypur rating link"
      />
      {errors.rating && touched.rating ? errors.rating : null}
      <input
        onBlur={handleBlur}
        onChange={handleChange}
        name="summary"
        value={values.summary}
        type="text"
        placeholder="given ypur summary link"
      />
      {errors.summary && touched.summary ? errors.summary : null}
      <input
        onBlur={handleBlur}
        onChange={handleChange}
        name="trailer"
        value={values.trailer}
        type="text"
        placeholder="given ypur trailer link"
      />
      {errors.trailer && touched.trailer ? errors.trailer : null}
      <button type="submit">submit</button>
    </form>
  );
}
