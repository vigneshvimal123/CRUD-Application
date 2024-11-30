import { useState } from "react";
import { ColorBox } from "./ColorBox";

function AddColor(){ 
    const [color,setColor]=useState("orange");
    
    const styles={
          background: color,
    };
   
    const [colorList,setColorList]=useState([
         "crimson","orangered","orange","pink" ,
    ])
    // const colorList=[ "crimson", "orange", "yellow", "pink"];
    return(

      
  <div>
    <input  style={styles} onChange={(event)=>setColor(event.target.value)} placeholder="Enter a color" value={color}/>
  
   {/* <button >Add Color</button> */}
   <button onClick={()=>setColorList([...colorList,color])}>Add color</button>
   <ColorBox/>
   {colorList.map((clr)=>(<ColorBox color={clr}/>))}
 </div>
    );
};
export {AddColor};