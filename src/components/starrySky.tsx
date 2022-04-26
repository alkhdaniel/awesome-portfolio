import styled from "styled-components"
import React, {useRef, useEffect} from 'react'

const Canvas = styled.canvas`
	position:absolute;
	top:0;
	right:0;
	z-index:3;
`



const StarrySky = props => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

	window.onresize = updateCanvasSize;
	function updateCanvasSize() {
		canvas.width = document.body.offsetWidth;
		canvas.height = canvas.parentElement.parentElement.clientHeight;
	}
	updateCanvasSize();

	let arrStars = []
	let starCount;
	canvas.width < 800 ? starCount = 15 : starCount = 30;

	function Star(x,y,size,sizeChangeSpeed){
	    this.x = x;
	    this.y = y;
	    this.size = size;
	    this.sizeChange = sizeChangeSpeed;
	}
	Star.prototype = {
	    constructor: Star,
	    render: function(){
	    	context.save();
			context.translate(this.x,this.y);
			context.scale(this.size,this.size);
			context.rotate(Math.PI/4);
			context.shadowBlur = 8; 
			context.shadowColor = "white";
			context.fillStyle = "white";
			context.fillRect(-this.size/2,-this.size/2,this.size,this.size);
			context.restore();
	    },
	    update: function(i){
	       if (this.size > 2.5){
	           this.sizeChange = -this.sizeChange;
	       }
	       if (this.size < 0.1) {
	       		arrStars.splice(i,1)
	       		addStar(Math.random() * 0.75 + .1)
	       }
	       this.size += this.sizeChange;
	    }
	}
	function addStar(size) {
		let x = Math.floor((Math.random()*canvas.width)+1);
	    let y = Math.floor((Math.random()*canvas.height)+1);
	    let sizeChangeSpeed = (Math.random()*0.02+0.005);
	    let star = new Star(x, y, size, sizeChangeSpeed);
	    arrStars.push(star);
	}
	for(let i = 0; i < starCount; i++){
	    addStar(Math.random() * 2.4 + .1)
	}

	function update(){
	  for(let i = 0; i < arrStars.length; i ++){
	    arrStars[i].update(i);
	  }
	}
	function animate(){
	  update();
	    context.clearRect(0,0,canvas.width, canvas.height);
	    for(let i = 0; i < arrStars.length; i++){
	      arrStars[i].render();
	    }
	    requestAnimationFrame(animate);
	}
	animate();
  }, [])
  
  return <Canvas ref={canvasRef} {...props}/>
}

export default StarrySky;