let grid = document.getElementById("grid");
let ctx = grid.getContext("2d");
let columns = 5;
let w = grid.width;
ctx.lineWidth = 1;
ctx.strokeStyle = "#C1C32F";



class Grid {
  constructor() {
    this.createGrid = () => {
      for (let i = 0; i <= w; i += w/columns) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i, w);
      }
      ctx.stroke();
      for (let j = 0; j <= w; j += w/columns) {
          ctx.moveTo(0, j);
          ctx.lineTo(w, j);
      }
      ctx.stroke();
    };
  }
}



class Dots {
  constructor() {
    this.color = "none";
    this.redDot = (x, y) => {
      this.color = "red";
      ctx.beginPath();
      ctx.arc(x, y, 37.5 , 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.strokeStyle = "red";
      ctx.fill();
      ctx.stroke();
    };

    this.yellowDot = (x, y) => {
      this.color = "yellow";
      ctx.beginPath();
      ctx.arc(x, y, 37.5 , 0, 2 * Math.PI);
      ctx.fillStyle = "yellow";
      ctx.strokeStyle = "yellow";
      ctx.fill();
      ctx.stroke();
    };

    this.blueDot = (x, y) => {
      this.color = "blue";
      ctx.beginPath();
      ctx.arc(x, y, 37.5 , 0, 2 * Math.PI);
      ctx.fillStyle = "blue";
      ctx.strokeStyle = "blue";
      ctx.fill();
      ctx.stroke();
    };

    this.greenDot = (x, y) => {
      this.color = "green";
      ctx.beginPath();
      ctx.arc(x, y, 37.5 , 0, 2 * Math.PI);
      ctx.fillStyle = "green";
      ctx.strokeStyle = "green";
      ctx.fill();
      ctx.stroke();
    };

  }
}

let grid2 = new Grid();
grid2.createGrid();

let dot1 = new Dots();
dot1.redDot(50, 450);
let dot2 = new Dots();
dot2.redDot(250, 350);
let dot3 = new Dots();
dot3.yellowDot(150, 450);
let dot4 = new Dots();
dot4.yellowDot(150, 150);
let dot5 = new Dots();
dot5.blueDot(250, 250);
let dot6 = new Dots();
dot6.blueDot(350, 150);
let dot7 = new Dots();
dot7.greenDot(250, 450);
let dot8 = new Dots();
dot8.greenDot(450, 350);
