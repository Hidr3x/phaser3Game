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
  scale: {
    // Or set parent divId here
    // parent: "phaser-example",

  mode: Phaser.Scale.ENVELOPER,
     autoCenter: Phaser.Scale.CENTER_BOTH,

    // Or put game size here
    // width: 1024,
    // height: 768,

    // Minimum size
    // min: {
    //     width: 800,
    //     height: 600
    // },
    // // Or set minimum size like these
    // // minWidth: 800,
    // // minHeight: 600,

    // // Maximum size
    // max: {
    //     width: 1600,
    //     height: 1200
    // },
    // Or set maximum size like these
    // maxWidth: 1600,
    // maxHeight: 1200,

    zoom: 1,  // Size of game canvas = game size * zoom
},
// autoRound: false,
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
