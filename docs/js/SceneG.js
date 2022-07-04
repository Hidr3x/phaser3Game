class SceneG1 extends Phaser.Scene {
  constructor() {
    super("SceneG1");
  }

  preload() {
    this.load.image("minidress20", "assets/dressglasesjoypng.png");
    this.load.image("background1", "assets/background.png");
    this.load.image("stripe", "assets/stripe.png");
    this.load.image("point", "assets/point.png");
    this.load.image("next", "assets/next.png");
  }

  create() {
    var image0 = this.add
      .sprite(0, 0, "background1")
      .setOrigin(0, 0)
      .setAlpha(0);
    this.tweens.add({
      targets: image0,
      alpha: 1,
      depth: 7,
      duration: 100,
    });
    var image1 = this.add
      .sprite(300, 550, "minidress20")
      .setAlpha(0)
      .setScale(0.4);
    this.tweens.add({
      targets: image1,
      alpha: 1,
      duration: 1000,
      delay: 400,
      depth: 8,
      ease: "Power2",
    });
    var image2 = this.add.sprite(300, 30, "stripe").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image2,
      alpha: 1,
      ease: "Power1",
      duration: 200,
      depth: 9,
    });
    var image3 = this.add.sprite(100, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image3,
      alpha: 1,
      depth: 9,
      ease: "Power1",
      duration: 200,
    });
    var image33 = this.add.sprite(231, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image33,
      alpha: 1,
      depth: 9,
      ease: "Power1",
      duration: 200,
    });
    var image333 = this.add.sprite(362, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image333,
      alpha: 1,
      depth: 9,
      ease: "Power1",
      duration: 200,
    });
    var image3333 = this.add.sprite(493, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image3333,
      alpha: 1,
      depth: 9,
      ease: "Power1",
      duration: 200,
    });
    var image4 = this.add.sprite(460, 840, "next").setInteractive().setAlpha(0).setScale(0.27);
    this.tweens.add({
      targets: image4,
      alpha: 0.8,
      depth: 9,
      ease: "Power1",
      // duration: 1000,
      delay:1400
    });
    image4.once(
      "pointerup",
      function () {
        this.scene.switch("SceneL1");
      },
      this
    );
  }
}

class SceneG2 extends Phaser.Scene {
  constructor() {
    super("SceneG2");
  }

  preload() {
    this.load.image("minicostum20", "assets/chokerjoy.png");
    this.load.image("background01", "assets/background.png");
    this.load.image("stripe", "assets/stripe.png");
    this.load.image("point", "assets/point.png");
    this.load.image("next", "assets/next.png");
  }

  create() {
    var image0 = this.add
      .sprite(0, 0, "background01")
      .setOrigin(0, 0)
      .setAlpha(0);
    this.tweens.add({
      targets: image0,
      alpha: 1,
      depth: 7,
      duration: 100,
      // delay:800
    });
    var image1 = this.add
      .sprite(300, 550, "minicostum20")
      .setAlpha(0)
      .setScale(0.4);
    this.tweens.add({
      targets: image1,
      alpha: 1,
      duration: 1000,
      ease: "Power2",
      delay: 400,
      depth: 8,
    });
    var image2 = this.add.sprite(300, 30, "stripe").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image2,
      alpha: 1,
      depth: 9,
      ease: "Power1",
      duration: 200,
    });
    var image3 = this.add.sprite(100, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image3,
      alpha: 1,
      depth: 9,
      ease: "Power1",
      duration: 200,
    });
    var image33 = this.add.sprite(231, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image33,
      alpha: 1,
      depth: 9,
      ease: "Power1",
      duration: 200,
    });
    var image333 = this.add.sprite(362, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image333,
      alpha: 1,
      depth: 9,
      ease: "Power1",
      duration: 200,
    });
    var image3333 = this.add.sprite(493, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image3333,
      alpha: 1,
      depth: 9,
      ease: "Power1",
      duration: 200,
    });
    var image4 = this.add.sprite(460, 840, "next").setInteractive().setAlpha(0).setScale(0.27);
    this.tweens.add({
      targets: image4,
      alpha: 0.8,
      depth: 9,
      ease: "Power1",
      // duration: 1000,
      delay:1400
    });
    image4.once(
      "pointerup",
      function () {
        this.scene.switch("SceneL2");
      },
      this
    );
  }
}
