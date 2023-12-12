import React, { useEffect, useRef } from "react";
import { BallMovement } from "./BallMovement";
import Data from "./Data";
import WallCollision from "./WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";

let {ballObj, paddleProps, brickObj} = Data;
let bricks = [];
export default function Breakout(){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const render = ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0,0,canvas.width, canvas.height);
            let newBrickSet = Brick(2, bricks, canvas, brickObj);
            if (newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet;
              }
            bricks.map((brick) => {
                return brick.draw(ctx);
            });
            // ctx.fillStyle = "green";
            // ctx.fillRect(10,10,150,100);
            
            BallMovement(ctx,ballObj);
           
            WallCollision(ballObj, canvas);
            Paddle(ctx,canvas,paddleProps);
            requestAnimationFrame(render);
        };
        render();
    },[])

    return(
       <canvas id="canvas" ref={canvasRef} 
       onMouseMove={(event) => paddleProps.x = event.clientX - paddleProps.width / 2 } 
       height="500" width={window.innerWidth -20} />
    );
}