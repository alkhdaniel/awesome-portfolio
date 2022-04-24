import styled from "styled-components"
import React, {useRef, useEffect} from 'react'

const Canvas = styled.canvas`
	position:absolute;
	top:0;
	right:0;
`



const StarrySky = props => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    var C_WIDTH = canvas.width = document.body.offsetWidth;
	var C_HEIGHT = canvas.height = document.body.offsetHeight*0.65;

	function Star(x,y,r,color){
	    this.x = x;
	    this.y = y;
	    this.r = r;
	    this.rChange = 0.02;
	    this.color = color;
	}

	Star.prototype = {
	    constructor: Star,
	    render: function(){
	      context.beginPath();
	      context.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
	      context.shadowBlur = 8; 
	      context.shadowColor = "white";
	      context.fillStyle = this.color;
	      context.fill();
	    },
	    update: function(i){
	       if (this.r > 2.5){
	           this.rChange = -this.rChange;
	       }
	       if (this.r < 0.2) {
	       		arrStars.splice(i,1)
	       		addStar()
	       }
	       this.r += this.rChange;
	    }
	}
	var arrStars = [];

	function addStar() {
		var randX = Math.floor((Math.random()*C_WIDTH)+1);
	    var randY = Math.floor((Math.random()*C_HEIGHT)+1);
	    var randR = Math.random() * 1.8 + .2;

	    var star = new Star(randX, randY, randR, randomColor());
	    arrStars.push(star);
	}

	for(let i = 0; i < 100; i++){
	    addStar()
	}

	function randomColor(){
		var arrColors = ["ffffff", "ffecd3" , "bfcfff"];
		return "#"+arrColors[Math.floor((Math.random()*3))];
	}

	function update(){
	  for(let i = 0; i < arrStars.length; i ++){
	    arrStars[i].update(i);
	  }
	}
	function animate(){
		C_WIDTH = canvas.width = document.body.offsetWidth;
		C_HEIGHT = canvas.height = document.body.offsetHeight*0.65;
	  update();
	    context.clearRect(0,0,C_WIDTH,C_HEIGHT);
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