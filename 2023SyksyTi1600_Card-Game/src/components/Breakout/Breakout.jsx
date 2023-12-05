import React, { useEffect, useRef } from "react";
import { BallMovement } from "./BallMovement";
import Data from "./Data";
import WallCollision from "./WallCollision";

let {ballObj} = Data;

export default function Breakout(){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const render = ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0,0,canvas.width, canvas.height);
            // ctx.fillStyle = "green";
            // ctx.fillRect(10,10,150,100);
            
            BallMovement(ctx,ballObj);
           
            WallCollision(ballObj, canvas);

            requestAnimationFrame(render);
        };
        render();
    },[])

    return(
       <canvas id="canvas" ref={canvasRef} height="500px" width="800px" />
    );
}