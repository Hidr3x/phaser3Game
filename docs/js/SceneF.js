var Boot4 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Boot() {
    Phaser.Scene.call(this, { key: "boot4", active: false });
  },

  preload: function () {
    this.load.image("atari1111", "assets/Group 848.png");
    this.load.image("atari2222", "assets/Group 849.png");
    this.load.image("girl1111", "assets/Girls_new_pl 333.png");
    this.load.image("choose11", "assets/choose.png");
    this.load.image("girl-in-minicostum1", "assets/girlcostumdefault.png");
    this.load.image("background44", "assets/background.png");
  },

  create: function () {
    this.scene.start("sceneA4");
    this.scene.launch("sceneB4");
  },
});

var Scene8 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Scene8() {
    Phaser.Scene.call(this, { key: "sceneA4" });
  },

  create: function () {
    var image0 = this.add
      .sprite(0, 0, "background44")
      .setOrigin(0, 0)
      .setAlpha(0);
    this.tweens.add({
      targets: image0,
      alpha: 1,
      depth: 1,
      duration: 0,
      // delay: 40000,
      
    });
    var image5 = this.add
      .sprite(300, 550, "girl-in-minicostum1")
      .setAlpha(0)
      .setScale(0.5);
    this.tweens.add({
      targets: image5,
      alpha: 1,
      // delay: 40000,
      ease: "Power1",
      duration: 1300,
      depth: 2,
    });
    var image6 = this.add.sprite(300, 50, "choose11").setAlpha(0).setScale(0.5);
    this.tweens.add({
      targets: image6,
      alpha: 1,
      // delay: 40000,
      ease: "Power4",
      duration: 400,
      depth: 2,
    });
    var image = this.add
      .sprite(150, 700, "atari1111")
      .setInteractive()
      .setScale(0.9)
      .setAlpha(0);
      image.once(
        "pointerup",
        function () {
          this.scene.switch("SceneH1");
          this.scene.remove("sceneB4");
        },
        this
      );
    this.tweens.add({
      targets: image,
      alpha: 1,
      // delay: 40000,
      ease: "Sine.easeInOut",
      duration: 400,
      depth: 3,
    });
  },
});

var Scene9 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Scene9() {
    Phaser.Scene.call(this, { key: "sceneB4" });
  },

  create: function () {
    var image = this.add
      .sprite(450, 700, "atari2222")
      .setInteractive()
      .setScale(0.9)
      .setAlpha(0);
      image.once(
        "pointerup",
        function () {
          this.scene.switch("SceneH2");
          this.scene.remove("sceneA4");
        },
        this
      );
    this.tweens.add({
      targets: image,
      alpha: 1,
      // delay: 40000,
      ease: "Sine.easeInOut",
      duration: 400,
      depth: 3,
    });
  },
});
