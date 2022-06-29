var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 600,
  height: 900,
  scale: {
      mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,


    zoom: 1,
  },

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

var game = new Phaser.Game(config);
