import { useEffect, useState } from "react"


function Semaphore(){
    const [time, setTime] = useState(0)
    const [color, setColor] = useState()
 
    let arrayColors = ["red", "yellow", "green"]
    let randomNum = Math.floor(Math.random()*3)
    
useEffect(()=>{

    const interval = setInterval(() => {
        setTime(time+1)
    function RandomNumber(){
        setColor(arrayColors[randomNum])
       
    }
}, 3000);
   return () => {
    clearInterval(interval)
    
   }

},[time])
    
   return  <div className="boxLights">
            <div className={`light ${randomNum == 0 ? "red-light" : ""}`}></div>
            <div className={`light ${randomNum == 1 ? "yellow-light" : ""}`}></div>
            <div className={`light ${randomNum == 2 ? "green-light" : ""}`}></div>
           </div> 
}

export default Semaphore