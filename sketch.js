function setup() {
  createCanvas(400, 400);
  
  video = createCapture(VIDEO)
  video.hide()
  
  tintColor = "";
  
}

function draw() {
  image(video, 0, 0, 800, 600)
  tint(tintColor)
}

function getTintColor() {
  tintColor = document.getElementById("colorInput").value;
  tint(tintColor)
}

function saveImage() {
  save("photo");
}