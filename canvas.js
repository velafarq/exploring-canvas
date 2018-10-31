const canvas = document.querySelector("canvas");
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// // c.fillRect(x, y, width, height);
// c.fillStyle = "rgba(63, 191, 165, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(101, 63, 191, 0.5)";
// c.fillRect(200, 300, 100, 100);
// c.fillStyle = "rgba(191, 63, 89, 0.5)";
// c.fillRect(300, 500, 100, 100);

// c.fillStyle = "rgba(63, 191, 165, 0.5)";
// c.fillRect(500, 100, 100, 100);
// c.fillStyle = "rgba(101, 63, 191, 0.5)";
// c.fillRect(400, 300, 100, 100);

// // Line
// c.beginPath();

// // c.moveTo(x, y);

// c.moveTo(150, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.lineTo(600, 50);
// c.lineTo(700, 400);
// c.lineTo(400, 450);
// c.lineTo(200, 500);
// c.lineTo(150, 300);
// c.strokeStyle = "#333";
// c.stroke();

// // Arc/Circle
// // c.arc(300, 300, 30, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false));

// //separate paths
// // c.beginPath();
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // c.strokeStyle = "blue";
// // c.stroke();

// //create multiple circles

// for (let i = 0; i < 10; i++) {
//   let colors = [
//     "rgba(63, 191, 165, 1)",
//     "rgba(101, 63, 191, 1)",
//     "rgba(191, 63, 89, 1)"
//   ];
//   let randomColorIndex = Math.floor(Math.random() * colors.length);
//   let randomColor = colors[randomColorIndex];

//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = randomColor;
//   c.stroke();
// }

function Circle(x, y, dx, dy, radius, randomColor) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.randomColor = randomColor;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.strokeStyle = "blue";
    // c.stroke();
    c.fillStyle = this.randomColor;
    c.fill();
  };
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

let circleArray = [];

for (let i = 0; i < 100; i++) {
  let colors = [
    "rgba(63, 191, 165, 0.5)",
    "rgba(101, 63, 191, 0.5)",
    "rgba(191, 63, 89, 0.5)"
  ];
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomColorIndex];

  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;

  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;

  circleArray.push(new Circle(x, y, dx, dy, radius, randomColor));
}

//recursive function
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
