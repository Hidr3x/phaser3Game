class SceneE extends Phaser.Scene {
  constructor() {
    super("SceneE");
  }

  preload() {
    this.load.image("minidress", "assets/girl-in-minidress.png");
    this.load.image("background1", "assets/background.png");
    this.load.image("stripe", "assets/stripe.png");
    this.load.image("point", "assets/point.png");
  }

  create() {
    var image0 = this.add
      .sprite(0, 0, "background1")
      .setOrigin(0, 0)
      .setAlpha(0);
    this.tweens.add({
      targets: image0,
      alpha: 1,
      depth: 1,
      duration: 200,
    });
    var image1 = this.add
      .sprite(300, 550, "minidress")
      .setAlpha(0)
      .setScale(0.55);
    this.tweens.add({
      targets: image1,
      alpha: 1,
      duration: 1200,
      delay: 700,
      depth: 2,
      ease: "Power2",
    });
    var image2 = this.add.sprite(300, 30, "stripe").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image2,
      alpha: 1,
      ease: "Power1",
      duration: 200,
      depth: 3,
    });
    var image3 = this.add.sprite(100, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image3,
      alpha: 1,
      depth: 3,
      ease: "Power1",
      duration: 200,
    });
  }
}

class SceneF extends Phaser.Scene {
  constructor() {
    super("SceneF");
  }

  preload() {
    this.load.image("minicostum", "assets/girl-in-minicostum.png");
    this.load.image("background1", "assets/background.png");
    this.load.image("stripe", "assets/stripe.png");
    this.load.image("point", "assets/point.png");
  }

  create() {
    var image0 = this.add
      .sprite(0, 0, "background1")
      .setOrigin(0, 0)
      .setAlpha(0);
    this.tweens.add({
      targets: image0,
      alpha: 1,
      depth: 1,
      duration: 200,
      // delay:800
    });
    var image1 = this.add
      .sprite(300, 550, "minicostum")
      .setAlpha(0)
      .setScale(0.55);
    this.tweens.add({
      targets: image1,
      alpha: 1,
      duration: 1200,
      ease: "Power2",
      delay: 700,
      depth: 2,
    });
    var image2 = this.add.sprite(300, 30, "stripe").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image2,
      alpha: 1,
      depth: 3,
      ease: "Power1",
      duration: 200,
    });
    var image3 = this.add.sprite(100, 30, "point").setAlpha(0).setScale(1);
    this.tweens.add({
      targets: image3,
      alpha: 1,
      depth: 3,
      ease: "Power1",
      duration: 200,
    });
  }
}
