const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#03488b", "#04508f", "#0a5a97", "#1365a0", "#1a70a8", // Deep to Medium Blue
    "#2682c0", "#2e8dcb", "#3699d6", "#3ea4e1", "#47b0ec", // Light Blue to Teal Transition
    "#4fadf0", "#5ab352", "#64b957", "#6bb04b", "#72b651", // Teal to Green Transition
    "#78bc50", "#7fc157", "#86c85a", "#8ecd61", "#95d367", // Light Green
    "#9cd96e", "#a4df74" // Bright Green End
  ];
  
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
