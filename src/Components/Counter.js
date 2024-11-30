import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


// function Counter1(){
//     let [like,setLike]=useState(0);
//     let [disLike,setdisLike]=useState(0);

//     const likeStyles={
//         color:like >10? "green":"deepskyblue",
//         fontSize:"18px",
//     };
//     const disLikeStyles={
//         color:disLike >10 ?"red":"deepskyblue",
//         fontSize:"18px",
//     }

//           return(

//               <div>
//                  {like-disLike >10? <h3> you are awesome 😍😍😍</h3>:null}
//                  <button style={likeStyles}  onClick={()=>setLike(like+1)}>👍{like}</button>
//                  <button style={disLikeStyles} onClick={()=>setdisLike(disLike+1)}>👎{disLike}</button>
//               </div>
         
//         )
          
//       }



function Counter(){
    let [like,setLike]=useState(0);
    let [disLike,setdisLike]=useState(0);

    const incrementLike=()=>setLike(like+1);
    const incrementDisLike=()=>setdisLike(disLike+1)

     useEffect(()=>{
       console.log("hellow this is hook effect" ,like);
     },[like,disLike]);
    // const likeStyles={
    //     color:like >10? "green":"deepskyblue",
    //     fontSize:"18px",
    // };
    // const disLikeStyles={
    //     color:disLike >10 ?"red":"deepskyblue",
    //     fontSize:"18px",
    // }

          return(

              <div>
                 {/* {like-disLike >10? <h3> you are awesome 😍😍😍</h3>:null} */}
                 {/* <button   onClick={()=>setLike(like+1)}>👍{like}</button>
                 <button  onClick={()=>setdisLike(disLike+1)}>👎{disLike}</button> */}
                 {/* const new method up  */}
                 <IconButton aria-label="like" color="primary"  onClick={incrementLike}>  <Badge badgeContent={like} color="primary">👍</Badge></IconButton>
                 <IconButton aria-label="dislike"  color="error" onClick={incrementDisLike}> <Badge badgeContent={disLike} color="error">👎</Badge> </IconButton>
                 {/* <button   onClick={incrementLike}>👍{like}</button>
                 <button  onClick={incrementDisLike}>👎{disLike}</button> */}
             
              </div>
         
        )
          
      }
export {Counter};