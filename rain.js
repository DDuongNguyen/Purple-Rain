var drops = [];

function setup() {
  createCanvas(2600, 1380);
  // ele= createAudio('./purple_rain.mp3')
  // ele.autoplay(true)
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
