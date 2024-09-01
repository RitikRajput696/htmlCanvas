const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
// rectangle
//  c.fillRect(200, 200, 200, 200);

// line
// c.beginPath();
// c.moveTo(50, 100);
// c.lineTo(300, 100);
// c.lineTo(400, 50); // extending the same line
// c.strokeStyle = "yellow";
// c.stroke();

// arc
// c.beginPath();
// c.arc(400, 400, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

//100 rectangles
// for (let i = 0; i < 100; i++) {
//   c.fillStyle =
//     "rgb(" +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     ")";
//   c.fillRect(
//     Math.floor(Math.random() * (window.innerWidth - 100)),
//     Math.floor(Math.random() * (window.innerHeight - 100)),
//     100,
//     100
//   );
// }

//100 circle

// for (let i = 0; i < 100; i++) {
//   c.beginPath();
//   c.arc(
//     randomInteger(100, window.innerWidth - 100),
//     randomInteger(100, window.innerHeight - 100),
//     30,
//     0,
//     Math.PI * 2,
//     false
//   );
//   c.strokeStyle =
//     "rgb(" +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     ")";
//   c.stroke();
// }

// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function Circle(x, y, radius, dx, dy, colour) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.colour = colour;

  this.Draw = function () {
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = colour;
    c.fill();
  };
  this.Update = function () {
    this.Draw();

    if (x + radius > window.innerWidth || x - radius < 0) {
      dx = -dx;
    }
    if (y + radius > window.innerHeight || y - radius < 0) {
      dy = -dy;
    }

    x += dx;
    y += dy;
  };
}

let circleArray = [];
let colorArray = ["#A02334", "#FFAD60", "#FFEEAD", "#96CEB4"];

for (let i = 0; i < 100; i++) {
  let colour = colorArray[Math.floor(Math.random() * 4)];
  let radius = Math.random() * 50;
  let x = Math.random() * (window.innerWidth - 2 * radius) + radius;
  var y = Math.random() * (window.innerHeight - 2 * radius) + radius;
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;

  circleArray.push(new Circle(x, y, radius, dx, dy, colour));
}

console.log(circleArray);

function animate() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].Update();
  }
  requestAnimationFrame(animate);
}

animate();
