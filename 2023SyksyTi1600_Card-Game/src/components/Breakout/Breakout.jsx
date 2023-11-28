import React, { useEffect, useRef } from "react";
export default function Breakout(){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const render = ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            // ctx.fillStyle = "green";
            // ctx.fillRect(10,10,150,100);
            ctx.beginPath();
            ctx.arc(100,75,50,0,2 * Math.PI)
            ctx.stroke();
            console.log("Draw circle");
            requestAnimationFrame(render);
        };
        render();
    },[])

    return(
       <canvas id="canvas" ref={canvasRef} height="500px" width="800px" />
    );
}