class SceneE extends Phaser.Scene {
  constructor() {
    super("SceneE");
  }

  preload() {
    this.load.image("minidress", "assets/Girls_new_pl 33 joy.png");
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
      .sprite(300, 550, "minidress")
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
        this.scene.switch("boot3");
      },
      this
    );
  }
}

class SceneF extends Phaser.Scene {
  constructor() {
    super("SceneF");
  }

  preload() {
    this.load.image("minicostum", "assets/girlcostum.png");
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
      .sprite(300, 550, "minicostum")
      .setAlpha(0)
      .setScale(0.55);
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
        this.scene.switch("boot4");
      },
      this
    );
  }
}
