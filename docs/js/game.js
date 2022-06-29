// var config1 = {
//     type: Phaser.AUTO,
//     parent: "phaser-example",
//     width: 600,
//     height: 900,
//    scene: [SceneA]

//   };

var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 600,
  height: 900,
  scene: [
    SceneC,
    Boot2,
    Scene3,
    Scene4,
    Boot1,
    Scene5,
    Scene1,
    Scene2,
    SceneE,
    // Boot3,
    // Scene6,
    // Scene7,
    SceneF,
    // Boot4,
    // Scene8,
    // Scene9,
  ],
};
// var config2 = {
//   type: Phaser.AUTO,
//   parent: "phaser-example",
//   width: 600,
//   height: 900,
//  scene: [Boot1,Scene5, Scene1, Scene2,SceneE, SceneF]

// };
//   var game = new Phaser.Game(config1);
var game = new Phaser.Game(config);
function resize() {
  var canvas = game.canvas, width = window.innerWidth, height = window.innerHeight;
  var wratio = width / height, ratio = canvas.width / canvas.height;
  if (wratio < ratio) {
      canvas.style.width = width + "px";
      canvas.style.height = (width / ratio) + "px";
  } else {
      canvas.style.width = (height * ratio) + "px";
      canvas.style.height = height + "px";
  }
}
function create() {
  window.addEventListener('resize', resize);
  resize();
  // Earlier code omitted
}
create()
// var game = new Phaser.Game(config2);
