var points = []
var mult

var r1
var r2
var g1
var g2
var b1
var b2

var fade
var fadeAmount = 1

function preload() {
  newFont = loadFont('assets/gobold italic.ttf')
}

function setup() {
  createCanvas(800, 800);
  background(30)
  angleMode(DEGREES)
  noiseDetail(1)
  textAlign(CENTER,CENTER)
  
  density = random(10,50)
  var space = width / density

  fade = 0;
  
  for(var x = 0; x < width; x+= space) {
    for(var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10,10),y + random(-10,10))
      points.push(p)
    }
  }
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)

  mult = random(0.001, 0.01)
}

function draw() {
  noStroke()
  
  for(var i = 0; i < points.length; i++) {
    var r = map(points[i].x, 0, width, r1, r2)
    var g = map(points[i].y, 0, height, g1, g2)
    var b = map(points[i].x, 0, width, b1, b2)
    fill(r,g,b)
  
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
    points[i].add(createVector(cos(angle), sin(angle)))
    ellipse(points[i].x, points[i].y, 1)
  }

  
  textSize(width/5)
  textFont(newFont)
  fill(r,g,b,fade)
  text('SOLITAIRE',width/2,height/2)
  textSize(width/20)
  fill(r,g,b,fade)
  text('MICROSOFT PRESENTS', width/2-100, height/2-100)
  textSize(width/30)
  fill(r,g,b,fade)
  text('AVAILABLE now on PC', width/2 + 187, height/2 + 110)
  if(fade<0) fadeAmount=1;
  fade += fadeAmount;
}

function mousePressed() {
  clear()
  background(30)

  density = random(10,50)
  var space = width / density

  fade = 0;
  
  for(var x = 0; x < width; x+= space) {
    for(var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10,10),y + random(-10,10))
      points.push(p)
    }
  }
  
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)

  mult = random(0.001, 0.01)

  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)

  noStroke()
  
  for(var i = 0; i < points.length; i++) {
    var r = map(points[i].x, 0, width, r1, r2)
    var g = map(points[i].y, 0, height, g1, g2)
    var b = map(points[i].x, 0, width, b1, b2)
    fill(r,g,b)
  
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
    points[i].add(createVector(cos(angle), sin(angle)))
    ellipse(points[i].x, points[i].y, 1)
  }
}