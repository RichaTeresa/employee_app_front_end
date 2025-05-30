import { useEffect, useState } from "react"

export const UseMousePosition=()=>{


    const [mousePosition,setMousePosition]=useState({
        x:0,
        y:0
    })
   
    useEffect(()=>{
      function updateMousePosition(event:MouseEvent){
        setMousePosition({
            x:event.clientX,
            y:event.clientY
    })
    }

    document.addEventListener("mousemove",updateMousePosition)
    
    return()=>{
        document.removeEventListener("mousemove",updateMousePosition)
    
    }
    },[])
    

   

   return mousePosition

}