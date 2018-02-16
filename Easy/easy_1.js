function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
  };
}

let grid = document.getElementById("grid");
let ctx = grid.getContext("2d");
let columns = 5;
let w = grid.width;
ctx.lineWidth = 1;
ctx.strokeStyle = "#C1C32F";



class Grid {
  constructor() {
    this.tiles = [];
    for (let a = 0; a < 5; a++) {
      this.tiles.push([]);
      for (let b = 0; b < 5; b++) {
        this.tiles[a].push("black");
      }
    }

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
grid2.tiles[4][0] = "red";
let dot2 = new Dots();
dot2.redDot(250, 350);
grid2.tiles[3][2] = "red";
let dot3 = new Dots();
dot3.yellowDot(150, 450);
grid2.tiles[4][1] = "yellow";
let dot4 = new Dots();
dot4.yellowDot(150, 150);
grid2.tiles[1][1] = "yellow";
let dot5 = new Dots();
dot5.blueDot(250, 250);
grid2.tiles[2][2] = "blue";
let dot6 = new Dots();
dot6.blueDot(350, 150);
grid2.tiles[1][3] = "blue";
let dot7 = new Dots();
dot7.greenDot(250, 450);
grid2.tiles[4][2] = "green";
let dot8 = new Dots();
dot8.greenDot(450, 350);
grid2.tiles[3][4] = "green";

ctx.fillStyle = "black";
ctx.strokeStyle = "black";

let str1 = "greenDot";

let str2 = str1.replace('Dot', '');
let hm = str1.includes('Dot');

let mouseClicked = false;
let mouseReleased = true;

document.addEventListener("click", onMouseClick, false);
document.addEventListener("mousemove", onMouseMove, false);

let xCord;
let yCord;
let realX;
let realY;
let curLoc;

function onMouseClick(e) {
  xCord = Math.floor((e.clientX - 100) / 50) * 50;
  yCord = Math.floor((e.clientY - 112) / 50) * 50;
  realX = (((Math.floor(xCord / 100)) * 2) + 1) * 50;
  realY = (((Math.floor(yCord / 100)) * 2) + 1) * 50;
  curLoc = [ Math.floor(xCord / 100), Math.floor(yCord / 100)];
  if (grid2.tiles[curLoc[1]][curLoc[0]] === "black") {
    return;
  }
  ctx.fillStyle = grid2.tiles[curLoc[1]][curLoc[0]];
  ctx.strokeStyle = grid2.tiles[curLoc[1]][curLoc[0]];
  mouseClicked = !mouseClicked;
  let congrats = true;
  for (let i = 0; i < answerKey.length; i++) {
    for (let j = 0; j < answerKey.length; j++) {
      if (grid2.tiles[i][j] !== answerKey[i][j]) {
        congrats = false;
      }
    }
  }
  if (congrats) {
    alert("You won! Move onto the next level");
    window.location.href = "easy_level_2.html";
  }
}




class UpLine {
  constructor() {
    this.x = realX;
    this.y = realY;
    let xLine = realX;
    let yLine = realY;
    this.color = grid2.tiles[curLoc[1]][curLoc[0]];
    let lineColor = grid2.tiles[curLoc[1]][curLoc[0]];
    grid2.tiles[curLoc[1] - 1][curLoc[0]] = lineColor;
    this.draw2 = () => {
      ctx.strokeStyle = lineColor;
      ctx.fillStyle = lineColor;
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.moveTo(xLine, yLine);
      ctx.lineTo(xLine, yLine - 100);
      ctx.stroke();
    };
  }
}

class DownLine {
  constructor() {

    this.x = realX;
    this.y = realY;
    let xLine = realX;
    let yLine = realY;

    this.color = grid2.tiles[curLoc[1]][curLoc[0]];

    let lineColor = grid2.tiles[curLoc[1]][curLoc[0]];
    grid2.tiles[curLoc[1] + 1][curLoc[0]] = lineColor;
    this.draw2 = () => {
      ctx.strokeStyle = lineColor;
      ctx.fillStyle = lineColor;
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.moveTo(xLine, yLine);
      ctx.lineTo(xLine, yLine + 100);
      ctx.stroke();
    };
  }
}

class RightLine {
  constructor() {
    this.x = realX;
    this.y = realY;
    let xLine = realX;
    let yLine = realY;
    this.color = grid2.tiles[curLoc[1]][curLoc[0]];
    let lineColor = grid2.tiles[curLoc[1]][curLoc[0]];
    grid2.tiles[curLoc[1]][curLoc[0] + 1] = lineColor;
    this.draw2 = () => {
      ctx.strokeStyle = lineColor;
      ctx.fillStyle = lineColor;
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.moveTo(xLine, yLine);
      ctx.lineTo(xLine + 100, yLine);
      ctx.stroke();
    };
  }
}

class LeftLine {
  constructor() {
    this.x = realX;
    this.y = realY;
    let xLine = realX;
    let yLine = realY;

    this.color = grid2.tiles[curLoc[1]][curLoc[0]];
    let lineColor = grid2.tiles[curLoc[1]][curLoc[0]];
    grid2.tiles[curLoc[1]][curLoc[0] - 1] = lineColor;
    this.draw2 = () => {
      ctx.strokeStyle = lineColor;
      ctx.fillStyle = lineColor;
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.moveTo(xLine, yLine);
      ctx.lineTo(xLine - 100, yLine);
      ctx.stroke();
    };
  }
}

function onMouseMove(e) {
  if (mouseClicked) {
    if (e.clientX < 95 || e.clientX > 605 || e.clientY < 95 || e.clientY > 605) {
      mouseClicked = !mouseClicked;
    }
    if ((e.clientX - 100) - realX > 50 && Math.abs((e.clientY - 112) - realY) < 50 && curLoc[0] < 4) {
      if (grid2.tiles[curLoc[1]][curLoc[0] + 1] === "black" || grid2.tiles[curLoc[1]][curLoc[0] + 1] === grid2.tiles[curLoc[1]][curLoc[0]]) {
        let line = new RightLine();
        line.draw2();
        xCord = Math.floor((e.clientX - 100) / 50) * 50;
        yCord = Math.floor((e.clientY - 112) / 50) * 50;
        realX = (((Math.floor(xCord / 100)) * 2) + 1) * 50;
        realY = (((Math.floor(yCord / 100)) * 2) + 1) * 50;
        curLoc = [ Math.floor(xCord / 100), Math.floor(yCord / 100)];
        ctx.beginPath();
        ctx.arc(realX, realY, 0.6 , 0, 2 * Math.PI);
        let lineColor = grid2.tiles[curLoc[1]][curLoc[0]];
        ctx.fillStyle = lineColor;
        ctx.strokeStyle = lineColor;
        ctx.stroke();
        ctx.fill();
      }


    }
    if ((e.clientX - 100) - realX < -50 && Math.abs((e.clientY - 112) - realY) < 50 && curLoc[0] > 0) {
      if (grid2.tiles[curLoc[1]][curLoc[0] - 1] === "black" || grid2.tiles[curLoc[1]][curLoc[0] - 1] === grid2.tiles[curLoc[1]][curLoc[0]]) {
        let line = new LeftLine();
        line.draw2();
        xCord = Math.floor((e.clientX - 100) / 50) * 50;
        yCord = Math.floor((e.clientY - 112) / 50) * 50;
        realX = (((Math.floor(xCord / 100)) * 2) + 1) * 50;
        realY = (((Math.floor(yCord / 100)) * 2) + 1) * 50;
        curLoc = [ Math.floor(xCord / 100), Math.floor(yCord / 100)];
        ctx.beginPath();
        ctx.arc(realX, realY, 0.6 , 0, 2 * Math.PI);
        let lineColor = grid2.tiles[curLoc[1]][curLoc[0]];
        ctx.fillStyle = lineColor;
        ctx.strokeStyle = lineColor;
        ctx.stroke();
        ctx.fill();
      }

    }
    if ((e.clientY - 112) - realY < -50 && Math.abs((e.clientX - 100) - realX) < 50 && curLoc[1] > 0) {
      if (grid2.tiles[curLoc[1] - 1][curLoc[0]] === "black" || grid2.tiles[curLoc[1] - 1][curLoc[0]] === grid2.tiles[curLoc[1]][curLoc[0]]) {
        let line = new UpLine();
        line.draw2();
        xCord = Math.floor((e.clientX - 100) / 50) * 50;
        yCord = Math.floor((e.clientY - 112) / 50) * 50;
        realX = (((Math.floor(xCord / 100)) * 2) + 1) * 50;
        realY = (((Math.floor(yCord / 100)) * 2) + 1) * 50;
        curLoc = [ Math.floor(xCord / 100), Math.floor(yCord / 100)];
        ctx.beginPath();
        ctx.arc(realX, realY, 0.6 , 0, 2 * Math.PI);
        let lineColor = grid2.tiles[curLoc[1]][curLoc[0]];
        ctx.fillStyle = lineColor;
        ctx.strokeStyle = lineColor;
        ctx.stroke();
        ctx.fill();
      }

    }
    if ((e.clientY - 112) - realY > 50 && Math.abs((e.clientX - 100) - realX) < 50 && curLoc[1] < 4) {
      if (grid2.tiles[curLoc[1] + 1][curLoc[0]] === "black" || grid2.tiles[curLoc[1] + 1][curLoc[0]] === grid2.tiles[curLoc[1]][curLoc[0]]) {
        let line = new DownLine();
        line.draw2();
        xCord = Math.floor((e.clientX - 100) / 50) * 50;
        yCord = Math.floor((e.clientY - 112) / 50) * 50;
        realX = (((Math.floor(xCord / 100)) * 2) + 1) * 50;
        realY = (((Math.floor(yCord / 100)) * 2) + 1) * 50;
        curLoc = [ Math.floor(xCord / 100), Math.floor(yCord / 100)];
        ctx.beginPath();
        ctx.arc(realX, realY, 0.6 , 0, 2 * Math.PI);
        let lineColor = grid2.tiles[curLoc[1]][curLoc[0]];
        ctx.fillStyle = lineColor;
        ctx.strokeStyle = lineColor;
        ctx.stroke();
        ctx.fill();

      }
    }
  }

}

let answerKey = [["red", "red", "red", "red", "red"],
                 ["red", "yellow", "blue", "blue", "red"],
                 ["red", "yellow", "blue", "red", "red"],
                 ["red", "yellow", "red", "red", "green"],
                 ["red", "yellow", "green", "green", "green"]];
